var Crypto = require('./cryptojs/cryptojs').Crypto || window.Crypto;
// import CryptoJs from 'crypto-js';
// console.log(CryptoJs,'CryptoJs')
function RdWXBizDataCrypt(appId, sessionKey) {
    this.appId = appId
    this.sessionKey = sessionKey
}
RdWXBizDataCrypt.prototype.decryptData = function(encryptedData, iv) {
    var encryptedData = Crypto.util.base64ToBytes(encryptedData)
    var key = Crypto.util.base64ToBytes(this.sessionKey);
    var iv = Crypto.util.base64ToBytes(iv);
    var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
    try {
        // 解密
        var bytes = Crypto.AES.decrypt(encryptedData, key, {
            asBpytes: true,
            iv: iv,
            mode: mode
        });
        var decryptResult = JSON.parse(bytes);

    } catch (err) {
        console.log(err)
    }
    if (decryptResult.watermark.appid !== this.appId) {
        console.log('水印id')
    }
    return decryptResult
}
module.exports = RdWXBizDataCrypt
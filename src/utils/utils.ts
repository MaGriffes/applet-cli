import Taro from '@tarojs/taro';

const WXBizDataCrypt = require('./WXBizDataCrypt.js');
export const decryptData = ({ openid, session_key, encryptedData, iv }) => {
  var pc = new WXBizDataCrypt(openid, session_key);
  var data = pc.decryptData(encryptedData, iv);
  return data;
}

export const getFileSystemManager_readFile = (filePath, encoding, callback) => {
  Taro.getFileSystemManager().readFile({
    filePath: filePath,
    encoding: encoding,
    success: function (res) {
      callback(res);
    }
  });
}
export const encryptByDES = (ciphertext, key) => {
  let num = ''
  for (var i = 0; i < 3; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return ciphertext.split('').join(num)
}


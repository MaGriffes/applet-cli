import Taro from '@tarojs/taro';
const amapFile = require('./amap-wx.130');
export async function getWeather(callBack) {
  let amapsdk = new amapFile.AMapWX({
    key: '37c5754b58db213ab3bea11b894dbb11'
  });
  Taro.getLocation({
    type: 'gcj02',
    isHighAccuracy: true,
    altitude: "true",
    highAccuracyExpireTime: 3000,
    success (res) {
      console.log(res,'kkkkkk')
      amapsdk.getWeather({
        type:'live',
        success: function(data){
          console.log(data,'kkkk')
          callBack(data)
        },
        fail: function(info){
          //失败回调
          console.log(info)
        }
      })
    },
    fail:()=> {
      console.log('8888')
    }
  })
}
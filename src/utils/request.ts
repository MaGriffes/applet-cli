import Taro from "@tarojs/taro";

const request = ( parameter: any ) => {
  const userInfo = Taro.getStorageSync('userInfo')
  const { url, method='POST'} = parameter;
  let options = { 
    method: method,
    url: url,
  };
  if(userInfo){
    const newInfo = JSON.parse(userInfo);
    options['header'] = {
      userToken: newInfo?.phoneNumber
    }
  }
  const newOptions = Object.assign({},parameter, options)
  /**
   * 416 用户未注册
   * 200 成功
   * 304 未开放权限
  */
  console.log(newOptions,'lnewOptions');
  return Taro.request(newOptions).then(( response: any ) => {
    let { code,message } = response.data;
    if (code === 416){ 
      Taro.reLaunch({
        url:'/pages/authorize/index'
      })
    }else if (code === 304){
      Taro.showModal({
        title: '提示',
        content: message || '无用户信息',
        showCancel: false,
      })
      Taro.reLaunch({
        url:'/pages/welcomePageCopy/index'
      })
    }else if(code !== 200){
      Taro.showModal({
        title: '提示',
        content: message || '系统异常，请稍后重试',
        showCancel: false,
      })
    }
    return response.data;
  }).catch((err)=> {
    console.log(err)
    Taro.hideLoading()
  })
}

export { request };

export default {
  pages: [
    'pages/index/index',
  ],
  "subPackages":[
    {
      "root": "subPackages/index",
      "name":"首页",
      "pages": ["index"]
    },
    {
      "root": "subComponents/Card",
      "name":"卡片",
      "pages": ["index"]
    }
  ],
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序获取位置信息" //提示文案
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
}

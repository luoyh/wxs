//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.data.userInfo){
      typeof cb == "function" && cb(this.data.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.data.userInfo = res.userInfo
              typeof cb == "function" && cb(that.data.userInfo)
            }
          })
        }
      })
    }
  },
  data:{
    userInfo: null,
    wurl: 'http://120.26.58.177:8888'
  }
})
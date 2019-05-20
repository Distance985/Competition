var that = this;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    signature: null,
    address: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: ''
    })
    wx.getSetting({
      success:function(res){
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            lang: "zh_CN",
            success: function(res){
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                avatarUrl: res.userInfo.avatarUrl
                })
              wx.hideLoading()
            }
          })
        }
      }
    })
  },
  //更改图标
  avatarChange: function(res){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
          var tempPath = res.tempFilePaths[0]
          wx.saveFile({
            tempFilePath: tempPath,
            success: function(res){
              var savedPath = res.savedFilePath
              var avatarUrl = "userInfo.avatarUrl"
              that.setData({[avatarUrl]: savedPath})
            }
          })
      },
    })
  },
  //更改性别
  changeGender: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['female','male'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
          var gender = "userInfo.gender";
          that.setData({[gender] : res.tapIndex})
        }
      }
    });
  },
  chooseLocation: function(){
    var that = this;
    wx.chooseLocation({
      success: function (res) { 
        console.log(res)
        that.setData({address: res.name})
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
// pages/signature/signature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindFormSubmit: function (e) {
    wx.setStorage({
      key: 'signature',
      data: e.detail.value.textarea,
    })
    wx.navigateBack()
  }
})
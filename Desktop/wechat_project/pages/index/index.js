var postdata = require("../../data/post_data.js") //文件路径比较难找，一点点来，从指定文件夹里加载数据给对象postdata, 只能用相对路径
Page({
  data: {
  },
  onLoad: function (options) {
    this.setData(
      {
        post_key: postdata.posts_List //将对象postdata下面的posts_List属性值给post_key去传递到渲染层
      }
    )
  },
  Post_Ontap:function(event)
  {
    var post_Id = event.currentTarget.dataset.postid//把当前事件的postid(属性)赋值给post_Id
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + post_Id
    })
    // console.log("在这个界面里呢")    调试代码
  }
})
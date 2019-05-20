var postdata = require("../../../data/post_data.js")
Page({
  data:{
     
  },
  onLoad: function (option) {
    var postId=option.id;
    this.data.currentPostId=postId;  //当前页面的id值放到当前页面数据中
    var postData = postdata.posts_List[postId];
    // this.data.postData=postData;
    this.setData({
      postData:postData
    })

    var postsCollected = wx.getStorageSync("posts_collected") //加载所有的缓存值到postsCollected数组
    if(postsCollected) //初始时，需要考虑缓存是否存在
    {
      //存在的话，我们就把当前页面的ID值设置到页面中去使用
      var postCollected = postsCollected[postId] 
      this.setData({   
        collected: postCollected  
      })
    }
    //没有缓存值，那么我们就初始设置一下
    else{  
      var postsCollected={}; 
      postsCollected[postId]=false; //每个页面我都设置初始值为flase
      wx.setStorageSync("posts_collected", postsCollected);
    }
  },
  onCollectionTap:function(event)
  {
    var postsCollected = wx.getStorageSync("posts_collected");
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected; 
    wx.setStorageSync("posts_collected", postsCollected);
    this.setData({
      collected: postCollected
    })
  }
//   OncollectionTap:function(event) //触发点击事件时会发生这个函数
//   {
//     // 获取缓存区里的值 var game = wx.getStorageSync('key')
//     // console.log(game)
//   },
//   OnshareTap:function(event)       //缓存的限制最高不可以超过10MB
//   { 
//     // wx.removeStorageSync('key')  清除指定键的缓存值
//     // wx.clearStorageSync()        清除所有的缓存值，不需要指定键名
//   },
//   // wx:wx.setStorageSync("s", "data")  //就算把小程序关闭，再重启，会发现键名和键值都还在
//   wx: wx.setStorageSync('key', {
//     game:"王者荣耀",
//     developer:"腾讯公司"
//  })  //把值设置为js对象
})
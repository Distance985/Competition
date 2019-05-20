Page({
  data: {
    lists: [
      {
        'id': '1',
       'image': '/images/baidu.jpg',
        'title': '对话产品总监 | 百度公司内推开启',
        'num': '304',
        'state': '进行中',
        'time': '10月09日 截止',
        'address': '北京市·中关村'
      },
      {
        'id': '2',
        'image': '/images/ali.png',
        'title': '阿里巴巴集团---算法工程师',
        'num': '261',
        'state': '已结束',
        'time': '5月1日 结束',
        'address': '浙江省·杭州市'
      },
      {
        'id': '3',
        'image': '/images/tencent.jpg',
        'title': '腾讯公司招聘产品经理',
        'num': '360',
        'state': '进行中',
        'time': '10月09日 17:31',
        'address': '深圳市'
      },
     {
        'id': '4',
        'image': '/images/xiaomi.jpg',
        'title': '小米科技|软件测试工程师',
        'num': '500',
        'state': '进行中',
        'time': '10月09日 17:31',
        'address': '北京市'
      }
    ]
  },
  scrollR: function (e) {
    this.setData({
      lists: this.data.lists.concat(this.data.list),
    });
  },

  onLoad: function (e) {
    this.scrollR(e);
  },

  scroll: function (e) {
    this.scrollR(this.data.offset);
  }
})


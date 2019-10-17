const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar + 6,
        TabbarBot: app.globalData.tabbar_bottom,
        swiperlist: [
            'https://image.weilanwl.com/img/4x3-1.jpg',
            'https://image.weilanwl.com/img/4x3-2.jpg',
            'https://image.weilanwl.com/img/4x3-3.jpg',
            'https://image.weilanwl.com/img/4x3-4.jpg',
        ],
        modalAttrShow:false
    },
    onLoad: function (options) {
        let that = this;
    },
  showAttrModal(e){
    this.setData({
      modalAttrShow: true
    })
  },
  hideAttrModal(e){
    this.setData({
      modalAttrShow: false
    })
  }
});

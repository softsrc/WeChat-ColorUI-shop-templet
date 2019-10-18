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
        modalAttrShow:false,
        tags:[
          {
            id:1,
            name:'低帮黑色',
            color:'red',
            selected:false,
          }, {
            id: 2,
            name: '高帮白色',
            color: 'grey',
            selected: false,
          }, {
            id: 3,
            name: '低帮黄色',
            color: 'red',
            selected: false,
          }, {
            id: 4,
            name: '低帮黄色',
            color: 'red',
            selected: false,
          }, {
            id: 5,
            name: '低帮黄色',
            color: 'red',
            selected: false,
          },
        ]
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
  },
  selectTag(e){
    console.log(e.detail.current)
  }
});

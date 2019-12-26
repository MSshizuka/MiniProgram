// pages/home/home.js
import { getMultiData, getGoodsData} from '../../server/home.js'

const back_distance = 1000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    tab_titles: ['流行', '新款', '精选'],
    goods: {
      'pop': { page: 1, list: []},
      'new': { page: 1, list: []},
      'sell': {page: 1, list: []}
    },
    currentType: 'pop',
    goodsTypes: ['pop','new','sell'],
    isShow: false,
    isFixed: false,
    imgLoad: [],
    tabFixed: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求轮播图 推荐数据
    this._getMultiData();
    //2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  //网络请求相关
  _getMultiData () {
    getMultiData().then(res => {
      // console.log(res)
      //取出数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      //将数据放入data中
      this.setData({
        banners,
        recommends
      })
    }).catch(err => {
      console.log('请求数据错误', err)
    })
  },

  _getGoodsData (type) {
    //1.获取页码
    const page = this.data.goods[type].page;
    //2.发送网络请求
    getGoodsData(type, page).then(res => {
      // console.log(res)
      //2.1.取出数据
      const list = res.data.data.list;
      const goods = this.data.goods;
      //2.2.临时存储
      goods[type].list.push(...list);
      goods[type].page += 1;
  
      this.setData({
        goods: goods
      })
    })
  },

  //事件监听相关
  handleTabClick(event) {
    const index = event.detail.index;
    this.setData({
      currentType: this.data.goodsTypes[index]
    })
  },

  onReachBottom () {
    // 上拉加载更多
    this._getGoodsData(this.data.currentType)
  },

  back_click () {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },

  onPageScroll(options) {
    this.setData({
      isShow: options.scrollTop >= back_distance,
      isFixed: options.scrollTop > this.data.tabFixed - 5
    })
  },

  rcmImgLoad () {
    this.data.imgLoad[0] = 'recommend'
    this.handleTabControl()
  },

  bannerImgLoad () {
    this.data.imgLoad[1] = 'banner'
    this.handleTabControl()
  },

  handleTabControl() {
    var flag = this.data.imgLoad.join() === "recommend,banner";
    if(flag) {
      wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
        // console.log(rect.top)
        this.data.tabFixed = rect.top
      }).exec()     
    }
  },

  imgClick (event) {
    console.log(event.detail);
    var url = event.detail.url;
    var id = event.detail.id;
    var urlArr = [];

    var data = this.data.goods[this.data.currentType].list;

    for(var i in data) {
      urlArr.push(data[i].show.img)
    }
    
    console.log(url)
    console.log(urlArr)

    wx.previewImage({
      current: url,
      urls: urlArr,
    })
  }
})
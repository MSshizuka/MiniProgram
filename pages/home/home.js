// pages/home/home.js
import { getMultiData, getGoodsData} from '../../server/home.js'
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
    goodsTypes: ['pop','new','sell']
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
  }
  
})
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
      'pop': { page: 0, list: []},
      'new': { page: 0, list: []},
      'sell': {page: 0, list: []}
    }
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
    const page = this.data.goods[type].page + 1;
    //2.发送网络请求
    getGoodsData(type, page).then(res => {
      console.log(res)
      //2.1.取出数据
      const list = res.data.data.list;
      //2.2.将数据设置到对应的type中
      const oldList = this.data.goods[type].list;
      oldList.push(...list)
      //2.3.将数据设置到data中的goods中
      console.log(`goods.${type}.list`)
      const typeKey = `goods.${type}.list`;
      const typePage = `goods.${type}.page`;
      this.setData({
        typeKey: oldList,
        typePage: page
      })
    })
  },


  //事件监听相关
  handleTabClick (event) {
    const index = event.detail.index;
    console.log(index)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
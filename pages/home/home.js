// pages/home/home.js
const app = getApp()

console.log(app.globalData.name)
console.log(app.globalData.job)

Page({
  // ------------------2.初始化数据---------------------------
  data: {
    message: '伊利亚斯菲尔·冯·爱因兹贝伦',
    list: []
  },

  // ---------------------1.监听页面得生命周期函数-----------------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // console.log('onLoad')//1
    wx.request({
      url: 'http://106.54.54.237:8000/api/v1/home/multidata',
      success:(res) => {
        console.log(res.data.data.keywords.list);
        const data = res.data.data.keywords.list;
        // console.log(this)
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady')//3
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow')//2
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('onUnload')
  },

  // --------------------3.监听wxml中相关的一些事情----------------
  handleGetUserInfo(event) {
    console.log(event)
  },

  handleViewClick () {
    console.log('伊莉雅被点击~~')
  },

  //---------------------4.其它事件 -------------------------
  //监听页面的滚动
  onPageScroll (obj) {
    console.log(obj)
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉加载')
  },
})
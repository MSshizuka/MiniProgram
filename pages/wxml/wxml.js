// pages/wxml/wxml.js
Page({
  data: {
    nowDate: new Date().toLocaleString(),
    isActive: false,
    imgPath: [],
    price: "25.123456789"
  },

  onLoad() {
    setInterval(()=> {
      this.setData({
        nowDate: this.date = new Date().toLocaleString()
      })      
    },1000)
  },

  handleBtnClick () {
    this.setData({
      isActive : !this.data.isActive
    })
  },

  imgClick () {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        this.setData({
          imgPath: res.tempFilePaths
        })
      }
    })
  }
})
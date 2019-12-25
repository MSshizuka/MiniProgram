// pages/home/home.js
Page({
  data: {
    count: 0,
    message: {}
  },

  increment (event) {
    console.log(event)
    this.setData({
      count: this.data.count + 1,
      message: event.detail
    })
  },

  itemclick(event) {
    console.log(event.detail)
  },

  incrementCpn () {
    const my_sel = this.selectComponent('#my-sel');

    my_sel.increment(20)
  }
})
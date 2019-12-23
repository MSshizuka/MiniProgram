// pages/home/home.js
Page({
  data: {
    name: '阿尔托莉雅',
    age: 18,
    message: [
      { name: '伊莉雅', job: 'Caster'},
      { name: '阿周那', job: 'Archer'},
      { name: '奥斯曼迪斯', job: 'Rider'},
      { name: '齐格鲁德', job: 'Saber'},
    ],
    count: 0
  },
  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },
  subCount () {
    this.setData({
      count: this.data.count - 1
    })
  }
})
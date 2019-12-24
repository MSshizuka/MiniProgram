// pages/scroll-view/scroll-view.js
Page({
  handleScroll (event) {
    console.log('正在滚动',event);
    console.log(event.detail.scrollTop)
  }
})
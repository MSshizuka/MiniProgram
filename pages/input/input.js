// pages/input/input.js
Page({
  handleInput (event) {
    console.log('用户输入', event);
    console.log(event.detail.value);
  },

  handleBlur(event) {
    console.log('失去焦点', event);
  },

  handleFocus(event) {
    console.log('获取焦点', event);
  }
  
})
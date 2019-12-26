// components/w-swiper/w-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bannerImageLoad () {
      const flag = this.data.isLoad;
      if (!flag) {
        // console.log('banner完成')
        this.triggerEvent('bannerImgLoad')
        this.data.isLoad = true;
      }     
    }
  }
})

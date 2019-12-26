// pages/home/childCpns/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
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
    imageLoad () {
      const flag = this.data.isLoad;
      if(!flag){
        this.triggerEvent('recommendImgLoad')
        this.data.isLoad = true;
      }     
    }
  }
})

// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab_titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    item_click(event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })

      //发出事件
      this.triggerEvent('tab_click',{index},{})
    }
  }
})

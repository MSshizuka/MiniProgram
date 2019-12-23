App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户信息
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //1.判断小程序得进入场景
    // console.log(options.scene);
    switch (options.scene) {
      case 1001:
        // console.log('发现栏小程序主入口');
        break;
      case 1013:
        // console.log('手机相册选取二维码');
        break;
    }

    //2.获取用户信息，并传递给服务器
    //异步执行
    // wx.getUserInfo({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData: {
    name: '阿尔托莉雅·潘德拉贡',
    job: 'Saber'
  }
})

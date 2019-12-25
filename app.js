const TOKEN = 'token'

App({
  golbalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    //2.判断token是否有值
    if(token && token.length !== 0) {
      //有值，只需要验证是否过期就可以了
      // console.log('有token')
      //验证token是否过期
      this.check_token(token)

    } else {
      //没有token,进行登陆操作
      this.login()
    }
  },

  login () {
    //登陆操作
    wx.login({
      success: (res) => {
        //1.获取code
        const code = res.code;

        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token

            //2.将token保存在全局变量中
            this.golbalData.token = token


            // console.log(this.golbalData.token)
            //3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  check_token (token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token 
      },
      success: (res) => {
        if(!res.data.errCode) {
          console.log('token有效')
          this.golbalData.token = token;
        } else {
          this.login();
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
})

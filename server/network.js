export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      timeout: options.timeout || 3000,
      success: resolve,
      fail: reject
    })
  })
}
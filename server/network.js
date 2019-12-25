export default function request(options) {
 return new Promise((resolve, reject) => {
   wx.request({
     url: options.url,
     timeout: options.timeout || 50000,
     method: options.method || 'get',
     data: options.data || '',
     success: resolve,
     fail: reject
   })
 })
}
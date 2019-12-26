import request from './network.js'

export function getMultiData() {
  return request({
    url: 'http://106.54.54.237:8000/api/w1/home/multidata'
  })
}

export function getGoodsData(type, page) {
  return request({
    url: 'http://106.54.54.237:8000/api/w1/home/data',
    data: {
      type,
      page
    }
  })
}
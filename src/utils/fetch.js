import axios from 'axios'
import { Message } from 'element-ui'
import store from '@store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request拦截器，可以对每个客户端的请求都做一些处理
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

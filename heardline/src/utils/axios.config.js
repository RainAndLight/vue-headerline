import router from '../components/permission.js'
// 设置request拦截器 给请求统一追加 token
import axios from 'axios'
import { Message } from 'element-ui'
// 追加设置统一的请求头
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

axios.interceptors.request.use(
  function (config) {
    let token = window.localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  })
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = '未知错误'
  switch (status) {
    case '400':
      message = '400 请求参数错误'
      break
    case '403':
      message = '403 token未携带或者过期'
      break
    case '507':
      message = '507 服务器数据异常'
      break
    case '401':
      message = 'token 过期或者未出'
      window.localStorage.clear()
      router.push('/login') // 这里没有用this.$router
      break
    default:
      break
  }
  Message({ message })
  // 希望在处理异常函数中将所有的错误都处理完毕，不再进入 cath中 也就是终止错误
  return new Promise(function () {}) // 这个意思为终止错误
  //   return Promise.resolve(new Error())
}
)
// 这里设置了全局router，原来在main.js中使用 不会用
// export default {
//   install (Vue) {
//     Vue.prototype.$axios = axios
//   }
// }
export default axios

// 设置request拦截器 给请求统一追加 token
import axios from 'axios'
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
axios.interceptors.response.use((response) => {
  return response.data ? response.data : {}
}
// (error) => {
//     return Promise.resolve(new Error())
//   }
)
// 这里设置了全局router，原来在main.js中使用
// export default {
//   install (Vue) {
//     Vue.prototype.$axios = axios
//   }
// }
export default axios

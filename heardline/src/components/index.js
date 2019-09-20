// 整体组件的统一注册
import layAside from './home/lay-aside'
import layHeader from './home/lay-header'
export default {
  install (Vue) {
    Vue.component('lay-aside', layAside)
    Vue.component('lay-header', layHeader)
  }
}

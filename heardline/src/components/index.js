// 整体组件的统一注册
import layAside from './home/lay-aside'
import layHeader from './home/lay-header'
import breadcrumbs from './common/bread-crumbs'
export default {
  install (Vue) {
    Vue.component('lay-aside', layAside)
    Vue.component('lay-header', layHeader)
    Vue.component('bread-crumbs', breadcrumbs) // 全局注册面包屑
  }
}

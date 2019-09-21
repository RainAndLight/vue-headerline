import Vue from 'vue'
import App from './App.vue'
import router from './components/permission.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from './utils/axios.config.js'
import component from './components'
Vue.use(component)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

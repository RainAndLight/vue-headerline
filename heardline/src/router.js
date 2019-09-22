import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import loginDemo from './views/login/loginDemo.vue'
import Home from './views/home/'
import main from './views/home/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginDemo',
      component: loginDemo
    },
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: main
      }, {
        path: '/home/comment',
        component: main
      }]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

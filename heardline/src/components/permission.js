import router from '../router'
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/home')) {
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  } else {
    next()
  }
//   debugger
})
export default router

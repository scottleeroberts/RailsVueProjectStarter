import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const isLoggedIn = localStorage.getItem('user')

  if(to.matched.every(record => record.name !== 'login') && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router

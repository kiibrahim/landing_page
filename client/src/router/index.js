import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children:[
        {
          path: '',
          component: () => import('../views/Overview')
        },
        {
          path: '/profile',
          component: () => import('../views/Profile')
        },
        {
          path: '/about',
          component: () => import('../views/About')
        },
        {
          path: '/something',
          component: () => import('../views/Something')
        }
      ]
    }
  ]
})

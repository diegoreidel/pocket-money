import Vue from 'vue'
import Router from 'vue-router'
import AccountsList from '@/components/AccountsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/accounts',
      name: 'accounts',
      component: AccountsList
    },
    {
      path: '/',
      name: 'accounts',
      component: AccountsList
    }
  ]
})

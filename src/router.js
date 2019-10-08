import Vue from 'vue'
import Router from 'vue-router'
import AccountsList from '@/components/AccountsList'
import AccountForm from '@/components/AccountForm'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: AccountsList
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: AccountsList
    },
    {
      path: '/accounts/add',
      name: 'add-accounts',
      component: AccountForm
    },
    {
      path: '**',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ATable from '@/components/ATable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      name: 'ATable',
      component: ATable
    },
  ]
})

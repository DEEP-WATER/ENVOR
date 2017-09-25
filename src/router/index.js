import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/Index'
import ListPage from '@/view/ListPage'
import Layout from '@/view/Layout'
import Table from '@/components/Table'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Layout,
      children: [
        {
          path: 'a',
          component: _import('Hello'),
          name: '首页'
        }
      ]
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/listpage',
      name: '一个列表页的示范',
      component: ListPage
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
const _import = require('./_import_' + process.env.NODE_ENV)
import VbindDemo from '@/view/exmapledemo/VbindDemo'
import StoreDemo from '@/view/exmapledemo/StoreDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: _import('Layout'),
      redirect: '/hello',
      children: [
        {
          path: 'hello',
          component: _import('Hello'),
          name: '首页'
        },
        {
          path: 'table',
          name: 'Table',
          component: _import('Table')
        },
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'listpage',
          name: '一个列表页的示范',
          component: _import('ListPage')
        },
        {
          path: 'tag',
          name: '一个tag页的示范',
          component: _import('Tag')
        },
        {
          path: 'count',
          name: 'Count',
          component: _import('Count')
        },
        {
          path: '/vbinddemo',
          name: 'vbind命令演示页面',
          component: VbindDemo
        },
        {
          path: '/storedemo',
          name: '测试store',
          component: StoreDemo
        }
      ]
    }
  ]
})

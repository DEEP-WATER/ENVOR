import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import ListPage from '@/view/ListPage'
import VbindDemo from '@/view/exmapledemo/VbindDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
      path: '/vbinddemo',
      name: 'vbind命令演示页面',
      component: VbindDemo
    }
  ]
})

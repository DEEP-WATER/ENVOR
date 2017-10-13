import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/components/Index'

import Tab1 from '@/components/Tab1'
import ListPage from '@/view/ListPage'
import Layout from '@/view/Layout'
import Table from '@/components/Table'
const _import = require('./_import_' + process.env.NODE_ENV)
import VbindDemo from '@/view/exmapledemo/VbindDemo'
import StoreDemo from '@/view/exmapledemo/StoreDemo'
import Excel from '@/view/excel/index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Hello',
    component: _import('Hello'),
    noDropdown: true
  },
  {
    path: '/index',
    name: 'Index',
    noDropdown: true,
    component: Index
  },
  {
    path: '/tab1',
    name: 'Tab1',
    noDropdown: true,
    component: Tab1
  },
  {
    path: '/listpage',
    name: '一个列表页的示范',
    component: Layout,
    redirect: '/listpage/index',
    icon: 'zujian',
    children: [
      { path: 'index', component: ListPage, name: '介绍 ' },
      { path: 'tinymce', component: VbindDemo, name: '富文本编辑器' },
      {path: 'storedemo', name: '测试store', component: StoreDemo}
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'EXCEL',
    children: [
      { path: 'download', component: Excel, name: '导出excel' }
      // { path: 'download2', component: _import('excel/selectExcel'), name: '导出已选择项' },
      // { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
    ]
  },
  {
    path: '/layout',
    name: 'Layout',
    noDropdown: true,
    component: Layout
  },
  {
    path: '/table',
    name: 'Table',
    noDropdown: true,
    component: Table
  },
  {
    path: '/vbinddemo',
    name: 'vbind命令演示页面',
    noDropdown: true,
    component: VbindDemo
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/listpage',
  //   name: '一个列表页的示范',
  //   component: Layout,
  //   redirect: '/listpage/index',
  //   icon: 'zujian',
  //   children: [
  //     { path: 'index', component: Table, name: '介绍 ' },
  //     { path: 'tinymce', component: VbindDemo, name: '富文本编辑器' }
  //   ]
  // }
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   name: '权限测试',
  //   icon: 'quanxian',
  //   meta: { role: ['admin'] },
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('permission/index'), name: '权限测试页', meta: { role: ['admin'] } }]
  // },
  // { path: '*', redirect: '/404', hidden: true }
]

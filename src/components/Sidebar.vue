<template>
  <div id="sadebar">
    <el-menu default-active="1-4-1" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">选项4</span>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">日志管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">listpage</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组3">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <span slot="title">选项4</span>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}

#sadebar {
  height: 100%;
  text-align: left;
  overflow-y: auto;
  &::-webkit-scrollbar {display:none}
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  // 页面初始化的时候会将这些数据加载上去的
  data () {
    console.log('data')
    return {
      isCollapse1: true
    }
  },
  // 这里相当于组件对象的静态方法
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  // 这里相当于数据进行了双向绑定
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    test () {
      console.dir(this)
    },
    function () {
      console.log('show -- message')
    },
    isCollapse () {
      console.log(this.$store.sidebar)
      return !this.sidebar.opened
    }
  },
  created: function () {
    console.log('created')
    console.dir(this.store)
  }
}
</script>
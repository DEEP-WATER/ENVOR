<template>
  <div id="sadebar">
    <el-menu default-active="0" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">    
  
  <template v-for="item in addRouters">

    <router-link v-if="!item.hidden&&item.noDropdown" :to="item.path">
      <el-menu-item :index="item.path" class='submenu-title-noDropdown'>
        <!--<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>-->
        <span>{{item.name}}</span>
      </el-menu-item>
    </router-link>

    <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
      <template slot="title">
        <!--<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>-->
        <span>{{item.name}}</span>
      </template>
      <template v-for="child in item.children" v-if='!child.hidden'>

        <span class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </span>

        <router-link v-else :to="item.path+'/'+child.path">
          <el-menu-item :index="item.path+'/'+child.path">
            <!--<icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg>-->
            <span>{{child.name}}</span>
          </el-menu-item>
        </router-link>

      </template>

    </el-submenu>

  </template>

    </el-menu>


  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}

.el-menu-vertical-demo.el-menu--collapse{
  // width: 100px;
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
      'permission_routers',
      'addRouters',
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
    console.dir(this.$store)
    this.$store.dispatch('GenerateRoutes')
  }
}
</script>
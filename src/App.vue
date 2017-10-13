<template>
  <div id="app">
    <div class="menu">      
      <Sidebar></Sidebar>
    </div>
    <div class="content" :class="{hideSidebar:!sidebar.opened}">
      <Navigator></Navigator>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigator from '@/components/Navigator'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: { Navigator, Sidebar },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html {
  height: 100%;
  margin: 0px;
}
body {
  height: 100%;
  margin: 0px;
}
.menu {
  min-width: 38px;
  height: 100%;
  float: left;
  overflow: hidden;
}
.content {
  height: 100%;
  margin-left: 200px;
}
.content.hideSidebar {
  margin-left: 64px;
}

</style>

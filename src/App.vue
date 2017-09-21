<template>
  <div id="app">
    <div class="menu">      
      <Sidebar></Sidebar>
    </div>
    <div class="content">
      <Navigator></Navigator>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: { Navigator, Sidebar }
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
  width: 200px;
  height: 100%;
  float: left;
  overflow: hidden;
}
.content {
  height: 100%;
  margin-left: 200px;
}
</style>

<template>
  <div id="app">
    <Navigator></Navigator>
    <Sidebar></Sidebar>
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
  font-size: 18px;
  margin: 0px;
}

body {
  height: 100%;
  margin: 0px;
}
</style>

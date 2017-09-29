<template>
  <div id="navigator">
    {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'Navigator',
    data () {
      return {
        name: 'show message'
      }
    }
  }
</script>

<style>
#navigator {
  width: 100%;
  height: 50px;
  background-color: #eef1f6;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
}
</style>


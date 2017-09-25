<template>
  <div v-on:click="itemclick(item.name)" class="vbinditem">
    {{item.name}}
    <el-input v-on:change="itemchange()"></el-input>
  </div>
</template>

<style lang="css" scoped>
  .vbinditem {
    width: 200px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid red;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'VbindItem',
    props: ['item'],
    data () {
      return {

      }
    },
    methods: {
      itemclick (name) {
        console.log('被点击了' + name)
      },
      itemchange () {
        console.log('see')
      }
    }
  }
</script>
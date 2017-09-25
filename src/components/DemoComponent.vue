<template>
  <div class="democomponent" data-name=":computedtest">
    {{myname}}
    <el-button v-on:click='showname' type="primary">演示一个点击事件的绑定</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>        
  </div>
  
</template>

<style scoped>

</style>

<script>
  export default{
    name: 'democomponent',
    data () {
      return {
        myname: 'jingchenxu'
      }
    },
    created: function () {
      console.dir(this)
      console.log('组件被创建了')
    },
    distroyed: function () {
      console.log('组件被销毁了')
    },
    // 此处会实现数据的双向绑定
    computed: {
      computedtest: function () {
        return this.myname
      }
    },
    methods: {
      showname: function () {
        console.log(this.myname)
      }
    }
  }
</script>
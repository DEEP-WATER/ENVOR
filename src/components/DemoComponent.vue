<template>
  <div class="democomponent" data-name=":computedtest">
    
    <el-button v-on:click='showname' type="primary">{{myname}}</el-button>
    <el-input v-model='placeholder' placeholder='placeholder'></el-input> 

    <el-button>{{saysomething}}</el-button>
    <el-input v-model='saysomething' placeholder='placeholder'></el-input>     
  </div>
  
</template>

<style scoped>

</style>

<script>
  export default{
    name: 'democomponent',
    data () {
      return {
        myname: 'jingchenxu',
        saysomething: 'nothing'
      }
    },
    // 此处会实现数据的双向绑定
    computed: {
      placeholder: {
        get: function () {
          let newname = this.myname
          return newname
        },
        set: function (value) {
          value = value.toUpperCase()
          this.myname = value
        }
      }
    },
    methods: {
      showname: function () {
        console.log(this.myname)
      }
    }
    // beforeCreate: function () {
    //   console.group('beforeCreate 组件准备创建=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:blue', 'el:' + this.myname)
    // },
    // created: function () {
    //   console.group('created 组件创建完成=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // beforeMount: function () {
    //   console.group('created 组件准备挂载=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // mounted: function () {
    //   console.group('mounted 组件挂载完成=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // beforeUpdate: function () {
    //   console.group('beforeUpdate 组件准备更新=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // updated: function () {
    //   console.group('updated 组件更新完成=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // beforeDestroy: function () {
    //   console.group('beforeDestroy 组件即将销毁=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // },
    // destroyed: function () {
    //   console.group('destroyed 组件销毁=====》')
    //   console.log('%c%s', 'color:red', 'el:' + this.$el)
    //   console.log('%c%s', 'color:red', 'el:' + this.$data)
    //   console.log('%c%s', 'color:red', 'el:' + this.myname)
    // }
  }
</script>
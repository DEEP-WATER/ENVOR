<template>
<el-breadcrumb separator="/" style="line-height: 50px;float: left;">
  <el-breadcrumb-item :to="path">{{path}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
    export default {
      name: 'pageName',
      computed: {
        path () {
          console.log(this.$route.name)
          return this.$route.name === '首页' ? this.$route.name : '首页/' + this.$route.name
        }
      }
    }
</script>
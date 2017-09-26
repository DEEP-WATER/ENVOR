<template>
  <div>
    <el-input v-model="changeinput"></el-input>
    <el-button v-on:click="changeinput">button</el-button>
  </div>
</template>

<style lang="css">
  
</style>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'storedemo',
    data () {
      return {
        changeinput: ''
      }
    },
    computed: {
      ...mapGetters([
        'storedemo'
      ])
    },
    watch: {
      changeinput (val) {
        console.log('=======' + val)
        this.$store.dispatch('StoreDemo', val)
      }
    }
  }
</script>
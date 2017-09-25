<template>
  <div>
    <el-input v-model="changeinput"></el-input>
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

      }
    },
    computed: {
      ...mapGetters([
        'storedemo'
      ]),
      changeinput () {
        return this.storedemo.input
      }
    }
  }
</script>
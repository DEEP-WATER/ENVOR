<template>
  <div>
    <div>{{count.count}}</div>
    <button @click="add">+</button>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      add () {
        console.log(this.$store)
        this.$store.dispatch('storeCount')
      }
    }
  }
</script>
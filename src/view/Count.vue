<template>
  <div>
    <div>{{count}}</div>
    <button @click="add">+</button>
  </div>
</template>
<script>
  export default {
    name: 'count',
    computed: {
      count () {
        console.log(this.$store)
        return this.$store.state.count
      }
    },
    methods: {
      add () {
        this.$store.dispatch('storeDemo')
      }
    }
  }
</script>
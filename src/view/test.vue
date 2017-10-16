<template>
  <ul>
    <li v-for="item,index in items" @click="handle(index)">
        <span>{{item.name}}</span>
        <span>{{numbers[index]}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        numbers: [],
        items: [
          {name: 'ronaldo'},
          {name: 'messi'}
        ]
      }
    },
    methods: {
      handle (index) {
        if (typeof (this.numbers[index]) === 'undefined') {
          this.$set(this.numbers, index, 1)
          console.log(this.numbers)
        } else {
          this.$set(this.numbers, index, ++this.numbers[index])
          console.log(this.numbers)
        }
      }
    }
  }
</script>
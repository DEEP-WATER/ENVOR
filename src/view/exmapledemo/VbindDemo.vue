<template>
  <div>
    <VbindItem
    v-for="item in todolist"
    :item="item"
    :key="item.id"></VbindItem>
  </div>
</template>

<style lang="css" scoped>
  
</style>

<script>
import VbindItem from '@/components/VbindItem'

export default{
  name: 'vbinddemo',
  components: { VbindItem },
  data () {
    return {
      message: 'goodmessage',
      todolist: [
        {id: '01', name: 'test1'},
        {id: '02', name: 'test2'},
        {id: '03', name: 'test3'},
        {id: '04', name: 'test4'}
      ]
    }
  }
}
</script>
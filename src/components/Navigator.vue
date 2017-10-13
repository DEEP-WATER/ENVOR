<template>
  <div id="navigator">
    
  <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
  <levelbar></levelbar>
  <tabs-view></tabs-view>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Hamburger from '@/components/Hamburger'
  import Levelbar from './Levelbar'
  import TabsView from './TabsView'

  export default {
    name: 'Navigator',
    components: {
      Hamburger,
      Levelbar,
      TabsView
    },
    data () {
      return {
        name: 'show message'
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
      }
    }
  }
</script>

<style>
#navigator {
  height: 50px;
  line-height: 50px;
  background-color: #eef1f6;
}

.hamburger-container {
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
}

</style>


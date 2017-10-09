<template>
    <div class="app-wrapper">
        <div class="main-container" :class="{hideSidebar:!sidebar.opened}">
          <!--<Sidebar class="sidebar-container"></Sidebar>-->
					<app-main></app-main>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from '@/components/Sidebar'
import AppMain from '@/components/AppMain'
export default {
  name: 'layout',
  components: {
    Sidebar,
    AppMain
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.main-container {
		margin-left: 36px;
		&.hideSidebar {
			margin-left: 200px;
		}
	}
</style>
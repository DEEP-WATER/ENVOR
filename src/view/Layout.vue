<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <Sidebar class="sidebar-container"></Sidebar>
        <div class="main-container">
					<Navbar></Navbar>
					<AppMain></AppMain>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import AppMain from '@/view/AppMain'
export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  computed: {
    sidebar () {
      console.log(this.$store.state.sidebar.sidebar)
      return this.$store.state.sidebar.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:65px;
				overflow: inherit;
				background-color: #324157;
			}
			.main-container {
				margin-left: 65px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 180px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
			background-color: #324157;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
		}
	}
</style>
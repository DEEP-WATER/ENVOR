<template>
    <el-menu class="navbar" mode="horizontal">
				<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <pageName></pageName>
				<tag>1</tag>
				<el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="" class="user-avatar">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
				<router-link class='inlineBlock' to="/" style="text-decoration: none;">
					<el-dropdown-item style="color: black;">
						首页
					</el-dropdown-item>
				</router-link>
				<a target='_blank' href="https://github.com/DEEP-WATER/ENVOR" style="text-decoration: none; color: black;">
					<el-dropdown-item>
						项目地址
					</el-dropdown-item>
				</a>
				<el-dropdown-item divided><span style="display:block;">退出登录</span></el-dropdown-item>
			</el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import PageName from '@/view/PageName'
import Tag from '@/view/Tag'
export default {
  components: {
    Hamburger,
    PageName,
    Tag
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

<style rel="stylesheet/scss" lang="scss" scoped>
	.navbar {
			height: 50px;
			line-height: 50px;
			border-radius: 0px !important;
			.hamburger-container {
					line-height: 58px;
					height: 50px;
					float: left;
					padding: 0 10px;
			}
			.errLog-container {
					display: inline-block;
					position: absolute;
					right: 150px;
			}
			.screenfull {
					position: absolute;
					right: 90px;
					top: 16px;
					color: red;
			}
			.avatar-container {
					height: 50px;
					display: inline-block;
					position: absolute;
					right: 35px;
					.avatar-wrapper {
							cursor: pointer;
							margin-top: 5px;
							position: relative;
							.user-avatar {
									width: 40px;
									height: 40px;
									border-radius: 10px;
							}
							.el-icon-caret-bottom {
									position: absolute;
									right: -20px;
									top: 25px;
									font-size: 12px;
							}
					}
			}
	}
</style>




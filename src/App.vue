<template>
	<div id="app" v-bind:class="{'sidebar-open': this.sidebarOpen}">
		<sidebar></sidebar>
		<div id="main">
			<soft-header></soft-header>
			<transition name="fade" mode="out-in">
				<router-view :key="$route.fullPath"></router-view>
			</transition>
		</div>
		<tq-footer></tq-footer>
	</div>
</template>

<script>
import SoftHeader from './components/layout/SoftHeader.vue'
import Sidebar from './components/layout/Sidebar.vue'
import tqFooter from './components/layout/Footer.vue'

export default {
	name: 'app',
	components: { SoftHeader, Sidebar, tqFooter },
	data () {
		return {
			sidebarOpen: false
		}
	}
}
</script>

<style lang="scss">
@import '@/sass/main.scss';
</style>

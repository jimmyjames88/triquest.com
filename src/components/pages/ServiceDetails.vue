<template>
	<div id="service-details">
		<section class="section">
			<div class="container is-clearfix">
				<aside class="menu is-hidden-touch">
					<ul class="menu-list">
						<li v-for="(item, index) in serviceList" :key="index">

							<router-link :to="{ name: 'service-details', params: { serviceName: index }}" v-html="item.title"></router-link>
						</li>
					</ul>
				</aside>
				<div v-html="loadedHTMLContent">

				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'ServiceDetails',
		props: [ 'serviceName'],
		data(){
			return {
				loadedHTMLContent: `
						<h3>
							<i class="fa fa-spinner fa-spin"></i> Loading
						</h3>
				`,
				serviceList: require('../../data/services.json')
			}
		},
		created(){
			let target;
			document.title = this.$titleBase + ' - ' + this.serviceList[this.serviceName]['title'].replace(/<(?:.|\n)*?>/gm, '');;
			if(document.location.hostname == 'james-allen.ca'){
				target = '/projects/triquest-new/data/service-content/' + this.serviceName + '.html';
			} else {
				target = this.$urlBase + 'data/service-content/' + this.serviceName + '.html';
			}
			axios.get(target)
				.then(
					(response) => {
						this.loadedHTMLContent = response.data;
					},
					// (error) => {
					// 	this.loadedHTMLContent = error.response.statusText;
					// }
				);

		}
	}
</script>

<style></style>

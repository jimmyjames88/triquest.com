<template>
	<div id="services">
		<section class="section">
			<div class="container">
				<h1 class="title jumbo">NDT Services</h1>

				<div>
					<div class="columns is-multiline">
						<div class="column is-6-tablet is-6-desktop is-4-widescreen" v-for="(item, index) in serviceList">
							<div class="service-box">
								<h3>
									<router-link :to="{ name: 'service-details', params: { serviceName: index }}" v-html="item.title"></router-link>
								</h3>
								<p class="is-hidden-touch">
									{{ item.description }}
								</p>
								<p class="read-more is-hidden-touch">
									<router-link :to="{ name: 'service-details', params: { serviceName: index }}">
										<i class="fa fa-info-circle"></i> Read More
									</router-link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Services',
		data(){
			return {
				serviceList: require('../../data/services.json')
			}
		},
		created(){

		}
	}
</script>

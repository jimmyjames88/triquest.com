<template>
	<div id="mytriquest-slide" class="columns is-mobile">
		<div class="column">
			<h2 class="thin-heading">MY<span class="orange">TRIQUEST</span></h2>
			<slider></slider>
			<p>
				<a href="#" class="button is-primary">Learn More</a>
				<a href="#" class="button is-primary">Sign In</a>
			</p>
		</div>
		<div class="column is-3-widescreen is-4-desktop is-6-touch banner-photo">
			<img :src="require('@/assets/img/mytriquest-screens.png')" />
			<div class="badges">
				<a href="#">
					<img :src="require('@/assets/img/apple-store-badge.png')" />
				</a>
				<a href="#">
					<img :src="require('@/assets/img/google-play-badge.png')" />
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Carousel',
		data(){
			return {

			}
		}
	}
</script>

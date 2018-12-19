<template>
	<div>
		<transition-group tag="div" name="fade" class="slider columns is-hidden-desktop is-clipped">
			<div class="column is-12 slide" v-for="(item, index) in slides" v-if="activeSlide == index" :key="index + 0">
				<div>
					<i class="fa" v-bind:class="item.icon"></i>
				</div>
				<div>
					<h3>{{ item.title }}</h3>
					<p>{{ item.text }}</p>
				</div>
			</div>
		</transition-group>

		<div class="slider columns is-multiline is-hidden-touch">
			<div class="column is-6 slide" v-for="(item, index) in slides">
				<div>
					<i class="fa" v-bind:class="item.icon"></i>
				</div>
				<div>
					<h3>{{ item.title }}</h3>
					<p>{{ item.text }}</p>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		name: 'Slider',
		data(){
			return {
				slides: require('../data/slides.json'),
				activeSlide: 0
			}
		},
		computed: {
			slideCount(){
				return this.slides.length ;
			}
		},
		methods: {
			nextSlide(){
				if(this.activeSlide === (this.slideCount - 1)) {
					this.activeSlide = 0;
				} else {
					this.activeSlide += 1 ;
				}
			}
		},
		created(){
			let self = this;
			// set random initial slide
			self.activeSlide = Math.floor(Math.random() * Math.floor(this.slideCount));
			setInterval(function(){
				self.nextSlide();
			}, 5000)

		}

	}
</script>

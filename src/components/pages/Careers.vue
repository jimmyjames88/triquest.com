<template>
	<div id="careers">
		<section class="section">
			<div class="container">
				<h1 class="title jumbo">Careers</h1>
				<careers-form></careers-form>
			</div>
		</section>
	</div>
</template>
<script>
	import CareersForm from '../forms/CareersForm.vue';
	export default {
		name: 'Careers',
		components: { CareersForm },
		props: [ 'confirmation' ],
		data(){
			return {

			}
		},
		methods: {

		},
		created(){
		}
	}
</script>

<template>
	<div id="contact">
		<section class="section">
			<div class="container">
				<h1 class="title jumbo">Contacts &amp; Locations</h1>
				<div class="columns is-multiline">
					<location v-for="(item, index) in this.locationsList" :key="index" :item="item"></location>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Location from "../Location";
	import axios from 'axios';
	export default {
		name: 'Conact',
		components: { Location },
		data(){
			return {
				locationsList: require('../../data/locations.json')
			}
		},
		mounted(){


		}
	}
</script>

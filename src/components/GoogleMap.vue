<template>
	<div class="google-map-preview" :id="name"></div>
</template>
<script>
	export default {
		name: 'GoogleMap',
		props: ['name', 'coords'],
		data(){
			return {

			}
		},
		mounted(){
			var map = this.map;
			var target = new google.maps.LatLng(this.coords[0], this.coords[1]);
			map = new google.maps.Map(document.getElementById(this.name), {
				zoom: 14,
				center: target
			});
			var marker = new google.maps.Marker({
				position: target,
				map: map,
				title: 'TriQuest NDT'
			});
			map.setCenter(target);
		}
	}
</script>

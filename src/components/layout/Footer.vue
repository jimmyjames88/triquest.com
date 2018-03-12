<template>
	<div id="footer">
		<section class="section">
			<div class="container has-text-centered">
				<p>&copy; Copyright TriQuest NDT 2018</p>
				<div>
					<a href="http://james-allen.ca?ref=triquestndt" class="is-inline-block" target="_blank" title="Website by James Allen">
						Website By<br />
						<img :src="this.$urlBase + 'assets/img/james-allen.png'" />
					</a>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'tqFooter',
		data(){
			return {

			}
		}
	}
</script>

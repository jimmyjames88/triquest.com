<template>
	<div id="mytriquest-software">
		<section class="section">
			<div class="container">
				<h1 class="title jumbo">
					My<span class="orange">TriQuest</span> Software
				</h1>
				<div class="image is-pulled-right">
					<img :src="require('@/assets/img/mytriquest-screens.png')" />
					<label>
						<img :src="require('@/assets/img/windows-ios-android-logos.png')" />
					</label>
				</div>
				<p>MYTRIQUEST is proprietary software which includes on-site computer generated reporting, client job dispatching, QA/QC documentation including NDT procedures, personnel technical and safety certifications, applicable codes and specifications, and client welder proficiency statistics for radiography services. </p>
				<p>Our clients are provided login portals to access this information in secured integrated cloud storage. </p>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'MyTriQuestSoftware',
		data(){
			return {

			}
		}
	}
</script>

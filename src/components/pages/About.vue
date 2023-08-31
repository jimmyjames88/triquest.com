<template>
	<div id="about">
		<section class="section">
			<div class="container">
				<h1 class="title jumbo">About TriQuest NDT</h1>
				<div class="image is-pulled-left">
					<img :src="require('@/assets/img/triquest-building-photo.jpg')" alt="TriQuest NDT Calgary Office" />
				</div>
				<p>
					TriQuest Nondestructive Testing Corp. (TriQuest NDT) is a Nondestructive Testing Service Company providing services throughout Western Canada to
					the Oil &amp; Gas industry, Manufacturing, Fabrication, Power Generation, In-Service Piping, and Above Ground Storage Tanks. We specialize in the following
					NDT methods; Conventional Gamma Radiography, Computed Radiography, Conventional Ultrasonics, Automated Ultrasonics, Phased Array, TOFD, Pipeline Integrity,
					API 653 Tank Inspection, Magnetic Particle, Liquid Penetrant, Visual Inspection, Ferrite Testing, Hardness Testing, XRF Alloy Analysis, Optical Emission
					Spectroscopy (OES)- Spark Testing, Boroscope Inspection, and Rope Access Inspection.
				</p>
				<h2>MY<span class="orange">TRIQUEST</span> Software</h2>
				<p>
					MY<span class="orange">TRIQUEST</span> enhances our services by providing instant electronic reporting, job dispatching, inventory and asset control,
					access to NDT procedures, NDT personnel certifications, and client welder statistics including weld pass and failure rates. This information is securely
					available on a client portal and is a key component to our commitment to providing timely information to optimize our client's operations.
				</p>

				<h2>Personnel</h2>
				<p>
					Our personnel are highly skilled, professional, and proficient at their trades providing our customers with accurate reliable data and are certified in
					accordance with the Canadian Nuclear Safety Commission (CNSC), the Canadian General Standards Board (CGSB), and TriQuest NDT SNT-TC-1A Written Practice for
					various NDT disciplines.
				</p>

				<div class="call-to-action">
					<div>
						<p>
							TriQuest NDT is a certified welding inspection organization per CSA Standard W1781.1 and inspectors are certified per CSA Standard W178.2 by the Canadian Welding Bureau (CWB).
						</p>
					</div>
					<div>
						<router-link to="/safety" class="button is-primary">Safety Info</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data(){
			return {

			}
		}
	}
</script>

<style></style>

<template>
	<div id="home">
		<section id="banner" class="section">
			<div class="container">
				<div id="mytriquest-slide" class="columns is-mobile">
					<div class="column is-7-tablet is-8-mobile">
						<h2 class="thin-heading">
							MY<span class="orange">TRIQUEST</span>
							<img :src="this.$urlBase + 'assets/img/windows-ios-android-logos.png'" class="os-logos" />
						</h2>
						<slider></slider>
						<p class="buttons">
							<router-link to="/mytriquest-software" class="button is-primary">Explore MYTRIQUEST</router-link>
						</p>
					</div>
					<div class="column is-5-widescreen is-5-desktop is-6-tablet is-4-mobile banner-photo has-text-centered-touch is-flex-desktop is-flex-widescreen is-flex-fullhd">
						<router-link to="/mytriquest" class="is-inline-block" title="Explore MYTRIQUEST NDT Software">
							<img class="is-hidden-touch" :src="this.$urlBase + 'assets/img/mytriquest-screens.png'" alt="MYTRIQUEST NDT Software"/>
							<img class="is-hidden-desktop" :src="this.$urlBase + 'assets/img/mytriquest-screens-mobile.png'" alt="MYTRIQUEST NDT Software" />
						</router-link>
						<!-- <div class="badges">
							<img :src="this.$urlBase + 'assets/img/apple-store-badge.png'" alt="iOS Compatible" />
							<img :src="this.$urlBase + 'assets/img/google-play-badge.png'" alt="Android Compatible" />
						</div> -->
					</div>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12-touch is-7-desktop">
						<h1 class="title"><span class="orange numfix">24/7</span> Nondestructive Testing</h1>
						<h2 class="subtitle">Oil &amp; Gas - Manufacturing - Power Generation &amp; more!</h2>
						<p>
							TriQuest Nondestructive Testing Corp. (TriQuest NDT) is a Nondestructive Testing Service Company providing services throughout Western Canada and internationally. Providing NDT services for the Oil & Gas industry, Manufacturing, Fabrication, Power Generation, In-Service Piping, and Above Ground Storage Tanks.
						</p>
						<p>
							We specialize in the following NDT methods; Gamma Radiography, Computed/Digital Radiography, Ultrasonics, Automated Ultrasonics, Guided Wave Ultrasonics, Phased Array, TOFD, Pipeline Integrity, API 653 Tank Inspection, Magnetic Particle, Liquid Penetrant, Visual Inspection, Ferrite Testing, Hardness Testing, XRF Alloy Analysis, Optical Emission Spectroscopy (OES), Boroscope Inspection, Rope Access Inspection, 3D Laser Scanning and Electromagnetic 3D Field Imaging.
						</p>
						<p>
							<router-link to="/services" class="button is-primary">
								Browse All Services
							</router-link>
						</p>
					</div>
					<div class="column">
						<h1 class="title">NDT Certifications</h1>
						<h2 class="subtitle">We measure our success by safety and service!</h2>
						<p>
							Our personnel are highly skilled, professional, and proficient at providing our clients with accurate reliable inspection services.  Personnel are certified in accordance with the Canadian Nuclear Safety Commission (CNSC), the Canadian General Standards Board (CGSB), and/or TriQuest NDT <strong>SNT-TC-1A</strong> Written Practice for all NDT disciplines.  TriQuest NDT is a certified welding inspection organization per <strong>CSA Standard W178.1</strong> and inspectors are certified per <strong>CSA Standard W178.2</strong> by the Canadian Welding Bureau (CWB).
						</p>
						<div class="certification-badges">
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/acsa.png'" alt="Alberta Construction Safety Association" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/cor.png'" alt="Workplace Safety Certificate of Recognition" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/cwb.png'" alt="Canadian Welding Bureau" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/isn.png'" alt="ISNetworld" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/cqn.png'" alt="CanQual Network" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/avetta.png'" alt="Avetta" />
							</span>
							<span>
								<img :src="this.$urlBase + 'assets/img/badges/complyworks.png'" alt="ComplyWorks" />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="call-to-action">
				<div>
					<p>
						TriQuest NDT offers <strong>24/7</strong> Nondestructive Testing services. We're always ready to take your call.
					</p>
				</div>
				<div>
					<router-link to="/contacts-locations" class="button is-primary is-normal">
						Contact Us
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Slider from "../Slider";

	export default {
		name: 'Home',
		components: { Slider },
		data(){
			return {

			}
		}
	}
</script>

<style></style>

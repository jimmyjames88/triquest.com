<template>
	<div>
		<nav id="sidebar">
			<section class="section">
				<div class="container">
					<ul>
						<li>
							<router-link to="/" exact v-on:click.native="closeSidebar()">Home</router-link>
						</li>
						<li>
							<router-link to="/contacts-locations" v-on:click.native="closeSidebar()">Contacts &amp; Locations</router-link>
						</li>
						<li>
							<router-link to="/services" v-on:click.native="closeSidebar()">Services</router-link>
						</li>
						<li>
							<router-link to="/safety" v-on:click.native="closeSidebar()">Safety</router-link>
						</li>
						<li>
							<router-link to="/about" v-on:click.native="closeSidebar()">About</router-link>
						</li>
						<li>
							<router-link to="/careers" v-on:click.native="closeSidebar()">Careers</router-link>
						</li>
						<li>
							<router-link to="/mytriquest-software" v-on:click.native="closeSidebar()">MYTRIQUEST Software</router-link>
						</li>
						<li class="has-text-centered">
							<a href="http://my.triquestndt.com/" target="_blank" class="button is-primary is-small">Client Portal</a>
						</li>
					</ul>
				</div>
			</section>
			<section class="section is-hidden-desktop">
				<div class="container">
					<ul class="contact-info-block">
						<li>
							<a href="tel:+1-855-263-2216">
								<i class="fa fa-phone"></i> 1(855)263-2216
							</a>
						</li>
						<li>
							<a href="mailto:info@triquestndt.com">
								<i class="fa fa-envelope"></i> info@triquestndt.com
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/triquest-ndt/" target="_blank" class="linkedin">
								<i class="fa fa-linkedin"></i> LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</section>
			<div class="footer">

					<form ref="CWBForm" action="https://www.cwbgroup.org/certification-and-qualification/certified-directory-search/inspection-companies" target="_blank" method="post">
						<input name="inspection_company_name" type="hidden" value="triquest nondestructive testing" />
						<input type="hidden" name="form_id" value="cwb_certified_search_inspection_company_form">
						<img :src="this.$urlBase + 'assets/img/badges/cwb_large.png'" class="is-clickable" @click="submitCWBForm" />
					</form>

			</div>
		</nav>
		<div id="sidebar-background" v-on:click="closeSidebar()">
			<i class="fa fa-close" v-on:click="closeSidebar()"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sidebar',
		data(){
			return {

			}
		},
		methods: {
			closeSidebar(){
				this.$parent.sidebarOpen = false;
			},
			submitCWBForm(){
				this.$refs.CWBForm.submit();
			}
		}
	}
</script>

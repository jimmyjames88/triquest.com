<template>
	<section id="soft-header" class="section">
		<div class="container">
			<div class="columns is-mobile is-vcentered">
				<div class="column">
					<router-link to="/" class="is-inline-block" title="TriQuest NDT">
						<img :src="this.$urlBase + 'assets/img/triquest-ndt-logo.png'" alt="TriQuest NDT Nondestructive Testing" />
					</router-link>
				</div>
				<div class="column is-3-touch is-5-desktop is-clearfix">
					<div id="menu-button" class="is-hidden-desktop">
						<a href="#" class="button is-primary is-pulled-right" v-on:click="openSidebar()">Menu &nbsp;<i class="fa fa-bars"></i></a>
					</div>
					<ul class="is-pulled-right is-hidden-touch contact-info-block">
						<li>
							<a href="tel:+1-1855-263-2216">
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
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'softHeader',
		data(){
			return {

			}
		},
		methods: {
			openSidebar(){
				this.$parent.sidebarOpen = true;
			}
		}
	}
</script>

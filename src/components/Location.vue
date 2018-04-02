<template>
	<div class="column location" v-bind:class="this.location.is_big ? 'is-8-desktop is-8-widescreen is-12-fullhd big' : 'is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd'">
		<div class="columns is-multiline" v-bind:class="{ 'flex-row-reverse' : this.location.is_big }">
			<div class="column">
				<h2>{{ location.name }}</h2>
				<h3 class="subtitle">{{ location.subtitle }}</h3>
				<div class="address-phone">
					<div class="">
						<p class="is-marginless">
							{{ this.location.address.line1 }}<br />
							{{ this.location.address.line2 }}
						</p>
						<p class="is-marginless">
							<a :href="location.google_map" target="_blank" class="view-on-google"><i class="fa fa-map-marker"></i> View on Google Maps</a>
						</p>
					</div>
					<div class="">
						PH: <a :href="'tel:' + this.location.phone">{{ formatPhone(this.location.phone) }}</a><br />
						FX: {{ formatPhone(this.location.fax) }}
					</div>
				</div>
				<div class="people">
					<div v-for="(item, index) in this.location.contacts" class="person">

						<div class="info">
							<div class="name-title">
								<h4>{{ item.name }}</h4>
								<em v-if="item.title">{{ item.title }}</em>
							</div>
							<div class="contact-buttons">
								<a :href="'mailto:' + item.email" v-if="item.email">
									<i class="fa fa-envelope"></i>
								</a>
								<a href="#" v-if="item.linkedin">
									<i class="fa fa-linkedin"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	import GoogleMap from './GoogleMap'
	export default {
		name: 'Location',
		props: ['item'],
		components: { GoogleMap },
		created(){
			this.location = this.item;
		},
		computed: {
			mapName(){
				const n = this.location.name.toLowerCase().replace(' ','');
				const s = this.location.subtitle.toLowerCase().replace(' ','');
				return 'map-' + n + '-' + s;
			}
		},
		data(){
			return {
				location: {
					name: '',
					subtitle: '',
					address: {
						line1: '',
						line2: ''
					},
					phone: '',
					fax: '',
					contacts: [],
					is_big: false
				}
			}
		},
		methods: {
			formatPhone(phone){
				const regexObj = /^(?:\+?1[-. ]?)?(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;
				if (regexObj.test(phone)) {
					const parts = phone.match(regexObj);
					let formattedPhone = "";
					if (parts[1]) { formattedPhone += "(" + parts[1] + ") "; }
					formattedPhone += parts[2] + "-" + parts[3];
					return formattedPhone;
				} else {
					return phonenum;
				}
			}
		}
	}
</script>

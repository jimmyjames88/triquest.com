<template>
	<div class="column location" v-bind:class="this.location.is_big ? 'is-12 big' : 'is-6-tablet is-6-desktop is-6-widescreen is-4-fullhd'">
		<div class="columns is-multiline" v-bind:class="{ 'flex-row-reverse' : this.location.is_big }">
			<div class="column" v-bind:class="{ 'is-12': !this.location.is_big }">
				<google-map :name="mapName" :coords="this.location.map_coords"></google-map>
			</div>
			<div class="column">
				<h2>{{ this.location.name }}</h2>
				<h3 class="subtitle">{{ this.location.subtitle }}</h3>
				<div class="address-phone">
					<div>
						{{ this.location.address.line1 }}<br />
						{{ this.location.address.line2 }}
					</div>
					<div>
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

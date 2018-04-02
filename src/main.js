import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'

// Import pages
import PageHome from './components/pages/Home.vue'
import PageAbout from './components/pages/About.vue'
import PageServices from './components/pages/Services.vue'
import PageSafety from './components/pages/Safety.vue'
import PageContact from './components/pages/Contact.vue'
import PageServiceDetails from './components/pages/ServiceDetails.vue'
import PageMyTriQuestSoftware from './components/pages/MyTriQuestSoftware.vue'
import PageCareers from './components/pages/Careers.vue'

Vue.use(VueRouter, VueAxios, axios);

Vue.prototype.$titleBase = 'TriQuest NDT';
// Vue.prototype.$urlBase = '/projects/triquest-new/';
Vue.prototype.$urlBase = '/';

const router = new VueRouter({
	mode: 'history',
	base: Vue.prototype.$urlBase,
	routes: [
		{
			path: '/',
			component: PageHome,
			meta: {
				title: '24/7 Nondestructive Testing',
				metaTags: [
					{
						name: "description",
						content: "TriQuest NDT offers a variety of Nondestructive Testing (NDT) 24 hours a day 7 days a week.  We offer radiography, ultrasonic, hardness testing, corrosion mapping, tank inspection, and many other nondestructive inspection services."
					}
				]
			}
		},
		{
			path: '/about',
			component: PageAbout,
			meta: {
				title: 'About Us'
			}
		},
		{
			path: '/safety',
			component: PageSafety,
			title: 'Safety & NDT Certifications'
		},
		{
			path: '/services',
			component: PageServices,
			meta: {
				title: 'NDT Services'
			}
		},
		{
			name: 'service-details',
			path: '/services/:serviceName',
			component: PageServiceDetails,
			props: true
		},
		{
			path: '/contacts-locations',
			component: PageContact,
			meta: {
				title: 'Contacts & Locations'
			}
		},
		{
			path: '/careers',
			component: PageCareers,
			meta: {
				title: 'Careers'
			}
		},
		{
			path: '/mytriquest-software',
			component: PageMyTriQuestSoftware,
			meta: {
				title: 'MYTRIQUEST NDT Software'
			}
		}
	],
	linkActiveClass: "active", // active class for non-exact links.
	linkExactActiveClass: "active", // active class for *exact* links.
	scrollBehavior(){
		const target = document.getElementById('app');
		target.scrollTop = 0;
		return null;
	}
});


router.beforeEach((to, from, next) => {
	// wipe meta metaTags with "name" defined (so we don't wipe out charset)
	const existingTags = document.querySelectorAll('meta[name]');
	for (let i=0; i < existingTags.length; i++){
		// don't wipe out viewport
		if(existingTags[i].name != 'viewport'){
			existingTags[i].parentNode.removeChild(existingTags[i]);
		}
	}

	// append new <meta> to <head>
	if(to.meta.metaTags){
		for (let i=0; i < to.meta.metaTags.length; i++){
			const newMeta = document.createElement('meta');
			newMeta.name = to.meta.metaTags[i].name;
			newMeta.content = to.meta.metaTags[i].content;
			document.head.appendChild(newMeta);
		}
	}

	// set <title>
	if (to.meta.title){
		document.title = Vue.prototype.$titleBase + ' - ' + to.meta.title;
	}
	next();
});

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})

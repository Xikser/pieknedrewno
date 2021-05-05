import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Strona Główna',
		component: () => import('../components/Views/Home/Home.vue')
	},
	{
		path: '/oferta',
		name: 'Oferta',
		components: {
			default: () => import('../components/Views/Offer/OfferApp'),
		},
	},
	{
		path: '/galeria',
		name: 'Galeria',
		component: () => import('../components/Views/Gallery/Gallery')
	},
	{
		path: '/kontakt',
		name: 'Kontakt',
		component: () => import('../components/Views/Contact/Contact')
	},
]

const router = createRouter({
	history: createWebHistory(),
	mode: 'abstract',
	linkExactActiveClass: 'is-active',
	routes
})

export default router

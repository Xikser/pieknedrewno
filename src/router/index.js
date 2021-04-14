import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Strona Główna',
		component: () => import('../components/Views/Home/Home.vue')
	},
	{
		path: '/offer',
		name: 'Oferta',
		component: () => import('../components/Views/Offer/OfferApp')
	},
	{
		path: '/gallery',
		name: 'Galeria',
		component: () => import('../components/Views/Gallery/Gallery')
	},
	{
		path: '/about',
		name: 'O mnie',
		component: () => import('../components/Views/About/About.vue')
	},
	{
		path: '/about',
		name: 'Kontakt',
		component: () => import('../components/Views/Contact/Contact')
	},
]

const router = createRouter({
	history: createWebHistory(),
	mode: 'abstract',
	routes
})

export default router

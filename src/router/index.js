import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Strona Główna',
        component: () => import('../components/Views/Home/Home.vue')
	},
	{
		path: '/about',
		name: 'O mnie',
        component: () => import('../components/Views/About/About.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router

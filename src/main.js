import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Button from './components/UIComponents/Button'
import Navbar from './components/UIComponents/Navbar/Navbar'
import Home from './components/Views/Home/Home'
import About from './components/Views/About/About'
import Offer from './components/Views/Offer/OfferApp'
import Contact from './components/Views/Contact/Contact'
import Footer from './components/UIComponents/Footer'

createApp(App)
	.component('Navbar', Navbar)
	.component('Home', Home)
	.component('About', About)
	.component('Offer', Offer)
	.component('Contact', Contact)
	.component('Button', Button)
	.component('Footer', Footer)
	.use(router)
	.mount('body')

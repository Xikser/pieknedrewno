<template>
	<nav class="navbar">

<!--		<div class="mobile__nav-icons">-->
<!--			<i-->
<!--					class="fas fa-bars fw"-->
<!--					:class="{hiddenIcon: isVisible}"-->
<!--					@click="showNavbar"-->
<!--			>-->
<!--			</i>-->
<!--			<i-->
<!--					class="fas fa-times fw"-->
<!--					:class="{visibleIcon: isVisible}"-->
<!--					@click="showNavbar"-->
<!--			>-->
<!--			</i>-->
<!--		</div>-->

		<ul class="navbar__list">
			<li
					class="navbar__item"
					v-for="link in navItems"
					:key="link.id"
					@click.capture="handleLink"
			>
				<router-link
						class="navbar__link"
						:text="link.name"
						:after-text="link.name"
						:to="link.path"
						@click.capture="hideNavbar"
				>
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>

import {prepareRouterLinks} from '@/mixins/globalMixins'

export default {
	name: 'Navbar',
	mixins: [prepareRouterLinks],
	data() {
		return {
			isVisible: false
		}
	},
	computed: {
		navItems() {
			return this.globalRouterLinks.slice(0, 5)
		},
	},
	methods: {
		hideNavbar() {
			const navbar = document.querySelector('.navbar')
			if(navbar.classList.contains('visible')) {
				navbar.classList.remove('visible')
				this.isVisible = !this.isVisible
			}
		},
		showNavbar() {
			const navbar = document.querySelector('.navbar')
			this.isVisible = !this.isVisible

			if (this.isVisible === true)
				navbar.classList.add('visible')
			else
				navbar.classList.remove('visible')
		},

		emitEvent() {
			this.$emit('clicked')
		},

	}
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'


</style>
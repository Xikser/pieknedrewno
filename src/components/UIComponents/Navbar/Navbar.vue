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
					@click.capture=""
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
			if (navbar.classList.contains('visible')) {
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

.is-active
	&::before
		transform: rotate(-45deg) !important
		z-index: -1 !important

	&::after
		transform: rotate(45deg) !important
		z-index: -1 !important

.navbar
	position: fixed
	width: 100%
	height: 7em
	z-index: 1000
	display: flex
	background: $color--accent
	justify-content: center
	transition: all .3s ease

	&__list
		display: flex
		width: 60%
		justify-content: space-evenly
		align-items: center

	&__item
		position: relative
		font-size: 1.5rem
		text-transform: uppercase
		color: $color--light
		letter-spacing: 2px
		overflow: hidden

		a
			position: relative
			display: block
			padding: 15px 25px
			width: 100%
			height: 100%

			&::before
				position: absolute
				content: ''
				top: 50%
				left: 0
				width: 100%
				height: 1px
				transform: translateY(-20px)
				transition: all .4s ease
				opacity: .7
				background: $color--light-accent

			&::after
				position: absolute
				content: ''
				top: 50%
				left: 0
				width: 100%
				height: 1px
				transform: translateY(20px)
				transition: all .4s ease
				opacity: .7
				background: $color--light-accent

			&:hover::before
				transform: rotate(-45deg)
				z-index: -1

			&:hover::after
				transform: rotate(45deg)
				z-index: -1

</style>
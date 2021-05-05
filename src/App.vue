<template>
	<router-view v-slot="{ Component }">
		<main>

			<div class="top" @click="sc">
				<i class="fas fa-chevron-up"></i>
			</div>

			<Navbar></Navbar>
			<transition
					name="view"
					mode="out-in"
					@before-leave=""
			>
				<component :is="Component" />
			</transition>
			<Footer></Footer>
		</main>
	</router-view>
</template>

<script>
import {footerVisibility} from '@/mixins/globalMixins'

export default {
	name: 'App',
	mixins: [footerVisibility],
	data() {
		return{}
	},
	methods: {
		sc() {
			window.scrollTo(0, 0)
		}
	}
}
</script>

<style lang="sass" scoped>
.view-enter-active
	animation: opacity-in .3s
	transition-delay: .4s
	position: absolute

@keyframes opacity-in
	0%
		opacity: 0

	100%
		opacity: 1

.view-leave-active
	animation: opacity-out .3s
	position: absolute

@keyframes opacity-out
	0%
		opacity: 1
	100%
		opacity: 0

</style>

<style lang="sass">
@import './assets/sass/variables'

.top
	position: fixed
	width: 40px
	height: 40px
	bottom: 25px
	right: 25px
	border-radius: 50%
	cursor: pointer
	background: $color--accent
	border: 2px solid $color--light-accent
	z-index: 1000
	display: flex
	align-items: center
	justify-content: center

	i
		font-size: 1.8rem
		color: $color--light-accent

.cubic-bezier
	transition: all 1s cubic-bezier(0.6, 1.3, 0.6, 1.3)

html
	font-size: 10px
	scroll-behavior: smooth

*, *::before, *::after
	margin: 0
	padding: 0
	box-sizing: border-box

body
	overflow-x: hidden
	background: $color--light-bg
	width: 100%
	color: $color--light
	font-family: $font--default

main
	position: relative
	width: 100%
	margin: auto

i
	color: $color--light
@media screen and (min-width: 360px) and (max-width: 980px)
	main
		width: 100vw

	.top
		display: none

a
	text-decoration: none
	color: $color--light

ol, ul, li
	list-style: none

</style>

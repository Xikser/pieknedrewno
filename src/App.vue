<template>


</template>

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
	width: 100%
	color: $color--dark
	font-family: $font--default

main
	position: relative
	width: 144em
	margin: auto

@media screen and (min-width: 360px) and (max-width: 980px)
	main
		width: 100vw

h1
	font-size: 5rem

h2
	font-size: 3rem

h3
	font-size: 2rem

h4
	font-size: 1.75rem

@media screen and (max-width: 736px)

	h1
		font-size: 3rem
	h2
		font-size: 2rem
	h3
		font-size: 1.5rem
	h4
		font-size: 1.25rem

a
	text-decoration: none
	color: $color--dark

ol, ul, li
	list-style: none

a, p, span
	font-size: 1.4rem
</style>

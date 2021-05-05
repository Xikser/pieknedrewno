<template>
	<header class="header">
		<div class="header__content">
			<div class="header__logo">
				<img src="../../../../assets/images/logo.png" alt="logo">
			</div>

			<div class="header__motto">
				<h1 class="motto">
					Inicjatywa <span style="color:#c6a47e">PiękneDrewno</span> powstała dla ludzi lubiących otaczać się
					drewnem, podziwiających jego walor
					estetyczny i organiczną fakturę.
				</h1>
			</div>
			<div class="scroll">
				<a href="#services">Scroll</a>
			</div>
		</div>
		<div class="header__bg"></div>

	</header>
</template>

<script>
export default {
	name: 'Header',
	functional: true,
}
</script>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'

.header
	position: relative
	width: 100vw
	min-height: 100vh
	display: flex
	flex-direction: row

	&__content
		position: relative
		width: 60%
		min-height: 100vh
		padding: 15em 0 0 10em
		display: flex
		flex-direction: column
		align-items: flex-start
		background: linear-gradient(90deg, rgba(28, 28, 28, 1) 80%, rgba(255, 255, 255, 0) 0%)

	&__bg
		position: absolute
		width: 60%
		height: 100vh
		top: 0
		right: 0
		background-image: url("../../../../assets/images/header1.jpg")
		background-size: 60% 100vh
		background-position: center right
		background-attachment: fixed
		background-repeat: no-repeat

	&__logo
		position: relative
		left: 20%

	&__motto
		position: relative
		margin: 14em 0 12em 0
		width: 60%
		text-align: center

		&::before, &::after
			position: absolute
			content: ''
			width: 50%
			left: 50%
			height: 2px
			background: $color--light-accent

		&::before
			transform: translateY(-25px) translateX(-50%)

		&::after
			transform: translateY(25px) translateX(-50%)

		h1
			cursor: default
			font-family: 'Dancing Script', cursive
			text-transform: uppercase
			font-size: 2rem
			line-height: 36px
			letter-spacing: 2px

	.scroll
		position: absolute
		bottom: 20%
		left: 29%
		transition: all .3s ease
		text-align: center

		a
			position: relative
			padding: 15px 35px
			width: 100%
			text-transform: uppercase
			letter-spacing: 1.25px
			font-size: 1.4rem
			font-weight: 700
			transition: all .4s ease
			z-index: 1
</style>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.header
		flex-direction: column

		&__bg
			display: none

		&__content
			width: 100%
			padding: 20px
			align-items: center
			justify-content: space-evenly
			background: $color--accent

		&__logo
			left: 0
			text-align: center

			img
				width: 70%

		&__motto
			width: 100%
			margin: 0

		.scroll
			position: relative
			left: 0
			bottom: 0

</style>
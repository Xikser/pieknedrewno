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
		width: 80%
		min-height: 100vh
		padding: 15em 0 0 15em
		display: flex
		flex-direction: column
		align-items: flex-start
		background: linear-gradient(90deg, rgba(28, 28, 28, 1) 80%, rgba(255, 255, 255, 0) 0%)

	&__bg
		position: absolute
		width: 40%
		height: 100vh
		top: 0
		right: 0
		background-image: url("../../../../assets/images/header.jpg")
		background-size: 40% 100vh
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

		h1
			cursor: default
			text-align: left
			text-transform: uppercase
			font-family: $font--primary
			font-size: 2.7rem
			line-height: 36px
			letter-spacing: 1.75px

	.scroll
		position: absolute
		bottom: 20%
		left: 29.5%
		transition: all .3s ease

		a
			position: relative
			padding: 10px 35px
			text-transform: uppercase
			letter-spacing: 1.25px
			font-size: 1.4rem
			font-weight: 700
			background: $color--light-accent
			transition: all .3s ease
			z-index: 1

			&::before
				transition: all .3s ease
				position: absolute
				content: ''
				top: 0
				left: 0
				width: 100%
				height: 0
				background: $color--accent
				z-index: -1

			&:hover
				color: $color--light-accent

			&:hover::before
				height: 85%

</style>
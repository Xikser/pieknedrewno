<template>
	<section class="services" id="services">
		<div class="services__bg"></div>
		<div class="services__content">
			<h2>Oferta</h2>

			<div class="services__offer">
				<div class="services__box">
					<router-link to="/oferta" class="services__box-elements">
						<h3>Wystrój wnętrz</h3>
						<span>01</span>
						<p>Sprawdź ofertę</p>
					</router-link>
				</div>

				<div class="services__box">
					<router-link to="/oferta" class="services__box-elements">
						<h3>Do ogrodu</h3>
						<span>02</span>
						<p>Sprawdź ofertę</p>
					</router-link>
				</div>

				<div class="services__box">
					<router-link to="/oferta" href="" class="services__box-elements">
						<h3>Do domu</h3>
						<span>03</span>
						<p>Sprawdź ofertę</p>
					</router-link>
				</div>

				<div class="services__box">
					<router-link to="/oferta" class="services__box-elements">
						<h3>Gadżety</h3>
						<span>04</span>
						<p>Sprawdź ofertę</p>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	name: 'services',
	functional: true,
	data() {
		return {}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'

.services
	min-height: 100vh

	&__bg
		position: absolute
		width: 100%
		height: 40em
		background: $color--accent
		z-index: -1

	&__content
		height: 100%
		display: flex
		flex-direction: column

		h2
			position: relative
			font-size: 5rem
			width: 4.25em
			top: 190px
			left: 20.75%
			text-transform: uppercase
			letter-spacing: 2px
			cursor: default

			&::after
				position: absolute
				content: ''
				right: -100%
				top: 50%
				width: 100%
				height: 2px
				background: $color--light-accent

	&__offer
		padding-top: 200px
		width: 100%
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center

	&__box
		position: relative
		width: 28em
		height: 44.5em
		margin: 0
		box-shadow: 0 0 20px 2px rgba(0,0,0,1)

		&:nth-child(1)
			background-image: url("../../../../assets/images/services/inside.jpg")

			.services__box-elements
				top: 0

				&::after
					top: 0

		&:nth-child(2)
			background-image: url("../../../../assets/images/services/garden.jpg")

			.services__box-elements
				bottom: 0

				&::after
					bottom: 0
		&:nth-child(3)
			background-image: url("../../../../assets/images/services/home.jpg")

			.services__box-elements
				top: 0

				&::after
					top: 0

		&:nth-child(4)
			background-image: url("../../../../assets/images/services/gadget.jpg")

			.services__box-elements
				bottom: 0

				&::after
					bottom: 0


		&-elements
			position: absolute
			display: flex
			width: 100%
			height: 14em
			flex-direction: column
			align-items: center
			justify-content: space-between
			left: 0
			background: white
			color: $color--accent
			text-align: center
			z-index: 4

			&::after
				position: absolute
				content: ''
				left: 0
				width: 100%
				height: 0
				z-index: -1
				background: $color--accent
				transition: all .3s ease

			&:hover::after
				height: 100%

			&:hover h3
				color: $color--light-accent

			&:hover span
				color: white

			h3
				position: relative
				font-size: 2.2rem
				margin-top: 55px
				text-transform: uppercase
				font-family: $font--primary
				transition: all .3s ease

			span
				font-family: $font--primary
				position: absolute
				font-size: 4rem
				top: 0
				right: 10px
				opacity: .4
				z-index: 2
				transition: all .3s ease

			p
				font-size: 1.2rem
				padding-top: 30px
				padding-bottom: 30px
				text-transform: uppercase
				font-family: $font--default
</style>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.services

		&__content
			padding: 100px 0

			h2
				font-size: 3rem
				top: 0

		&__offer
			padding-top: 70px
			flex-direction: column

		&__box
			margin: 20px 0
			width: 80%
			background-size: 100% 100%
			background-repeat: no-repeat

			.services__box-elements

				h3
					margin-top: 15px

				p
					padding: 0 0 15px 0

			&:nth-child(1)
				.services__box-elements
					height: 10em
					bottom: 0
					top: unset

			&:nth-child(2)
				.services__box-elements
					height: 10em
					bottom: 0

			&:nth-child(3)
				.services__box-elements
					height: 10em
					bottom: 0
					top: unset

			&:nth-child(4)
				.services__box-elements
					height: 10em
					bottom: 0
</style>
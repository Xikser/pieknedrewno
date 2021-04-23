<template>
	<div class="details">
		<div class="details__header">
			<h2>{{ item.name }}</h2>
			<Button
					buttonStyle="custom"
					buttonSize="normal"
					buttonText="Powrót"
					@click="changeView"
					style="width: 200px;"
			>
			</Button>
		</div>

		<div class="details__content">
			<div class="details__image">
				<img :src="item.src" :alt="item.alt">
			</div>

			<div class="details__desc">
				<h3>{{ item.price }}</h3>

				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
					laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ed ut
					perspiciatis, unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit, sed do eiusmod.
				</p>

				<div class="details__buy">
					<a href="#">Kup na Allegro</a>
					<span>lub</span>
					<router-link to="/contact">Skontaktuj się ze mną</router-link>
				</div>

				<div class="details__info">
					<div>
						<span>+</span>
						<p>Kategoria: {{ item.category }}</p>
					</div>
					<div>
						<span>+</span>
						<p>Podkategoria: {{ item.subcategory }}</p>
					</div>
					<div>
						<span>+</span>
						<p>Materiały: drewno 50%, metal 50%</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import Viewer from './Viewer/Viewer'

export default {
	components: {Viewer},
	props: {
		item: {
			type: Object,
		}
	},
	methods: {
		changeView() {
			this.$emit('changeView')
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../../../assets/sass/variables'

.details
	min-height: 100vh
	background: $color--accent

	&__header
		position: relative
		height: 40vh
		background-image: url("../../../../../../assets/images/banners/item.jpg")
		background-position: top center
		background-size: 100vw 40vh
		background-repeat: no-repeat
		background-attachment: fixed

		display: flex
		flex-direction: column
		justify-content: center
		align-items: flex-start

		button
			position: absolute
			bottom: 0
			font-size: 1.7rem
			text-transform: uppercase
			font-weight: 400
			letter-spacing: 1.6px
			background: $color--accent
			transition: all .4s ease

			&::before
				position: absolute
				content: ''
				width: 0
				height: 100%
				top: 0
				right: 0
				transition: all .4s ease
				background: $color--light-accent
				z-index: -1

			&:hover
				color: $color--accent

			&:hover::before
				width: 90%

		h2
			cursor: default
			font-family: $font--primary
			font-weight: 300
			font-size: 5rem
			text-transform: uppercase
			letter-spacing: 2px
			color: $color--light-accent
			padding-left: 250px

	&__content
		display: flex
		min-height: 100vh
		padding-top: 150px
		flex-direction: row
		justify-content: center
		align-items: flex-start

	&__image
		position: relative
		width: 50em
		height: 50em
		cursor: pointer

		&::after
			position: absolute
			content: '+'
			width: 100px
			height: 100px
			top: 50%
			left: 50%
			transform: translate(-50%, -50%) scale(0)
			display: flex
			justify-content: center
			align-items: center
			background: rgba(0, 0, 0, .8)
			color: $color--light-accent
			font-size: 4rem
			transition: all .3s ease

		&:hover::after
			transform: translate(-50%, -50%) scale(1)

		img
			width: 100%
			height: 100%

	&__desc
		width: 45%
		height: 50em
		padding: 0 70px
		display: flex
		flex-direction: column
		justify-content: space-between

		h3
			position: relative
			font-size: 2.5rem
			font-weight: 300
			color: $color--light-accent
			cursor: default

		p
			font-size: 1.6rem
			line-height: 27px

	&__buy
		width: 50em
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center

		a, span
			font-size: 1.5rem
			color: $color--light-accent
			transition: all .4s ease

		span
			cursor: default

		a
			text-transform: uppercase
			padding: 10px 25px
			border: 2px solid $color--light-accent-gray

			&:hover
				border: 2px solid $color--light-accent

	&__info
		display: flex
		flex-direction: column

		div
			display: flex
			flex-direction: row
			align-items: center

			span
				font-size: 1.3rem
				margin-right: 10px

			p
				font-weight: 300
</style>
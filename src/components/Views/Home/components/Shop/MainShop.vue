<template>
	<section class="main-shop">
		<div class="main-shop__content">
			<div class="main-shop__container">
				<div
						class="main-shop__item"
						v-for="(item, index) in filteredItems"
						:key="index"
				>

					<img :src="item.src" :alt="item.alt">

					<div class="main-shop__item-content">
						<h3> {{ item.name }}</h3>
						<p> {{ item.price }} </p>
					</div>

					<a :href="item.link">Zamów</a>

				</div>
				<router-link class="main-shop__more-button" to="/oferta">Więcej</router-link>

			</div>
		</div>
	</section>
</template>

<script>
import shopitems from './ShopItems'

export default {
	name: 'Shop',
	computed: {
		filteredItems() {
			return this.shopitems.slice(0, 6)
		}
	},
	data() {
		return {
			shopitems: shopitems,
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.main-shop
	min-height: 100vh

	&__content
		display: flex
		width: 144em
		flex-direction: column
		align-items: center
		justify-content: center
		margin: 0 auto
		padding-bottom: 100px

	&__more-button
		position: absolute
		bottom: 4%
		padding: 10px 40px
		font-weight: 700
		font-size: 1.7rem
		text-transform: uppercase
		background: $color--light-accent
		color: $color--accent
		transition: all .3s ease
		z-index: 1

		&::before
			transition: all .3s ease
			position: absolute
			content: ''
			top: 0
			left: 0
			width: 0
			height: 100%
			background: $color--accent
			z-index: -1

		&:hover
			color: $color--light-accent

		&:hover::before
			width: 85%

	&__container
		position: relative
		background: $color--accent
		width: 100%
		display: flex
		flex-direction: row
		flex-wrap: wrap
		align-items: center
		justify-content: center
		padding: 50px 0 100px 0

	&__item
		position: relative
		width: 30em
		min-height: 39em
		display: flex
		flex-direction: column
		align-items: flex-end
		margin: 30px 50px
		overflow: hidden

		img
			padding-bottom: 10px

		&-content
			width: 100%
			padding: 0
			display: flex
			flex-direction: row
			justify-content: space-between

			h3
				font-size: 1.7rem
				font-weight: 600
				max-width: 12em

			p
				font-weight: 400
				font-size: 1.7rem
				font-family: $font--primary

		a
			position: absolute
			bottom: 10px
			right: 0
			font-size: 1.5rem
			text-transform: uppercase
			transition: all .3s ease

			&:hover
				font-weight: 700
				color: $color--light-accent

	&__item :is(h3, span, p)
		cursor: default

</style>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.main-shop

		&__content
			width: 100vw
			padding-bottom: 0

		&__more-button
			bottom: 30px
</style>
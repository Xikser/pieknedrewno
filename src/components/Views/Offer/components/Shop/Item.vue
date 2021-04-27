<template>
	<a
			@click.capture="triggerClick"
			class="item"
	>
		<div class="item__image">
			<img :src="item.src" :alt="item.alt">
		</div>

		<div class="item__content">
			<h3>{{ item.name }}</h3>
			<h4>{{item.price}}</h4>
			<h4>{{ item.subcategory }}</h4>
		</div>
	</a>
</template>

<script>
export default {
	name: 'Item',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		triggerClick() {
			this.$emit('clicked', this.item)
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.item
	position: relative
	display: flex
	flex-direction: column
	justify-content: flex-start
	align-items: flex-start
	margin: 20px
	width: 30em
	min-height: 40em
	cursor: pointer
	overflow: hidden

	&__image
		position: relative
		width: 100%
		height: 30em
		overflow: hidden
		margin-bottom: 25px

		img
			width: 100%
			height: 100%
			z-index: 1
			transition: all .4s ease

		&::before
			position: absolute
			content: 'Sprawdź szczegóły'
			width: 100%
			height: 5em
			bottom: -100%
			left: 0
			background: $color--accent
			transition: all .4s ease
			z-index: 5
			display: flex
			justify-content: center
			align-items: center
			font-size: 1.5rem

		&:hover::before
			bottom: 0

	&__content
		min-height: 10em
		z-index: 5
		padding: 0 0 25px 0
		transition: all .4s ease

		h3
			font-weight: 400
			font-size: 1.8rem
			font-family: $font--primary

		h4
			padding-top: 10px
			font-size: 1.3rem
			font-weight: 300
			text-transform: uppercase
			letter-spacing: 1.25px
			font-family: $font--primary

</style>
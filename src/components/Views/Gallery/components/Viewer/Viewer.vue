<template>
	<section class="viewer">
		<i class="fas fa-times fw" @click="closeViewer"></i>
		<div class="viewer__content">
			<div class="viewer__image">
				<img :src="item.src" alt="">
			</div>

			<div class="viewer__slider">
				<img :src="item.src" alt="">
				<img :src="item.src" alt="">
				<img :src="item.src" alt="">
			</div>

			<div class="viewer__navigation">
				<i class="fas fa-chevron-left fw"></i>
				<i class="fas fa-chevron-right fw"></i>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		}
	},
	methods: {
		closeViewer() {
			this.$emit('closed')
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../../../../../assets/sass/variables'

.viewer
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100vh
	background: rgba(0, 0, 0, .8)
	z-index: 10000

	.fa-times
		position: absolute
		top: 25px
		right: 25px
		font-size: 3em
		cursor: pointer

	&__content
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		justify-content: space-evenly
		align-items: center

	&__image
		width: 60em
		height: 60em

		img
			width: 100%
			height: 100%

	&__slider
		width: 100%
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center

		img
			margin: 0 15px
			width: 12em

	&__navigation
		width: 7em
		display: flex
		flex-direction: row
		justify-content: space-between
		i
			font-size: 2rem
</style>
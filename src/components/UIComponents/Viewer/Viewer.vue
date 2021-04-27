<template>
	<section class="viewer">
		<i class="fas fa-times fw" @click="closeViewer"></i>
		<div class="viewer__content">
			<div
					class="viewer__image"
					:class="{
						'viewer__image--vertical': vertical,
						'viewer__image--horizontal': horizontal,
						'viewer__image--square': square,
					}"
			>
				<img :src="src" alt="">
			</div>

			<div class="viewer__slider">

				<img
						v-for="image in item.images"
						:src="image.img"
						@click="changeImage"
						alt=""
				>
			</div>
		</div>

	</section>
</template>

<script>
export default {
	name: 'Viewer',
	props: {
		item: {
			type: Object,
			required: true,
		},
		height: {
			type: Number,
		},
	},
	data() {
		return {
			vertical: false,
			horizontal: false,
			square: false,
			src: '',
		}
	},
	mounted() {
		this.src = this.item.src
		this.setHeight(this.height)
	},
	methods: {
		setHeight(height) {
			if (height > 1080) {
				//vertical height
				this.vertical = true
				this.horizontal = false
			} else {
				//horizontal height
				this.horizontal = true
				this.vertical = false
			}
		},

		changeImage(e) {
			this.src = e.target.src
			this.setHeight(e.target.naturalHeight)
		},

		closeViewer() {
			this.$emit('closed')
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'

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
		right: 30px
		font-size: 3em
		cursor: pointer
		z-index: 12000

	&__content
		position: relative
		width: 100%
		height: 100%
		display: flex
		padding-top: 50px
		flex-direction: column
		justify-content: center
		padding-bottom: 200px
		align-items: center

	&__image
		width: auto

		&--horizontal
			max-width: 100em

		&--vertical
			max-width: 40em

		&--square
			max-width: 100em

		img
			width: 100%
			height: auto

	&__slider
		position: absolute
		bottom: 2.5%
		left: 50%
		transform: translateX(-50%)
		width: 80%
		overflow: hidden
		height: 12em
		display: flex
		flex-direction: row
		justify-content: center

		&--horizontal
			width: 100%

			img
				width: 100%

		&--vertical
			img
				width: 50%

		img
			margin: 0 15px
			cursor: pointer
</style>
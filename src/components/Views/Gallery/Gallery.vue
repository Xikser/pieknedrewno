<template>
	<section class="gallery">
		<div class="gallery__header"></div>
		<div class="gallery__content">
			<div
					class="photo"
					v-for="(photo, index) in photos"
					:key="index"
					@click="handleViewer(photo)"
			>
				<img @click="getImageHeight" :src="photo.src" alt="">
			</div>

			<Viewer @closed="viewer = false" :item="item" v-if="viewer" :height="height"></Viewer>
		</div>
	</section>
</template>

<script>
import photos from './libs/Photos'
import Viewer from "@/components/UIComponents/Viewer/Viewer";

export default {
	name: 'Gallery',
	components: {Viewer},
	data() {
		return {
			photos: photos,
			item: Object,
			viewer: false,
			height: '',
		}
	},
	methods: {
		getImageHeight(e) {
			this.height = e.target.naturalHeight
		},
		handleViewer(photo) {
			this.item = photo
			this.viewer = !this.viewer
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'

.gallery
	position: relative
	width: 100%
	min-height: 100vh
	background: $color--accent

	&__header
		width: 100%
		height: 40vh
		background-image: url("../../../assets/images/banners/gallery.jpg")
		background-attachment: fixed
		background-repeat: no-repeat
		background-size: 100vw 40vh
		background-position: top center

	&__content
		width: 100vw
		padding: 150px 0
		min-height: 170em
		max-height: 250em
		display: flex
		flex-flow: column wrap
		align-content: center
		counter-reset: items

		&::before, &::after
			content: ''
			flex-basis: 100%
			width: 0
			order: 2

.photo
	position: relative
	width: 40em
	cursor: pointer
	overflow: hidden
	transition: all .4s ease
	z-index: 4
	margin: 5px

	img
		width: 100%
		height: 100%
		transition: all .4s ease

		&:hover
			transform: scale(.98)

	&:nth-child(3n+1)
		order: 1

	&:nth-child(3n+2)
		order: 2

	&:nth-child(3n)
		order: 3

	img
		width: 100%
</style>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.gallery

		&__header
			height: 30vh
			background-size: cover

		&__content
			padding: 30px
			flex-flow: column
			min-height: 200em
			max-height: unset

	.photo
		width: 80%
		margin: 10px auto

		img
			height: 100%
</style>
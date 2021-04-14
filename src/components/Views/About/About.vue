<template>
	<section class="about">
	
	</section>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {}
	},
}
</script>

<style lang="sass" scoped>
@import 'src/assets/sass/variables'

.about
	position: relative
	display: flex
	align-items: center
	justify-content: center

	&__content
		width: 122.6em
		margin: auto
		padding-top: 100px

		h2
			text-align: center
			font:
				size: 1.9rem
				weight: 700
</style>

<style lang="sass" scoped>
@media screen and (min-width: 360px) and (max-width: 980px)

	.about
		width: 100vw

		&__content
			width: 100%

			h2
				padding: 0 75px
				font-size: 1.4rem
				font-weight: 400

</style>
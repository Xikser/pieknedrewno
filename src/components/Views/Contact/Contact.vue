<template>
	<section class="contact">
		<div class="contact__content">
			<Form></Form>
		</div>
	</section>
</template>

<script>
import Form from './components/Form'

export default {
	name: 'Contact',
	components: {
		Form
	},
}
</script>

<style lang="sass" scoped>
@import 'src/assets/sass/variables'

.contact
	width: 100%
	background-image: url("../../../assets/images/banners/contact1.jpg")
	min-height: 100vh
	background-repeat: no-repeat
	background-size: 100% 100%
	background-attachment: fixed

	&__header
		height: 40vh
		background-image: url("../../../assets/images/banners/contact.jpg")
		background-size: 100vw 40vh
		background-repeat: no-repeat
		background-position: top center
		background-attachment: fixed

	&__content
		padding-top: 200px
		padding-bottom: 150px
		display: flex
		min-height: 100vh
		flex-direction: column
		justify-content: space-evenly
		align-items: center

	&__info
		width: 100%
		margin-top: 50px
		height: 7em
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center

	&__box

		span
			cursor: default
			letter-spacing: 2px
			font:
				size: 2.8rem
				weight: 400
				family: $font--default
</style>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)

	.contact
		background-size: cover
</style>
<template functional>
	<section class="wrapper">
		<div class="wrapper__content">
			<h2>Jestem stolarzem z 30-to letnim stażem. Swój zakład prowadzę od 2011 roku.</h2>

			<router-link to="/gallery">Sprawdź moje prace</router-link>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Wrapper',
}
</script>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'

.wrapper
	height: 50vh
	background-image: url("../../../../assets/images/wrapperbg.jpg")
	background-attachment: fixed
	background-repeat: no-repeat
	background-position: center
	background-size: cover

	&__content
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		justify-content: center
		align-items: flex-start
		padding: 0 0 0 100px

		h2
			font-size: 2.6rem

		a
			margin-top: 40px
			font-size: 1.9rem
			padding: 10px 25px
			font-family: $font--primary
			border: 2px solid $color--light-accent-gray
			background: $color--accent
			color: $color--light-accent
			transition: all .4s ease

			&:hover
				border: 2px solid $color--light-accent

</style>
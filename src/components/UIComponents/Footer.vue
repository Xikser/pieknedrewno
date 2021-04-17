<template>
	<footer class="footer">
		<div class="footer__content">
			<div class="footer__socialmedia">
				<p>Zapraszam również na moje socialmedia!</p>

				<a href="#" target="_blank">
					<i class="fab fa-facebook fw"></i>
				</a>

				<a href="#" target="_blank">
					<i class="fab fa-instagram fw"></i>
				</a>
			</div>

			<div class="footer__logo">
				<img src="../../assets/images/logo.png" alt="footer logo">
			</div>

			<div class="footer__contact">
				<h2>Skontakuj się ze mną</h2>
				<div class="contact__cell">
					<p>Telefon:</p>
					<span class="footer__phone">(+48) 123 123 321</span>
				</div>
				<div class="contact__cell">
					<p>Email:</p>
					<span>example@domain.com</span>
				</div>
			</div>
		</div>

		<span class="copy">Wszelkie prawa zastrzeżone &copy | pieknedrewno.pl 2021</span>
	</footer>
</template>

<script>
import {handleWith} from "@/mixins/globalMixins";

export default {
	name: 'Footer',
	functional: true,
	mixins: [handleWith],
	data() {
		return {}
	},
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/variables'

.footer
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	padding: 50px 0 20px 0
	background-image: url("../../assets/images/footer.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center center

	.copy
		font-size: 1.2rem
		text-transform: uppercase
		color: $color--light-accent
		letter-spacing: 1.15px

	&__content
		width: 60%
		height: 100%
		background: $color--accent
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center
		padding: 50px 100px
		margin-bottom: 10px

	&__socialmedia
		width: 25em
		text-align: center

		p
			font-size: 1.8rem
			word-wrap: anywhere
			margin-bottom: 15px
			font-weight: 400
			font-family: $font--default

		a
			width: 2em
			padding-top: 20px
			margin: 0 10px

			i
				font-size: 2.2rem

	&__logo
		width: 20em

		img
			padding-bottom: 30px
			width: 70%


	&__contact
		display: flex
		flex-direction: column
		justify-content: space-evenly

		h2
			font-size: 2rem
			text-transform: uppercase
			font-weight: 500
			padding-bottom: 20px
			border-bottom: 2px solid $color--light-accent

		.contact__cell
			margin: 20px 0 0 0
			padding-bottom: 20px
			border-bottom: 2px solid $color--light-accent

			p
				font-size: 1.7rem
				text-transform: uppercase
				font-family: $font--primary
				margin-bottom: 10px
				font-weight: 400

			span
				font-weight: 300
				font-size: 1.5rem
</style>
<template>
	<main>
		<Header></Header>
		<Services></Services>
		<Shop></Shop>
		<Wrapper></Wrapper>
		<div class="belt-2">
			<div class="placeholder"></div>
			<div class="belt-2__box">
				<h2>Jesteś gotów spełnić swoje marzenie?</h2>
				<router-link to="/contact">Skontakuj się ze mną</router-link>
			</div>
		</div>
		<FAQ></FAQ>
	</main>
</template>

<script>
import Header from './components/Header'
import Services from "@/components/Views/Home/components/Services";
import Shop from "@/components/Views/Home/components/Shop/MainShop";
import Wrapper from "@/components/Views/Home/components/Wrapper";
import FAQ from "@/components/Views/Home/components/FAQ/FAQ";

export default {
	name: 'Home',
	components: {
		FAQ,
		Wrapper,
		Shop,
		Services,
		Header,
	},
	data() {
		return {}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'

.belt-2
	width: 100vw
	height: 25vh
	background: transparent
	display: flex
	flex-direction: row
	justify-content: space-between
	align-items: center
	padding-right: 100px

	.placeholder
		width: 40%
		height: 100%
		background: $color--accent

	&__box
		background: $color--accent
		padding: 50px 100px
		display: flex
		flex-direction: column
		justify-content: center
		align-items: flex-end

		h2
			font-size: 2.6rem
			margin-bottom: 25px

		a
			position: relative
			padding: 10px 40px
			font-size: 1.7rem
			color: $color--accent
			background: $color--light-accent
			transition: all .3s ease
			z-index: 1

			&::before
				transition: all .4s ease
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
				width: 90%

</style>
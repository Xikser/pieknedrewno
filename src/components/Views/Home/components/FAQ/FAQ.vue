<template>
	<section class="faq">
		<div class="faq__content">
			<h2>FAQ</h2>
			<Question
					v-for="question in questions"
					:key="question.id"
					:question="question"
			>
			</Question>
		</div>

		<div class="faq__belt"></div>
	</section>
</template>

<script>
import Question from "@/components/Views/Home/components/FAQ/Question";
import questions from './QuestionList'

export default {
	name: 'FAQ',
	components: {Question},
	data() {
		return {
			questions: questions
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'
.faq
	position: relative
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	min-height: 50vh
	padding-top: 50px
	background-image: url("../../../../../assets/images/faqbg.jpg")
	background-repeat: no-repeat
	background-attachment: fixed
	background-position: top center
	background-size: cover

	h2
		position: relative
		font-size: 5rem
		text-align: center
		font-family: $font--primary
		letter-spacing: 3px

		&::after
			position: absolute
			content: ''
			right: -220%
			top: 50%
			width: 200%
			height: 2px
			background: $color--light-accent

	&__content
		padding: 50px 0
		width: 50%
		height: auto
		display: flex
		flex-direction: column
		justify-content: center
		align-items: flex-start

	&__belt
		position: absolute
		top: 0
		left: 0
		width: 23em
		height: 100%
		background: $color--accent
</style>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.faq

		h2
			font-size: 4rem

		&__belt
			display: none

		&__content
			width: 100%
			padding: 50px 25px

</style>
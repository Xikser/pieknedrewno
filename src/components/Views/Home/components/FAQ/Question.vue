<template>
	<div class="question" @click="showAnswer(question)">
		<h3>{{ question.question }}</h3>

		<p class="answer"> {{ question.answer }} </p>
	</div>
</template>

<script>
export default {
	name: 'Quest',
	props: {
		question: {
			type: Object,
			required: true,
		}
	},
	data() {
		return {
			answerIsVisible: false,
		}
	},
	methods: {
		showAnswer() {
			this.answerIsVisible = !this.answerIsVisible
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.question
	position: relative
	width: 100%
	padding: 15px 0
	margin: 15px 0

	&::after
		position: absolute
		content: ''
		bottom: 0
		left: 0
		width: 100%
		height: 3px
		background: linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(52,52,52,1) 100%)

	h3
		color: $color--light-accent
		font-size: 1.75rem
		font-weight: 700
		text-transform: uppercase

.answer
	margin-top: 15px
	overflow: hidden
	font-weight: 400
	color: $color--light
	font-size: 1.7rem
	line-height: 24px
</style>

<style lang="sass" scoped>
@media screen and (min-width: 320px) and (max-width: 980px)
	.question

		h3
			font-size: 1.4rem

	.answer
		font-size: 1.2rem
		line-height: 18px

</style>
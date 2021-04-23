<template>
	<button
			:buttonStyle="buttonStyle"
			:size="buttonSize"
			:type="buttonType"
			@click="clickButton(buttonText)"
	>
		{{ buttonText }}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		listName: {
			type: String,
		},
		icon: {
			type: Boolean,
		},
		buttonText: {
			type: String,
			required: true,
		},
		buttonSize: {
			type: String,
			required: true,
		},
		buttonStyle: {
			type: String,
			required: true,
		},
		buttonType: {
			type: String,
		},
		additionalElement: {
			type: Boolean,
		},
	},
	data() {
		return {
			iconDown: true,
			iconUp: false,
		}
	},

	methods: {
		clickButton(text) {
			this.$emit('btnClick', text)
		},
		changeIcon() {
			this.iconDown = !this.iconDown
			this.iconUp = !this.iconUp
			this.$emit('buttonClicked', this.listName)
		}
	}
}
</script>

<style lang="sass">
@import '../../assets/sass/variables'

button
	position: relative
	background: transparent
	border: 0
	color: $color--light
	cursor: pointer
	outline: none
	transition: all .5s ease
	z-index: 1

	&::before, &::after
		position: absolute
		content: ''

button[buttonStyle=shop-navbar]
	padding: 5px 0 !important
	font-size: 1.6rem !important

	&:hover
		text-decoration: underline

button[buttonStyle=default]
	text-transform: uppercase
	color: $color--dark
	background: $color--light
	font-weight: 700
	font-family: $font--primary

	&::before
		position: absolute
		content: ''
		top: 0
		left: 0
		width: 0
		height: 100%
		transition: all .5s ease
		background: $color--accent
		z-index: -1

	&:hover::before
		width: 95%

	&:hover
		color: $color--light


button[buttonStyle=primary]
	margin-bottom: 30px
	text-transform: uppercase
	background: $color--light-accent
	font-weight: 700
	cursor: default
	color: $color--accent
	font-family: $font--primary
	font-size: 1.5rem !important
	width: 100%

	i
		margin-left: 12px

	&::before
		position: absolute
		content: ''
		top: 0
		left: 0
		width: 90%
		height: 100%
		transition: all .5s ease
		background: $color--light
		z-index: -1

button[size=normal]
	font-size: 1.3rem
	padding: 10px 15px

button[size=large]
	font-size: 1.5rem
	padding: 20px 35px

button[size=xlarge]
	font-size: 1.7rem
	padding: 10px 50px
</style>

<style lang="sass" scoped>
@media screen and (min-width: 360px) and (max-width: 980px)

	button[size=large]
		font-size: 1.2rem
		padding: 15px 25px
</style>
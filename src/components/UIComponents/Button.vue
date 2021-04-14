<template>
	<button
			:buttonStyle="buttonStyle"
			:size="buttonSize"
			:type="buttonType"
	>
		{{ buttonText }}

		<i class="fas fa-arrow-right" v-if="icon === true"></i>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
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
		return {}
	},
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

button[buttonStyle=default]
	text-transform: uppercase
	color: $color--dark
	background: $color__light
	font-weight: 700
	font-family: $font--primary

	i
		margin-left: 12px

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
		width: 90%

	&:hover
		color: $color--light


button[buttonStyle=primary]
	text-transform: uppercase
	color: $color--light
	background: $color__accent
	font-weight: 700
	font-family: $font--primary

	i
		margin-left: 12px

	&::before
		position: absolute
		content: ''
		top: 0
		left: 0
		width: 0
		height: 100%
		transition: all .5s ease
		background: $color--light
		z-index: -1

	&:hover::before
		width: 90%

	&:hover
		color: $color--dark

button[size=normal]
	font-size: 1.7rem
	padding: 10px 25px

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
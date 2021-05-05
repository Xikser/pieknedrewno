<template functional>
	<nav class="offer__navbar">

		<div class="offer__navbar--mobile">
			<Button
					class="filter__button"
					buttonStyle=""
					buttonSize="normal"
					buttonText="Filtruj"
					style="cursor: pointer"
					@click="showFilters"
			></Button>
		</div>

		<ul class="offer__navbar-list" :class="{ 'offer__navbar-list--mobile': filters }">

			<li class="offer__navbar-list-item">
				<Button
						buttonStyle="shop-navbar"
						buttonSize="normal"
						buttonText="Wszystko"
						@click="navButtonClicked('default', 'Wszystko')"
				></Button>
			</li>

			<li class="offer__navbar-list-item">

				<Button
						buttonStyle="primary"
						buttonSize="normal"
						buttonText="Wystrój wnętrz:"
				></Button>

				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Drewniane panele ścienne"
								@click="navButtonClicked('wallpanels', category)"
								@btnClick="setCategory"
						></Button>
					</li>
				</ul>

			</li>

			<li class="offer__navbar-list-item">

				<Button
						buttonStyle="primary"
						buttonSize="normal"
						buttonText="Do ogrodu:"
				></Button>

				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Donice"
								@click="navButtonClicked('flowerpot', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Regały ogrodowe"
								@click="navButtonClicked('garden bookshelf', category)"
								@btnClick="setCategory"
						></Button>
					</li>
				</ul>

			</li>

			<li class="offer__navbar-list-item">

				<Button
						buttonStyle="primary"
						buttonSize="normal"
						buttonText="Do domu:"
				></Button>

				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Ramy luster"
								@click="navButtonClicked('mirror frame', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Skrzynki"
								@click="navButtonClicked('chest', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Regały"
								@click="navButtonClicked('bookshelf', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Deski piknikowe"
								@click="navButtonClicked('picnic', category)"
								@btnClick="setCategory"
						></Button>
					</li>
				</ul>

			</li>

			<li class="offer__navbar-list-item">

				<Button
						buttonStyle="primary"
						buttonSize="normal"
						buttonText="Gadżety:"
				></Button>

				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Stojaki na słuchawki"
								@click="navButtonClicked('headphones', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Łyżki do butów"
								@click="navButtonClicked('shoehorn', category)"
								@btnClick="setCategory"
						></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button
								buttonStyle="shop-navbar"
								buttonSize="normal"
								buttonText="Stojaki na wino"
								@click="navButtonClicked('wine rack', category)"
								@btnClick="setCategory"
						></Button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
import {handleWith} from "@/mixins/globalMixins";

export default {
	name: 'offer nav',
	mixins: [handleWith],
	data() {
		return {
			category: '',
			filters: false,
		}
	},
	methods: {
		setCategory(text) {
			this.category = text
		},
		navButtonClicked(subtype, category) {
			this.$emit('clicked', subtype, category)
			this.showFilters()
			window.scrollTo(0, 0)
		},
		showFilters() {
			this.filters = !this.filters
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.filter__button
	display: none

.offer__navbar
	position: relative
	width: 17vw
	margin-top: 20px

	&-list
		height: 100%
		display: flex
		flex-direction: column
		padding: 0 0 0 60px

		&-item
			margin: 15px 0

			&:nth-child(1)
				margin: 0 0 15px 0

	&-sub-list-item
		padding: 10px 0

</style>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.filter__button
		display: block
		text-transform: uppercase
		letter-spacing: 1.5px
		padding: 10px 25px
		width: 100%
		border-top: 1px solid $color--light-accent-gray
		border-bottom: 1px solid $color--light-accent-gray
		margin: 0 0 50px 0

	.offer__navbar
		width: 100%
		padding: 0
		transition: all .4s ease

		&-list
			padding: 0
			display: none

			&--mobile
				display: flex
				margin: 0 auto

			&-item
				text-align: center

				button
					text-transform: uppercase

		&-sub-list
			text-align: center

			&-item
				button
					text-transform: uppercase
</style>
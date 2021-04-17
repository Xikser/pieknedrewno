<template>
	<section class="main-shop">
		<div class="main-shop__content">

			<div class="main-shop__navbar">
				<ul class="main-shop__list">
					<li class="main-shop__list-item">
						<a href="">
							Wszystko
						</a>
					</li>
					<li class="main-shop__list-item">
						<a href="">
							Do ogrodu
						</a>
					</li>
					<li class="main-shop__list-item">
						<a href="">
							Do domu
						</a>
					</li>
					<li class="main-shop__list-item">
						<a href="">
							Wystrój wnętrz
						</a>
					</li>
					<li class="main-shop__list-item">
						<a href="">
							Gadżety
						</a>
					</li>
				</ul>
			</div>

			<div class="main-shop__container">
				<div
						class="main-shop__item"
						v-for="(item, index) in filteredItems"
						:key="index"
				>

					<img :src="item.src" :alt="item.alt">

					<div class="main-shop__item-content">
						<h3> {{ item.name }}</h3>
						<p> {{ item.price }} </p>
						<a :href="item.link">Zamów</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import shopitems from './ShopItems'

export default {
	name: 'Shop',
	computed: {
		filteredItems() {
			return this.shopitems.slice(0, 8)
		}
	},
	data() {
		return {
			shopitems: shopitems,
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'

.main-shop
	min-height: 100vh
	background: $color--accent

	&__content

</style>
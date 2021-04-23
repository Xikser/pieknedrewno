<template>
	<section class="shop">
		<h2 class="category">{{ handleCategory }}</h2>
			<div class="shop__content" >
				<Item
						v-for="(item, index) in getFilteredItems()"
						:key="index"
						:item="item"
						@click="itemView(item)"
				>
				</Item>
			</div>
	</section>
</template>

<script>
import Item from "@/components/Views/Offer/components/Shop/Item";
import ItemView from "@/components/Views/Offer/components/Shop/ItemView/ItemDetails";

import shopItems from "@/components/Views/Offer/components/Shop/libs/ShopItems";

export default {
	name: 'offer',
	components: {Item, ItemView},
	props: {
		subtype: {
			type: String,
		},
		category: {
			type: String,
		},
		animationName: {
			type: String,
		},
	},
	watch: {
		subtype: function () {
			this.setSubtype(this.subtype)
		},
		category: function () {
			this.setCategory(this.category)
		},
	},
	data() {
		return {
			shopItems: shopItems,
			selectedSubtype: 'default',
			view: false,
			item: Object,
			handleCategory: 'Wszystko',
			animation: 'shop',
		}
	},
	methods: {
		setCategory(category) {
			this.handleCategory = category
		},

		setSubtype(subtype) {
			this.selectedSubtype = subtype
		},

		getFilteredItems() {
			if (!this.selectedSubtype || this.selectedSubtype === 'default') {
				return this.shopItems
			}

			return this.shopItems.filter(e => e.subtype === this.selectedSubtype)
		},

		itemView(item) {
			this.$emit('changeView', item)
		}
	},
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

.category
	position: relative
	top: 0
	left: 8%
	font-size: 2.3rem
	text-transform: uppercase
	cursor: default

.shop
	position: relative
	width: 83vw
	margin-top: 20px
	margin-left: 50px
	min-height: 100vh

	&__content
		padding: 0 70px
		width: 100%
		display: flex
		flex-direction: row
		flex-wrap: wrap
		align-items: center
		justify-content: flex-start
</style>
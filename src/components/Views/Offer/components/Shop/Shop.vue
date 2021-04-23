<template functional>
	<section class="shop">
		<div class="shop__content">
			<Item
				v-for="(item, index) in shopitems"
				:key="index"
				:item="item"
			>
			</Item>
		</div>
	</section>
</template>

<script>
import shopitems from '../../Home/components/Shop/ShopItems'
import Item from "@/components/Views/Offer/components/Shop/Item/Item";

export default {
	name: 'offer',
	components: {Item},
	data() {
		return {
			shopitems: shopitems,
		}
	},
}
</script>

<style lang="sass" scoped>
@import 'src/assets/sass/variables'


</style>
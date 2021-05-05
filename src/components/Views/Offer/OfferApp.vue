<template>
	<section class="offer">
		<transition name="shop" mode='out-in'>
			<div class="offer__content" v-if="view === false">
				<div class="offer__banner"></div>
				<div class="offer__shop">
					<OfferNavbar @clicked="handleSubtype"/>
					<Shop :subtype="subtype" :category="category" @changeView="changeView"/>
				</div>
			</div>

			<ItemView :item="item" @changeView="changeView" v-else>
				<router-view name="itemView"></router-view>
			</ItemView>
		</transition>
	</section>
</template>

<script>
import OfferNavbar from "@/components/Views/Offer/components/Navbar/OfferNavbar";
import Shop from "@/components/Views/Offer/components/Shop/Shop";
import ItemView from "@/components/Views/Offer/components/Shop/ItemDetails";

export default {
	name: 'OfferApp',
	components: {Shop, OfferNavbar, ItemView},
	data() {
		return {
			subtype: '',
			category: '',
			view: false,
			item: Object,
		}
	},
	methods: {
		changeView(item) {
			this.view = !this.view
			this.item = item
		},
		handleSubtype(subtype, category) {
			this.subtype = subtype
			this.category = category
		}
	}
}
</script>

<style lang="sass">
.shop-enter-active
	animation: opacity-in .3s
	transition-delay: .4s
	position: absolute

@keyframes opacity-in
	0%
		opacity: 0

	100%
		opacity: 1

.shop-leave-active
	animation: opacity-out .3s
	position: absolute

@keyframes opacity-out
	0%
		opacity: 1
	100%
		opacity: 0

</style>

<style lang="sass" scoped>
@import 'src/assets/sass/variables'

.offer
	min-height: 100vh

	&__banner
		width: 100%
		height: 40vh
		background-image: url("../../../assets/images/banners/offer.jpg")
		background-position: top center
		background-repeat: no-repeat
		background-size: 100vw 40vh
		background-attachment: fixed

	&__content
		min-height: 100vh
		display: flex
		flex-direction: column
		background: $color--accent

	&__shop
		padding-top: 50px
		display: flex
		flex-direction: row
</style>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.offer

		&__banner
			height: 30vh
			background-size: cover

		&__shop
			flex-direction: column
</style>
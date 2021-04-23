<template>
	<div class="item">
		<div class="item__image">
			<img :src="item.src" :alt="item.name">

		</div>
	</div>
</template>

<script>
export default {
	name: 'Item',
	props: {
		item: {
			type: Object,
			required: true,
		}
	},
}
</script>
<script>
const shopItems = [
	{
		id: 6,
		name: 'Skrzynia 100% dąb',
		price: '1200.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item4.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item2',
		type: 'home',
		subtype: 'chest',
		category: 'Dom',
		subcategory: 'Skrzynie'
	},
	{
		id: 5,
		name: 'Regał na książki',
		price: '399.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'ite5',
		type: 'home',
		subtype: 'bookshelf',
		category: 'Dom',
		subcategory: 'Regały'
	},
	{
		id: 4,
		name: 'Rama lustra',
		price: '129.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item4.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'home',
		subtype: 'mirror frame',
		category: 'Dom',
		subcategory: 'Ramy luster'
	},
	{
		id: 4,
		name: 'Deski piknikowe',
		price: '129.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'home',
		subtype: 'picnic',
		category: 'Dom',
		subcategory: 'Deski piknikowe'
	},
	{
		id: 3,
		name: 'Donica 30x70',
		price: '40.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item3.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item3',
		type: 'garden',
		subtype: 'flowerpot',
		category: 'Ogród',
		subcategory: 'Donice'
	},
	{
		id: 2,
		name: 'Regał ogrodowy',
		price: '30.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item2.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item2',
		type: 'garden',
		subtype: 'garden bookshelf',
		category: 'Ogród',
		subcategory: 'Regały'
	},
	{
		id: 1,
		name: 'Donica 120x150',
		price: '70.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item1',
		type: 'garden',
		subtype: 'flowerpot',
		category: 'Ogród',
		subcategory: 'Donice'
	},
	{
		id: 4,
		name: 'Deski piknikowe',
		price: '22.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'home',
		subtype: 'picnic',
		category: 'Dom',
		subcategory: 'Deski piknikowe'
	},
	{
		id: 12,
		name: 'Głowa na słuchawki 100% akacja',
		price: '976.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item2.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'gadget',
		subtype: 'headphones',
		category: 'Gadżety',
		subcategory: 'Stojaki na słuchawki'
	},
	{
		id: 11,
		name: 'Stojak na wino 100% brzoza - obrotowy',
		price: '422.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item3.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item3',
		type: 'gadget',
		subtype: 'wine rack',
		category: 'Gadżety',
		subcategory: 'Stojaki na wino'
	},
	{
		id: 10,
		name: 'Stojak na wino',
		price: '90.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item4.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item2',
		type: 'gadget',
		subtype: 'wine rack',
		category: 'Gadżety',
		subcategory: 'Stojaki na wino'
	},
	{
		id: 9,
		name: 'Łyżka do butów - 150cm',
		price: '15.99 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item1',
		type: 'gadget',
		subtype: 'shoehorn',
		category: 'Gadżety',
		subcategory: 'Łyżki do butów'
	},
	{
		id: 7,
		name: 'Głowa na słuchawki 100% świerk',
		price: '423.00 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item3',
		type: 'gadget',
		subtype: 'headphones',
		category: 'Gadżety',
		subcategory: 'Stojaki na słuchawki'
	},

	{
		id: 8,
		name: 'Panele 1',
		price: '321.34 zł',
		link: '#',
		src: require('@/assets/images/shop/item2.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'interior',
		subtype: 'wallpanels',
		category: 'Wnętrze domu',
		subcategory: 'Panele'
	},
	{
		id: 2,
		name: 'Panele 12',
		price: '321.34 zł',
		link: '#',
		src: require('@/assets/images/shop/item1.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'interior',
		subtype: 'wallpanels',
		category: 'Wnętrze domu',
		subcategory: 'Panele'
	},
	{
		id: 1,
		name: 'Panele 126',
		price: '321.34 zł',
		link: '#',
		src: require('@/assets/images/shop/item2.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'interior',
		subtype: 'wallpanels',
		category: 'Wnętrze domu',
		subcategory: 'Panele'
	},
	{
		id: 6,
		name: 'Panele 12876',
		price: '321.34 zł',
		link: '#',
		src: require('@/assets/images/shop/item3.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'interior',
		subtype: 'wallpanels',
		category: 'Wnętrze domu',
		subcategory: 'Panele'
	},
	{
		id: 9,
		name: 'Panele 109',
		price: '321.34 zł',
		link: '#',
		src: require('@/assets/images/shop/item2.jpg'),
		images: [
			{
				img: require('@/assets/images/shop/item2.jpg')
			},
			{
				img: require('@/assets/images/shop/item1.jpg')
			},
			{
				img: require('@/assets/images/shop/item3.jpg')
			},
			{
				img: require('@/assets/images/shop/item4.jpg')
			},
		],
		alt: 'item4',
		type: 'interior',
		subtype: 'wallpanels',
		category: 'Wnętrzedomu',
		subcategory: 'Panele'
	},
]

export default shopItems
</script>

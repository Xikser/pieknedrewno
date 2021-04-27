<script>
const photos = [
	{
		id: 1,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p4.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p4.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p8.png')
			},
		],
	},
	{
		id: 2,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p2.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p2.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p3.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p5.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p7.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p8.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p1.png')
			},
		],
	},
	{
		id: 3,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p3.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p3.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p2.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p4.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p5.png')
			},
		],
	},
	{
		id: 4,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p5.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p5.png')
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png')
			},
		],
	},
	{
		id: 5,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p7.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
		],
	},
	{
		id: 6,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p2.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p4.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p3.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p1.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
		],
	},
	{
		id: 7,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p8.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p8.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p4.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p3.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p5.png'),
			},
		],
	},
	{
		id: 8,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p5.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p5.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p8.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
		],
	},
	{
		id: 9,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p2.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p4.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p3.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p1.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
		],
	},
	{
		id: 10,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p5.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p5.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p8.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p2.png'),
			},
		],
	},
	{
		id: 11,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p8.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p8.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
		],
	},
	{
		id: 12,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p7.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
		],
	},
	{
		id: 13,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p5.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p5.png'),
			},
			{
				img: require('@/assets/images/gallery/item1/p6.png'),
			},
		],
	},
	{
		id: 14,
		alt: 'gallery photo',
		src: require('@/assets/images/gallery/item1/p7.png'),
		images: [
			{
				img: require('@/assets/images/gallery/item1/p7.png'),
			},
		],
	},
]

export default photos
</script>
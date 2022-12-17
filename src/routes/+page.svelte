<script lang="ts">
	import { FirstSection } from '$lib/components';
	import { Navbar } from '$lib/components';
	import type { ProductProps } from '$lib/types';

	const products: ProductProps[] = [
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		},
		{
			title: 'Product 1',
			price: 10.99,
			description: 'this is the description 1',
			image: '/burger.png',
			_id: '1',
			tags: ['tag1', 'tag2']
		}
	];
</script>

<svelte:head>
	<title>Home | ESI Foods</title>
</svelte:head>

<Navbar />

<div class="w-full bg-[#EAE5D9] py-8 px-24">
	<FirstSection {products} />
</div>

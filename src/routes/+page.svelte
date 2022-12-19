<script lang="ts">
	import { FirstSection } from '$lib/components';
	import { Navbar } from '$lib/components';
	import { getAllProducts } from '$lib/products-api/query';
	import type { ProductProps } from '$lib/types';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const productsData: Writable<ProductProps[]> = writable([]);

	onMount(async () => {
		await getAllProducts(productsData);
	});
</script>

<svelte:head>
	<title>Home | ESI Foods</title>
</svelte:head>

<Navbar />

<div class="w-full bg-[#EAE5D9] py-8 px-24">
	<FirstSection products={$productsData} />
</div>

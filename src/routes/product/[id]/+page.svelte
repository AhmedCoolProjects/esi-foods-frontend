<script lang="ts">
	import { page } from '$app/stores';
	import { getProductById } from '$lib/products-api/query';
	import type { ProductProps } from '$lib/types';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const { id } = $page.params;

	const product: Writable<ProductProps> = writable({} as ProductProps);

	onMount(async () => {
		await getProductById(id, product);
	});
</script>

<svelte:head>
	{#if $product.title}
		<title>{$product.title} | ESI Foods</title>
	{:else}
		<title>Product | ESI Foods</title>
	{/if}
</svelte:head>

{#if $product._id}
	<div class="grid grid-cols-12 gap-4 relative">
		<img src={$product.image} alt={$product.title} class="w-full col-span-4 object-contain" />
		<div class="flex flex-col h-full col-span-6 justify-center">
			<div class="h-full justify-between flex flex-row items-center">
				<div class="flex flex-col items-start ">
					<h1 class="text-3xl font-bold">{$product.title}</h1>
					<p class="text-xl font-medium">{$product.description}</p>
				</div>
				<h1 class="text-2xl font-bold">Price: {$product.price}</h1>
			</div>
			{#if $product.tags}
				<div class="card-actions justify-end">
					{#if $product.tags}
						{#each $product.tags as tag}
							<div class="badge badge-outline">{tag}</div>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}

<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ProductProps } from '$lib/types';

	export let product: ProductProps;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => goto(`/product/${product._id}`)}
	class="card w-full bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
>
	<figure><img src={product.image} alt="Burger" /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{product.title}
			<div class="badge p-4 badge-secondary text-xl">
				${product.price}
			</div>
		</h2>
		<p>
			{product.description}
		</p>
		<div class="card-actions justify-end">
			{#if product.tags}
				{#each product.tags as tag}
					<div class="badge badge-outline">{tag}</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

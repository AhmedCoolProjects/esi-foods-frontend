<script lang="ts">
	import { ProductCard } from '../cards';
	import type { ProductProps } from '$lib/types';

	export let products: ProductProps[];
</script>

<div class="w-full flex flex-col items-center">
	<h1 class="text-3xl font-bold text-center mb-6">Top Products</h1>
	<div class="grid grid-cols-3 gap-4">
		{#each products.slice(0, 3) as product}
			<ProductCard {product} />
		{/each}
	</div>
	<div class="grid grid-cols-3 gap-4 mt-6">
		{#each products.slice(3, 5) as product}
			<ProductCard {product} />
		{/each}
		<!-- <div
			class="card w-full shadow-xl glass hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
		>
			<div class="flex flex-col items-center justify-center w-full h-full">
				<h1>Check More</h1>
			</div>
		</div> -->
	</div>
</div>

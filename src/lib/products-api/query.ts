import { AxiosProductsMicroservice } from '$lib/axios/http-commun';
import type { ProductProps } from '$lib/types';
import type { Writable } from 'svelte/store';

export const getAllProducts = async (productsData: Writable<ProductProps[]>) => {
	await AxiosProductsMicroservice.get('/products').then((response) => {
		productsData.set(response.data);
	});
};


export const getProductById = async (productId: string, product: Writable<ProductProps>) => {
    await AxiosProductsMicroservice.get(`/products/id/${productId}`).then((response) => {
        product.set(response.data);
    });
}
import axios from 'axios';

const AUTH_MICROSERVICE_LINK = "https://esi-foods-auth-api.vercel.app/api";

export const AxiosAuthMicroservice = axios.create({
	baseURL: AUTH_MICROSERVICE_LINK,
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

const STORAGE_MICROSERVICE_LINK = "https://esi-foods-storage-api.vercel.app/api";

export const AxiosStorageMicroservice = axios.create({
	baseURL: STORAGE_MICROSERVICE_LINK,
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json',
		
	}
});

const PRODUCTS_MICROSERVICE_LINK = "https://esi-foods-products.vercel.app/api";

export const AxiosProductsMicroservice = axios.create({
	baseURL: PRODUCTS_MICROSERVICE_LINK,
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});
import { AxiosAuthMicroservice } from '$lib/axios/http-commun';
import { user } from '$lib/store';

export async function registerUser({ email, password }: { email: string; password: string }) {
	await AxiosAuthMicroservice.post('/auth/register', {
		email,
		password
	})
		.then((response) => {
			user.set({
				email: response.data.email,
				uid: response.data.uid,
				isVerified: response.data.isVerified
			});
		})
		.catch((error) => {
			alert(error);
		});
}

export async function loginUser({ email, password }: { email: string; password: string }) {
	 await AxiosAuthMicroservice.post('/auth/login', {
		email,
		password
	})
	.then((response) => {
		user.set({
			email: response.data.email,
			uid: response.data.uid,
			isVerified: response.data.isVerified
		});
	})
	.catch((error) => {
		console.log(error);
	});
}

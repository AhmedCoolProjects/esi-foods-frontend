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
			console.log("response.data: ", response.data);
			user.set({
				email: response.data.email,
				uid: response.data.uid,
				isVerified: response.data.isVerified,
				displayName: response.data.displayName,
				photoUrl: response.data.photoURL
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

export async function updateUsername({ displayName }: { displayName: string }) {
	await AxiosAuthMicroservice.post('/auth/update', {
		displayName
	})
		.then((response) => {
			user.update((user) => {
				user.displayName = displayName;
				return user;
			});
			alert('Updated Username');
		})
		.catch((error) => {
			console.log(error);
		});
}

export const logoutUser = async () => {
	await AxiosAuthMicroservice.post('/auth/logout')
		.then((response) => {
			user.set({
				email: '',
				uid: '',
				isVerified: false,
				displayName: '',
				photoUrl: ''
			});
		})
		.catch((error) => {
			console.log(error);
		});
};


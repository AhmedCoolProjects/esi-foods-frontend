import { AxiosAuthMicroservice, AxiosStorageMicroservice } from "$lib/axios/http-commun";
import { user } from '$lib/store';

export const uploadProfilePicture = async (formData: FormData) => {
	await AxiosStorageMicroservice.post('/storage/files', formData, {
		headers: {
		  "Content-Type": "multipart/form-data",
		},
	  })
		.then(async (response1) => {
			await AxiosAuthMicroservice.post('/auth/photourl', {
				photoUrl: response1.data
			}).then((response) => {
				user.update((user) => {
					user.photoUrl = response1.data;
					return user;
				});
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

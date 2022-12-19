import { writable, type Writable } from 'svelte/store';

export const user: Writable<{ email: string; uid: string; isVerified: boolean; photoUrl?:string;displayName?:string; }> = writable({
    email: '',
    uid: '',
    isVerified: false,
    photoUrl: '',
    displayName: ''
});
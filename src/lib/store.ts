import { writable, type Writable } from 'svelte/store';

export const user: Writable<{ email: string; uid: string; isVerified: boolean }> = writable({
    email: '',
    uid: '',
    isVerified: false
});
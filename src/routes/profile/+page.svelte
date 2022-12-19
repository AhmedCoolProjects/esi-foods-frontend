<script lang="ts">
	import { updateUsername } from '$lib/auth-api/mutation';
	import { Navbar } from '$lib/components';
	import { user } from '$lib/store';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	let username: string = '';
	const isUpdating: Writable<boolean> = writable(false);

	onMount(() => {
		username = $user.displayName || '';
	});

	const updateUsernameFct = async () => {
		isUpdating.set(true);
		await updateUsername({ displayName: username }).then((res) => {
			isUpdating.set(false);
		});
	};
</script>

<svelte:head>
	{#if $user.displayName}
		<title>
			{$user.displayName} Profile | ESI Foods
		</title>
	{:else}
		<title>
			{$user.email} Profile | ESI Foods
		</title>
	{/if}
</svelte:head>

<Navbar />

<div class="flex flex-col items-center space-y-4 w-full">
	{#if $user.photoUrl}
		<img src={$user.photoUrl} alt="user image" class="h-48 w-48 rounded-full" />
	{:else}
		<img src="/avatar.png" alt="user avatar" class="h-48 w-48 rounded-full" />
	{/if}
	<p class="underline">
		{$user.email}
	</p>

	<div class="flex flex-row z-50 space-x-2">
		<input
			name="username"
			type="text"
			placeholder="Add Username .."
			class="input input-bordered w-full"
			bind:value={username}
		/>
		<button
			disabled={!username || username === $user.displayName}
			on:click={updateUsernameFct}
			class="btn btn-primary">Update</button
		>
	</div>
</div>

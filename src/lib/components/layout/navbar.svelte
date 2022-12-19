<script lang="ts">
	import { goto } from '$app/navigation';
	import { logoutUser } from '$lib/auth-api/mutation';
	import { user } from '$lib/store';

	const logoutFct = async () => {
		await logoutUser().then(() => {
			if (!$user.uid) goto('/auth');
		});
	};
</script>

<div class="navbar bg-base-100 p-8 flex-row items-center justify-between">
	<div class="">
		<a href="/" class="btn btn-ghost normal-case items-center justify-center flex flex-col text-xl">
			<img src="./logo.svg" alt="logo" class="h-24 w-24 object-contain" />
		</a>
	</div>
	<div
		class="flex flex-row items-center h-full space-x-8 absolute left-1/2 transform -translate-x-1/2"
	>
		<a class="hover:scale-105 transition-all duration-300 ease-in-out" href="/"> Home </a>
		<a class="hover:scale-105 transition-all duration-300 ease-in-out" href="/products"> Menu </a>
		<a class="hover:scale-105 transition-all duration-300 ease-in-out" href="/about"> About </a>
		<a class="hover:scale-105 transition-all duration-300 ease-in-out" href="/products/healthy">
			Healthy
		</a>
		<a class="hover:scale-105 transition-all duration-300 ease-in-out" href="/contact"> Contact </a>
	</div>
	<div class="flex-none gap-2">
		<p>
			{#if $user.uid}
				{#if $user.displayName}
					{$user.displayName}
				{:else}
					{$user.email}
				{/if}
			{/if}
		</p>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label for="avatar" tabindex="0" class="btn btn-ghost btn-circle avatar">
				{#if $user.photoUrl}
					<img class="w-10 rounded-full object-cover" src={$user.photoUrl} alt="avatar" />
				{:else}
					<img class="w-10 rounded-full object-cover" src="/avatar.png" alt="avatar" />
				{/if}
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				{#if $user.uid}
					<li><a href="/profile"> Profile </a></li>
					<li on:click={logoutFct}><a>Logout</a></li>
				{:else}
					<li><a href="/auth"> Login </a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>

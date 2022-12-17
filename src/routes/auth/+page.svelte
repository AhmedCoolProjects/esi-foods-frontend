<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginUser, registerUser } from '$lib/auth-api/mutation';

	let isLogin: boolean = true;
	let email: string = '';
	let password: string = '';

	const handleLogin = () => {
		isLogin = !isLogin;
	};

	const registerFct = async () => {
		await registerUser({ email, password }).then((res) => {
			goto('/');
		});
	};
</script>

<svelte:head>
	{#if isLogin}
		<title>Login | ESI Foods</title>
	{:else}
		<title>Register | ESI Foods</title>
	{/if}
</svelte:head>

<div class="w-full items-center flex flex-col justify-center h-screen">
	<div
		class="flex flex-col items-center justify-center p-8 bg-blue-700 shadow-gray-600 rounded-2xl shadow-xl"
	>
		<h1 class="text-center text-3xl text-white mb-4">
			{#if isLogin}
				Login
			{:else}
				Register
			{/if}
		</h1>
		<!-- <div class="form-control w-full min-w-[350px]">
			<label for="username" class="label">
				<span class="label-text">Username?</span>
			</label>
			<input
				name="username"
				type="text"
				placeholder="Type here .."
				class="input input-bordered w-full"
			/>
		</div> -->
		<div class="form-control w-full min-w-[350px]">
			<label for="email" class="label">
				<span class="label-text">Email?</span>
			</label>
			<input
				name="email"
				type="email"
				placeholder="Type here .."
				class="input input-bordered w-full"
				bind:value={email}
			/>
		</div>
		<div class="form-control w-full min-w-[350px]">
			<label for="password" class="label">
				<span class="label-text">Password?</span>
			</label>
			<input
				name="password"
				type="password"
				placeholder="Type here .."
				class="input input-bordered w-full"
				bind:value={password}
			/>
		</div>
		<div class="flex flex-row items-end justify-end w-full mt-4">
			{#if isLogin}
				<h2>
					Don't have an account? <span on:click={handleLogin} class="text-gray-400 cursor-pointer"
						>Register</span
					>
				</h2>
			{:else}
				<h2>
					Already have an account? <span on:click={handleLogin} class="text-gray-400 cursor-pointer"
						>Login</span
					>
				</h2>
			{/if}
		</div>
		<button
			disabled={!email || !password}
			on:click={() => {
				if (isLogin) {
					loginUser({ email, password });
				} else {
					registerFct();
				}
			}}
			class="btn mt-8 w-full"
		>
			{#if isLogin}
				Login
			{:else}
				Register
			{/if}
		</button>
	</div>
</div>

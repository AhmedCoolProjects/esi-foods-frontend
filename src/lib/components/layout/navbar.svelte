<div class="navbar bg-base-100 p-8 flex-row items-center justify-between">
	<div class="">
		<a class="btn btn-ghost normal-case items-center justify-center flex flex-col text-xl">
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
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://placeimg.com/80/80/people" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a href="/auth"> Login </a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>

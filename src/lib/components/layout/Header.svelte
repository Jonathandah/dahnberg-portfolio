<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import logo from '$lib/images/logo/Regular-red.svg';
</script>

<Navbar
	class="!px-0 mx-auto py-2.5 fixed z-20 top-0 left-0 border-b [&>div]:px-4 bg-zinc-200 border-b-zinc-300 dark:bg-gray-800"
>
	<NavBrand href="/">
		<img src={logo} class="h-10 w-10" alt="Dahnberg logo" />
	</NavBrand>
	<div class="flex items-center md:order-2">
		<DarkMode />
		<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
	</div>

	<NavUl>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

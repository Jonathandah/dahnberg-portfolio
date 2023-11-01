<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<Navbar class="!px-0 mx-auto py-2.5 fixed z-20 top-0 left-0 border-b [&>div]:px-4">
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dahnberg.dev</span
		>
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

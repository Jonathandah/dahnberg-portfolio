<script>
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.postcss';
</script>

<div class="app h-dvh flex flex-col dark:bg-black">
	<Header />

	<main class=" flex-1">
		<slot />
	</main>

	<footer />
</div>

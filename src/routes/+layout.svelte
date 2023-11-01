<script>
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.postcss';
</script>

<div class="app">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<footer />
</div>

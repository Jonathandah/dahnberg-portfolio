<script lang="ts">
	let klass: string = '';
	export { klass as class };
</script>

<div class="container p-4 mx-auto {klass}">
	<slot />
</div>

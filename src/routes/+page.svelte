<script>
	import Container from '$lib/components/layout/Container.svelte';
	import { Alert, Button, Heading, P } from 'flowbite-svelte';
	import myGif from '$lib/images/giphy.gif';
</script>

<div class="flex flex-col gap-20">
	<section class="flex w-full h-screen">
		<img alt="Waterfall" class="flex-1" src={myGif} />
	</section>

	<Container>
		<section>
			<article class="[&>*]:text-center">
				<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
					>We invest in the world’s potential</Heading
				>
				<P class="text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
					>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
					long-term value and drive economic growth.</P
				>
			</article>
		</section>
	</Container>

	<Container>
		<section>
			<article class="[&>*]:text-center">

			</article>
		</section>
	</Container>
</div>

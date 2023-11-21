<script>
	import Container from '$lib/components/layout/Container.svelte';
	import { Alert, Button, Heading, P } from 'flowbite-svelte';
	import myGif from '$lib/images/giphy.gif';
	import logo from '$lib/images/logo/Regular-red.svg';
</script>

<div class="flex flex-col gap-20 mt-[4.5rem]">
	<section class=" border-b-zinc-300 border">
		<Container class="grid grid-cols-12 grid-rows-4">
			<Heading tag="h1" class="uppercase font-light col-span-full">Dahnberg.Dev</Heading>

			<article class="row-start-2 col-span-full">
				<Heading tag="h2" class="uppercase text-3xl font-medium ">Software Engineer</Heading>
				<P class=" max-w-md">
					Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
					long-term value and drive economic growth.</P
				>
			</article>

			<!-- <img
					src={logo}
					class="h-full w-auto col-start-10 col-end-12 row-span-2"
					alt="Dahnberg logo"
				/> -->
		</Container>
	</section>

	<!-- <Container>
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
	</Container> -->
</div>

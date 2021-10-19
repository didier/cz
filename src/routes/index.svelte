<script context="module">
	import { browser, dev } from '$app/env'

	export const router = dev
	export const hydrate = dev

	const title = "Didier Catz' Business Card ⇴ didier.cz"
	const description = "Didier Catz' contact details, in the form of easily shareable short links."
	const url = dev ? 'http://localhost:3000' : 'https://didier.cz/'

	export const load = async () => {
		const links = [
			{ href: '/s', title: 'Portfolio' },
			// { href: '/work', title: 'Work' },
			// { href: '/writing', title: 'Writing' },
			{ href: '/cv', title: 'Resumé' },
			{ href: '/g', title: 'GitHub' },
			{ href: '/i', title: 'Instagram' },
			{ href: '/l', title: 'LinkedIn' },
			{ href: '/t', title: 'Twitter' },
			{ href: 'mailto:hello@didiercatz.com', title: 'Contact' }
		]

		return {
			props: {
				links
			}
		}
	}
</script>

<script>
	// Components
	import Link from '$lib/Link.svelte'
	import SvelteSeo from 'svelte-seo'

	// Actions
	import accordion from '$lib/accordion'

	// Internals
	import { navigating } from '$app/stores'
	import { fade } from 'svelte/transition'

	export let links = []

	let open = false
	const toggle = () => (open = !open)
</script>

<SvelteSeo
	{title}
	{description}
	canonical={url}
	openGraph={{
		title,
		description,
		url,
		images: [{ url: `${url}/meta.png` }],
		type: 'website'
	}}
	twitter={{
		title,
		site: '@didier',
		description,
		image: `${url}/meta.png`
	}}
/>
{#if !$navigating}
	<div class="pt-16 pb-2 border-b border-1 dark:border-gray-700 px-4">Didier Catz</div>
	<header class="grid gap-8 px-4" transition:fade>
		<img
			class="rounded-full object-cover w-24 h-24 border-gray-100 border-2"
			src="/me.jpg"
			alt="Didier Catz"
			width="96"
			height="96"
		/>
		<div class="text-xl">
			<h1>Didier Catz</h1>
			<h2 class="text-gray-500 dark:text-gray-400">Designer & Engineer</h2>
			<h3>Co-Founder, <a href="https://stypt.nl">Stypt</a></h3>
		</div>
		<!-- <p class="text-gray-500"> -->
		<!-- Didier Catz is a technical designer and developer with 7+ years of experience creating
				interactive digital experiences and products. -->
		<!-- Designing intuitive human interfaces at the intersection of technology and creativity. -->
		<!-- </p> -->
	</header>
	<main
		transition:fade
		class="grid gap-4 bg-white dark:bg-gray-900 p-4 py-8 rounded-xl overflow-x-hidden"
	>
		<!-- <h1 class="font-medium text-2xl">About Didier</h1> -->
		<!-- <p class="text-gray-500">
					You can find his contact details below, in the form of easily shareable shortlinks.
				</p> -->
		<ul class="grid gap-4">
			{#each links as link}
				<li>
					<Link {...link} />
				</li>
			{/each}
			<li>
				<div class="cursor-pointer relative" class:open>
					<button class="w-full flex justify-between" on:click={toggle}>
						<p class="text-3xl">Share this page</p>
						<p class="text-3xl transform transition" class:rotate-90={open}>&RightArrow;</p>
					</button>
					<div use:accordion={open}>
						<div
							class="bg-gray-100 dark:bg-gray-800 rounded-lg py-8 mt-4 grid place-items-center gap-4"
						>
							<img
								src="/qr.svg"
								class="z-50 mx-auto"
								alt="Scan this QR code to share this business card."
							/>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</main>
	<footer class="text-gray-500 dark:text-gray-400 flex justify-end p-4">
		<p>&copy; Didier Catz, {new Date().getFullYear()}</p>
	</footer>
{/if}

<style>
	/* .open:before {
		@apply block transition ease-out w-full h-full absolute left-1/2 top-1/2 rounded-lg bg-orange;
		width: calc(100% + 3rem);
		height: calc(100% + 1rem);
		content: '';
		z-index: 0;
		transform: translate(-50%, -50%);
	} */
</style>

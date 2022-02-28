<script context="module">
	import { dev } from '$app/env'

	export const router = dev
	export const hydrate = dev

	const title = "Didier Catz' Business Card ⇴ didier.cz"
	const description = "Didier Catz' contact details, in the form of easily shareable short links."
	const url = dev ? 'http://localhost:3000' : 'https://didier.cz/'

	export const load = async () => {
		const links = [
			{ href: '/s', title: 'Portfolio' },
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
	import StandWithUkraine from '$lib/StandWithUkraine.svelte'

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
		site: '@didiercatz',
		description,
		image: `${url}/meta.png`
	}}
/>

<StandWithUkraine />

<div data-wrapper>
	{#if !$navigating}
		<div class="pt-16 pb-2 border-b border-1 dark:border-gray-700 px-4">Didier Catz</div>
		<header class="grid gap-8 px-4 py-8" transition:fade>
			<img
				class="rounded-full object-cover w-24 h-24 border-gray-100 border-2"
				src="/me.jpg"
				alt="Didier Catz"
				width="96"
				height="96"
			/>
			<div class="text-xl">
				<h1>Didier Catz</h1>
				<h2 class="text-gray-600 dark:text-gray-400">Designer & Engineer</h2>
				<h3>Co-Founder, <a href="https://stypt.nl">Stypt</a></h3>
			</div>
		</header>
		<main
			transition:fade
			class="grid gap-4 bg-white dark:bg-gray-900 p-4 py-8 sm:rounded-xl overflow-x-hidden sm:overflow-visible"
		>
			<ul class="grid gap-4">
				{#each links as link}
					<li>
						<Link {...link} />
					</li>
				{/each}
			</ul>
		</main>
		<footer class="text-gray-600 dark:text-gray-400 flex justify-end p-4">
			<p>&copy; Didier Catz, {new Date().getFullYear()}</p>
		</footer>
	{/if}
</div>

<style>
	/* .open:before {
		@apply block transition ease-out w-full h-full absolute left-1/2 top-1/2 rounded-lg bg-orange;
		width: calc(100% + 3rem);
		height: calc(100% + 1rem);
		content: '';
		z-index: 0;
		transform: translate(-50%, -50%);
	} */

	[data-wrapper] {
		animation: move 0.5s var(--ease-out) 1s forwards;
	}

	@keyframes move {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(56px);
		}
	}
</style>

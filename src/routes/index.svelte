<script context="module">
	import { dev } from '$app/env'

	export const router = dev
	export const hydrate = dev

	const title = "Didier Catz' Business Card ⇴ didier.cz"
	const description = "Didier Catz' contact details, in the form of easily shareable short links."
	const url = dev ? 'http://localhost:3000' : 'https://didier.cz/'

	const links = [
		{ href: '/s', title: 'Portfolio', name: 'didiercatz.com' },
		{ href: '/cv', title: 'Resumé', name: 'read.cv/didier' },
		{ href: '/g', title: 'GitHub', name: '@didier' },
		{ href: '/i', title: 'Instagram', name: '@didiercatz' },
		{ href: '/l', title: 'LinkedIn', name: '@didiercatz' },
		{ href: '/t', title: 'Twitter', name: '@didiercatz' },
		{ href: 'mailto:hello@didiercatz.com', title: 'Contact', name: 'hello@didiercatz.com' }
	]
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

<div data-wrapper class="p-4">
	{#if !$navigating}
		<!-- <div class="pt-16 pb-1 border-b border-1 dark:border-gray-700 px-4">Didier Catz</div> -->
		<header
			class="grid gap-8 py-16 sm:pt-24 grid-cols-[auto_1fr] items-center my-auto"
			transition:fade
		>
			<img
				class="rounded-full object-cover w-24 h-24 border-gray-100 border-2"
				src="/me.jpg"
				alt="Didier Catz"
				width="96"
				height="96"
			/>
			<div class="text-xl">
				<h1>Didier Catz</h1>
				<h2 class="text-gray-600 dark:text-gray-400">People-centered creative technologist</h2>
				<h3 class="text-gray-600 dark:text-gray-400 mt-2">didiercatz.eth</h3>
			</div>
		</header>
		<main transition:fade class="grid gap-4 dark:bg-gray-900 sm:rounded-2xl">
			<ul class="grid gap-2 sm:gap-4 sm:grid-cols-2">
				{#each links as link, index}
					<li class="link" style:--delay="{index * 75}ms">
						<Link {...link} />
					</li>
				{/each}
			</ul>
		</main>
	{/if}
</div>

<style lang="postcss">
	.link {
		animation: enter 0.3s var(--ease-out) forwards;

		animation-delay: var(--delay);
		opacity: 0;
		@apply origin-top sm:origin-top-left;
	}

	@keyframes enter {
		from {
			opacity: 0;
			transform: scale(0.85);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>

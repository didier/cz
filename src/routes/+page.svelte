<script>
	// Components
	import Link from '$lib/Link.svelte'
	import SvelteSeo from 'svelte-seo'

	// Internals
	import { navigating } from '$app/stores'
	import { fade } from 'svelte/transition'
	import { onMount } from 'svelte'

	/** @type {import('./$types').PageData} */
	export let data
	$: ({ title, links, description, image } = data)

	const url = 'https://catz.me'

	let isSharingSupported = false

	onMount(() => {
		if (navigator) {
			isSharingSupported = navigator.canShare
		}
	})

	/**
	 * @type {HTMLDetailsElement}
	 */
	let details

	onMount(() => {
		details.addEventListener('toggle', (e) => {
			if (e.target.open) {
				window.scrollTo(0, details.offsetTop)
			} else {
				window.scrollTo(0, 0)
			}
		})
	})
</script>

<SvelteSeo
	{title}
	{description}
	canonical={url}
	openGraph={{
		title: title,
		description: description,
		url: url,
		images: [{ url: `${url}/meta.png` }],
		type: 'website'
	}}
	twitter={{
		title: title,
		description: description,
		site: '@didiercatz',
		image: `${url}/meta.png`
	}}
/>

<div data-wrapper class="p-4">
	{#if !$navigating}
		<!-- <div class="pt-16 pb-1 border-b border-1 dark:border-gray-700 px-4">Didier Catz</div> -->
		<header class="grid gap-8 py-12 sm:pt-24 grid-cols-[auto_1fr] items-center" transition:fade>
			<img
				class="rounded-full object-fill w-24 h-24 border-gray-100 border-2"
				src="/logo.png"
				alt="Didier Catz"
				width="96"
				height="96"
			/>
			<div class="text-xl">
				<h1>Didier Catz</h1>
				<h2 class="text-gray-600 dark:text-gray-400">✳︎ Designer & Code Artisan</h2>

				<a
					href="mailto:didier@catz.me"
					class="text-gray-900 dark:text-white mt-2 block underline decoration-transparent hover:decoration-gray-400 transition"
					>didier@catz.me</a
				>
			</div>
		</header>
		<main transition:fade class="grid gap-2 sm:rounded-2xl relative">
			<ul class="grid gap-2 sm:grid-cols-2">
				{#each links as link, index}
					<li style:--delay="{index * 75}ms">
						<Link {...link} />
					</li>
				{/each}
				{#if isSharingSupported}
					<li style:--delay="{links.length * 75}ms">
						<Link {isSharingSupported} title="Share" name="Open Share Sheet" />
					</li>
				{/if}
			</ul>
			<!-- <details
				style:--delay="{(links.length + 1) * 75}ms"
				class="border-t-transparent open:link w-full max-w-full relative open:bg-white dark:open:bg-gray-700/50  dark:ring-gray-700 rounded-xl p-4 transition-all group mb-4 open:shadow-xl open:shadow-gray-400/10 dark:open:shadow-gray-900/10"
				bind:this={details}
			>
				<summary
					class="text-xl grid grid-flow-col justify-between items-center gap-2 cursor-pointer group-hover:font-medium transition-all"
				>
					<div class="underline decoration-gray-300 dark:decoration-gray-600">
						What is a Design Engineer?
					</div>
					<div
						class="arrow transition text-gray-600 dark:text-gray-400 select-none"
						aria-hidden="true"
					>
						&times;
					</div>
				</summary>
				<blockquote class="mt-2 text-gray-600 dark:text-gray-300 text-md">
					Design engineering is the name for the discipline that finesses the overlap between design
					and engineering to speed delivery and idea validation. From prototyping to
					production-ready code, this function fast-tracks design decisions, mitigates risk, and
					establishes UI code quality. The design engineer&lsquo;s work encapsulates the systems,
					workflows, and technology that empower designers and engineers to collaborate most
					effectively to optimise product development and innovation.
					<cite class="block mt-4"><span aria-hidden="true">— </span>Natalya Shelburne</cite>
				</blockquote>
			</details> -->
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

	details > summary {
		list-style: none;
	}
	details > summary::-webkit-details-marker {
		display: none;
	}

	details summary .arrow {
		@apply opacity-0 rotate-45;
	}

	details:hover summary .arrow {
		@apply opacity-100 rotate-45;
	}
	details[open] summary .arrow {
		@apply opacity-100 rotate-0;
	}
</style>

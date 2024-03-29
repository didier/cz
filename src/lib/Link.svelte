<script>
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	export let href = null,
		title,
		name,
		isSharingSupported = false

	async function share() {
		if (browser && document && navigator) {
			await navigator.share({
				title: document.querySelector('title').textContent,
				url: document.querySelector('link[rel="canonical"]').getAttribute('href')
			})
		}
	}
	let mounted = false
	onMount(() => {
		mounted = true
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
	this={isSharingSupported ? 'button' : 'a'}
	on:click={isSharingSupported && share}
	{href}
	data-splitbee-event={title}
	class="w-full text-left items-center h-full link grid grid-cols-2 sm:grid-cols-1 sm:content-between relative z-20 bg-white dark:bg-gray-700/50 dark:ring-0 dark:ring-gray-700 rounded-xl shadow-xl shadow-gray-400/10 dark:shadow-gray-900/10 p-4 sm:h-32 group"
>
	<div class="flex items-center justify-end sm:justify-start overflow-hidden">
		<p class="pr-1 text-sm text-gray-500 text-right sm:text-left">
			{#if !href.includes('mailto')}
				<span class="sm:group inline-grid items-center grid-cols-1 grid-rows-1 overflow-hidden">
					<span
						class:transition={mounted}
						class="duration-300 ease-in-out col-start-1 row-start-1 col-span-1 row-span-1 -translate-y-full group-hover:translate-y-0 inline-block"
						>{name}
						&RightArrow;</span
					>
					<span
						class:transition={mounted}
						class="duration-300 ease-in-out col-start-1 row-start-1 col-span-1 row-span-1 translate-y-0 group-hover:translate-y-full"
						>catz.me{href}
						&RightArrow;</span
					>
				</span>
			{:else}
				<span class="col-start-1 row-start-1 col-span-1 row-span-1"
					>{name}
					&RightArrow;</span
				>
			{/if}
		</p>
	</div>
	<h2
		class="text-3xl leading-none col-start-1 row-span-full sm:row-start-2 sm:row-span-auto sm:col-start-auto"
	>
		{title}
	</h2>
</svelte:element>

<style lang="postcss">
	.link:before {
		@apply block transition ease-out w-full h-full absolute left-1/2 top-1/2 rounded-xl;
		width: calc(100% + 3rem);
		height: calc(100% + 1rem);
		width: 100%;
		height: 100%;
		content: '';
		z-index: -1;
		transform: translate(-50%, -50%) scale(0.97);
	}

	.link:after {
		@apply block absolute border-4 border-transparent left-1/2 top-1/2 rounded-2xl transition ease-out;
		/* width: calc(100% + 1rem); */
		/* height: calc(100% + 1rem); */
		width: 100%;
		height: 100%;
		content: '';
		transform: translate(-50%, -50%);
		transform-origin: center;
		opacity: 0;
	}

	.link:hover,
	.link:focus {
		outline: none;
		&,
		div p {
			@apply text-white;
		}

		&:after {
			@apply border-indigo-500 dark:border-indigo-800;
			opacity: 0.5;
			animation: pulse 0.75s infinite ease-out;
		}
		&:before {
			@apply bg-indigo-500 dark:bg-indigo-800;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@keyframes pulse {
		from {
			transform: translate(-50%, -50%) scale(0.95);
			opacity: 0.5;
		}
		to {
			transform: translate(-50%, -50%) scaleY(1.1) scaleX(1.06);
			opacity: 0;
		}
	}
</style>

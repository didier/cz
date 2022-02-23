<script>
	export let href, title

	let isMail = href.includes('mailto')
</script>

<a {href} data-splitbee-event={title} class="link flex justify-between relative z-20">
	<p class="text-3xl">{title}</p>
	<div class="flex items-center">
		<p class="pr-2 text-sm text-gray-500" class:is-mail={isMail}>
			{#if isMail}
				{href.replace('mailto:', '')}
			{:else}
				didier.cz{href}
			{/if}
		</p>
		<p class="text-3xl">&RightArrow;</p>
	</div>
</a>

<style lang="postcss">
	.link:before {
		@apply block transition ease-out w-full h-full absolute left-1/2 top-1/2 rounded-lg;
		width: calc(100% + 3rem);
		height: calc(100% + 1rem);
		content: '';
		z-index: -1;
		transform: translate(-50%, -50%) scale(0.97);
	}

	.link:after {
		@apply block absolute border-4 border-transparent left-1/2 top-1/2 rounded-lg transition ease-out;
		width: calc(100% + 3rem);
		height: calc(100% + 1rem);
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
			@apply border-orange;
			opacity: 0.5;
			animation: pulse 0.75s infinite ease-out;
		}
		&:before {
			@apply bg-orange;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@keyframes pulse {
		from {
			transform: translate(-50%, -50%);
			opacity: 0.5;
		}
		to {
			transform: translate(-50%, -50%) scaleY(1.2) scaleX(1.02);
			opacity: 0;
		}
	}
</style>

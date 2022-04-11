<script>
	export let href, title, name
</script>

<a
	{href}
	data-splitbee-event={title}
	class="link grid grid-cols-2 sm:grid-cols-1 sm:content-between relative z-20 bg-white rounded-xl shadow-xl shadow-gray-400/10 p-4 sm:h-32 group"
>
	<div class="flex items-center justify-end sm:justify-start overflow-hidden">
		<p class="pr-1 text-sm text-gray-500 text-right sm:text-left">
			{name} &RightArrow;
		</p>
	</div>
	<p
		class="text-3xl leading-none col-start-1 row-span-full sm:row-start-2 sm:row-span-auto sm:col-start-auto"
	>
		{title}
	</p>
</a>

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
			@apply border-indigo-500;
			opacity: 0.5;
			animation: pulse 0.75s infinite ease-out;
		}
		&:before {
			@apply bg-indigo-500;
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

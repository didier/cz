<script>
	export let href, title

	let isMail = href.includes('mailto')
</script>

<a {href} data-splitbee-event={title} class="flex justify-between relative z-20">
	<p>{isMail ? '/m' : href}</p>
	<p>{title}</p>
</a>

<style>
	a > p:first-child::before {
		content: 'didier.cz';
		@apply text-gray-500 dark:text-gray-400;
	}
	a:before {
		@apply block transition-colors ease-out w-full h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg;
		width: calc(100% + 2rem);
		height: calc(100% + 1rem);
		content: '';
		z-index: -1;
	}
	a:hover::before {
		@apply bg-gray-100 dark:bg-gray-600;
	}
</style>

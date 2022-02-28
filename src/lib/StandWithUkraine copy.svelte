<script>
	import { fade } from 'svelte/transition'
	const hashtags = ['StopWarInUkraine', 'StandWithUkraine']
		.map((item, index, array) => array)
		.flat()
		.map((item, index, array) => array)
		.flat()
		.map((item, index, array) => array)
		.flat()
</script>

<div
	class="fixed print:hidden left-0 right-0 top-0 marquee w-[200vw] flex overflow-hidden ring-1 ring-gray-200 dark:ring-900"
	in:fade
>
	{#each hashtags as hashtag}
		<a
			href="https://twitter.com/hashtag/{hashtag}"
			class="odd:bg-[#0000ff] odd:text-white bg-[#ffff00] px-6 py-4 h-full text-black text-center grid place-items-center"
		>
			#{hashtag}
		</a>
	{/each}
</div>

<style>
	.marquee a {
		animation: marquee 5s linear 0s infinite;
	}

	@keyframes marquee {
		0% {
			transform: translate3d(0%, 0, 0);
		}

		100% {
			transform: translate3d(-200%, 0, 0);
		}
	}
</style>

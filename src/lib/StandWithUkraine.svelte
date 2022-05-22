<script>
	import { fade } from 'svelte/transition'
</script>

<div
	data-wrapper
	class="fixed print:hidden translate-y-full left-0 right-0 bottom-0 marquee w-full overflow-hidden ring-1 ring-gray-200 dark:ring-blue-700 font-medium hidden md:flex"
	in:fade
>
	<a
		href="https://www.stopputin.net/"
		class="bg-blue-700 transition hover:bg-blue-600 text-white px-6 py-4 h-full  text-center w-full inline"
	>
		I <span class="text-yellow-300">#StandWithUkraine</span>. Petition your leaders. Show your
		support.
		<span class="transform inline-block ml-1 -rotate-90">
			<span class="inline-block animate-bounce">&downarrow;</span>
		</span>
	</a>
</div>

<style>
	[data-wrapper] {
		animation: move 0.5s var(--ease-out) 1s forwards;
	}

	@keyframes move {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>

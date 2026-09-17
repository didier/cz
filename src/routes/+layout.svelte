<script lang="ts">
	import '../app.css'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<div class="mx-auto flex min-h-dvh max-w-[50ch] flex-col px-4">
	{@render children()}

	<footer class="mt-auto flex h-r-2 items-center text-quaternary uppercase">
		<span>&copy; {new Date().getFullYear()}</span>
	</footer>
</div>

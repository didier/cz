<script lang="ts">
	let { href, title, name }: { href: string; title: string; name: string } = $props()
</script>

<a {href} class="group flex h-r-2 items-center justify-between text-tertiary hover:text-primary">
	<span class="uppercase">{title}</span>
	<span class="flex items-center gap-2 text-quaternary group-hover:text-primary">
		{name}
		<span aria-hidden="true">&rightarrow;</span>
	</span>
</a>

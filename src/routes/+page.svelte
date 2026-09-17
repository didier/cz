<script lang="ts">
	// Components
	import Link from '$lib/Link.svelte'

	// Internals
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	const url = 'https://catz.me'
	const ogImage = 'https://didiercatz.com/og?title=Didier%20Catz'

	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Didier Catz',
		jobTitle: 'Design Engineer',
		url,
		email: 'mailto:didier@catz.me',
		image: `${url}/logo.png`,
		sameAs: [
			'https://didiercatz.com',
			'https://github.com/didier',
			'https://twitter.com/didiercatz',
			'https://instagram.com/didiercatz',
			'https://linkedin.com/in/didiercatz',
			'https://read.cv/didier'
		]
	}
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Didier Catz" />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Didier Catz, Design Engineer" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@didiercatz" />
	<meta name="twitter:creator" content="@didiercatz" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="Didier Catz, Design Engineer" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags, no-useless-escape -->
	{@html `<script type="application/ld+json">${JSON.stringify(person)}<\/script>`}
</svelte:head>

<div class="grid gap-r-3 py-r-4">
	<header class="grid gap-r-1">
		<img src="/logo.png" alt="" width="96" height="96" class="size-r-1.5 rounded-full" />
		<div>
			<h1 class="uppercase">Didier Catz</h1>
			<p class="text-tertiary">Design Engineer</p>
		</div>
	</header>

	<ul class="divide-border divide-y-hairline border-border">
		{#each data.links as link (link.title)}
			<li>
				<Link {...link} />
			</li>
		{/each}
	</ul>
</div>

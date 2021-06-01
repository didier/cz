<script context="module">
	import { dev } from '$app/env'

	export const prerender = !dev
	export const router = dev
	export const hydrate = dev

	const title = "Didier Catz' Business Card ⇴ didier.cz"
	const description = "Didier Catz' contact details, in the form of easily shareable short links."
	const url = dev ? 'http://localhost:3000' : 'https://didier.cz/'

	export const load = async () => {
		const links = [
			{ href: '/s', title: 'Website' },
			{ href: '/g', title: 'GitHub' },
			{ href: '/i', title: 'Instagram' },
			{ href: '/l', title: 'LinkedIn' },
			{ href: '/d', title: 'Dribbble' },
			{ href: '/r', title: 'Resumé' },
			{ href: '/t', title: 'Twitter' },
			{ href: 'mailto:hello@didiercatz.com', title: 'Contact' }
		]

		return {
			props: {
				links
			}
		}
	}
</script>

<script>
	import Link from '$lib/Link.svelte'
	import SvelteSeo from 'svelte-seo'

	export let links = []
</script>

<SvelteSeo
	{title}
	{description}
	canonical={url}
	openGraph={{
		title,
		description,
		url,
		images: [{ url: `${url}/meta.png` }],
		type: 'website'
	}}
	twitter={{
		title,
		description,
		image: `${url}/meta.png`
	}}
/>
<header>
	<div>
		<img
			class="rounded-full object-cover w-24 h-24 border-gray-100 border-2 mb-4"
			src="/me.jpg"
			alt="Didier Catz"
		/>
		<h1>Didier Catz</h1>
		<h2 class="text-gray-500">Technical Designer</h2>
		<h3>Co-Founder, <a href="https://stypt.nl">Stypt</a></h3>
	</div>
</header>
<main class="grid gap-8">
	<p>
		Didier Catz is a technical designer and developer with 7+ years of experience creating
		interactive digital experiences and products.
	</p>
	<p>You can find his contact details below, in the form of easily shareable shortlinks.</p>
	<ul class="grid gap-4">
		{#each links as link}
			<li>
				<Link {...link} />
			</li>
		{/each}
	</ul>
</main>
<footer class="text-gray-500 flex justify-end">
	<p>&copy; Didier Catz, {new Date().getFullYear()}</p>
	<!-- <img src="/qr.svg" alt="Scan this QR code to share this business card." /> -->
</footer>

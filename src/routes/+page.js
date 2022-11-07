import { dev } from '$app/environment'

export const csr = dev
export const prerender = !dev

const title = 'Didier Catz — Business Card'
const description = 'My contact details, in the form of easily shareable short links.'

const links = [
	{ href: '/s', title: 'Portfolio', name: 'didiercatz.com' },
	{ href: '/cv', title: 'Resumé', name: 'read.cv/didier' },
	{ href: '/g', title: 'GitHub', name: '@didier' },
	{ href: '/i', title: 'Instagram', name: '@didiercatz' },
	{ href: '/l', title: 'LinkedIn', name: '@didiercatz' },
	{ href: '/t', title: 'Twitter', name: '@didiercatz' },
	{ href: 'mailto:didier@catz.me', title: 'Contact', name: 'didier@catz.me' }
]

export const load = async ({ url }) => {
	return {
		title,
		description,
		url: url.origin,
		links
	}
}

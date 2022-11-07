import { dev } from '$app/environment'

export const csr = dev
export const prerender = !dev

const title = 'Didier Catz — Business Card'
const description = 'My contact details, in the form of easily shareable short links.'

const links = [
	{ href: '/website', title: 'Portfolio', name: 'didiercatz.com', displayName: 'website' },
	{ href: '/cv', title: 'Resumé', name: 'read.cv/didier' },
	{ href: '/github', title: 'GitHub', name: '@didier' },
	{ href: '/instagram', title: 'Instagram', name: '@didiercatz' },
	{ href: '/linkedin', title: 'LinkedIn', name: '@didiercatz' },
	{ href: '/twitter', title: 'Twitter', name: '@didiercatz' },
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

import { dev } from '$app/environment'
import type { PageLoad } from './$types'

export const csr = dev
export const prerender = true

const title = 'Didier Catz, Design Engineer'
const description = 'My contact details, in the form of easily shareable short links.'

const links = [
	{ href: '/website', title: 'Portfolio', name: 'didiercatz.com' },
	// { href: '/cv', title: 'Resumé', name: 'read.cv/didier' },
	// { href: '/github', title: 'GitHub', name: '@didier' },
	{ href: '/instagram', title: 'Instagram', name: '@didiercatz' },
	{ href: '/linkedin', title: 'LinkedIn', name: '@didiercatz' },
	{ href: '/twitter', title: 'Twitter', name: '@didiercatz' },
	{ href: 'mailto:didier@catz.me', title: 'Contact', name: 'didier@catz.me' }
]

export const load: PageLoad = async () => {
	return {
		title,
		description,
		links
	}
}

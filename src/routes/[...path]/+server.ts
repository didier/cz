import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

type Target = string | ((rest: string) => string)

const shortLinks: Record<string, Target> = {
	'g github': (rest) => `https://github.com/didier/${rest}`,
	't twitter': 'https://twitter.com/didiercatz',
	'i instagram': 'https://instagram.com/didiercatz',
	'l linkedin': 'https://linkedin.com/in/didiercatz',
	's website portfolio': 'https://didiercatz.com',
	'w work': 'https://didiercatz.com/work',
	writing: 'https://didiercatz.com/writing',
	uses: 'https://didiercatz.com/uses',
	about: 'https://didiercatz.com#about',
	'r cv resume': 'https://read.cv/didier',
	'c mail email contact': 'mailto:info@didiercatz.com',
	f: 'https://foundation.app/@didier'
}

const targets = new Map<string, Target>(
	Object.entries(shortLinks).flatMap(([aliases, target]) =>
		aliases.split(' ').map((alias) => [alias, target] as const)
	)
)

export const GET: RequestHandler = ({ params }) => {
	const [key, rest = ''] = params.path.split('/')
	const target = targets.get(key)

	if (!target) redirect(307, '/')

	redirect(307, typeof target === 'function' ? target(rest) : target)
}

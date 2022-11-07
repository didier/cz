import { redirect } from '@sveltejs/kit'

export function GET({ params }) {
	const { path } = params
	const [key, parameters = ''] = path.split('/')

	switch (key) {
		case 'g':
		case 'github':
			throw redirect(307, `https://github.com/didier/${parameters}`)

		case 't':
		case 'twitter':
			throw redirect(307, 'https://twitter.com/didiercatz')

		case 's':
		case 'website':
		case 'portfolio':
			throw redirect(307, 'https://didiercatz.com')

		case 'writing':
			throw redirect(307, 'https://didiercatz.com/writing')
		case 'w':
		case 'work':
			throw redirect(307, 'https://didiercatz.com/work')
		case 'uses':
			throw redirect(307, 'https://didiercatz.com/uses')
		case 'about':
			throw redirect(307, 'https://didiercatz.com#about')

		case 'l':
		case 'linkedin':
			throw redirect(307, 'https://linkedin.com/in/didiercatz')

		case 'i':
			throw redirect(307, 'https://instagram.com/didiercatz')

		case 'mail':
		case 'email':
		case 'contact':
		case 'c':
			throw redirect(307, 'mailto:info@didiercatz.com')

		case 'cv':
		case 'resume':
		case 'r':
			throw redirect(307, 'https://read.cv/didier')
		case 'f':
			throw redirect(307, 'https://foundation.app/@didier')

		default:
			throw redirect(307, '/')
	}
}

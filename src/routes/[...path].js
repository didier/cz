function redirect(location, status = 301) {
	return {
		status,
		headers: {
			Location: location
		},
		body: {}
	}
}

export function get({ params }) {
	const { path } = params
	const [key, parameters = ''] = path.split('/')

	switch (key) {
		case 'g':
		case 'github':
			return redirect(`https://github.com/didier/${parameters}`)

		case 't':
		case 'twitter':
			return redirect(`https://twitter.com/didiercatz`)

		case 's':
		case 'website':
		case 'portfolio':
			return redirect(`https://didiercatz.com`)

		case 'writing':
			return redirect(`https://didiercatz.com/writing`)
		case 'work':
			return redirect(`https://didiercatz.com/work`)
		case 'uses':
			return redirect(`https://didiercatz.com/uses`)
		case 'about':
			return redirect(`https://didiercatz.com#about`)

		case 'l':
		case 'linkedin':
			return redirect(`https://linkedin.com/in/didiercatz`)

		case 'i':
			return redirect(`https://instagram.com/didiercatz`)

		case 'mail':
		case 'email':
		case 'contact':
		case 'c':
			return redirect(`mailto:info@didiercatz.com`)

		case 'cv':
		case 'resume':
		case 'r':
			return redirect(`https://read.cv/didier`)

		case 'bee.js':
			return redirect(`https://cdn.splitbee.io/sb.js`, 200)
		case '_hive':
			return redirect(`https://hive.splitbee.io/${parameters}`, 200)

		default:
			return redirect(`/`)
	}
}

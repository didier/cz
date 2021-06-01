import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			defaults: {
				style: 'postcss'
			}
		})
	],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body'
	}
}

export default config

const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	darkMode: 'media', // or 'media' or 'class'
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				orange: '#F2994A'
			}
		}
	},
	plugins: []
}

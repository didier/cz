const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'media', // or 'media' or 'class'
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
				orange: '#F2994A'
			}
		}
	},
	plugins: []
}


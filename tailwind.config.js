/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				'background': '#1e1e1e',
				blue: '#007aff',
				disable: '#2e2f30',
			}
		},
	},
	plugins: [],
}

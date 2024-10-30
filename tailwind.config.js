/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#141414',
				blue: '#007aff',
				disable: '#2e2f30',
				success: '#30d158',
				orange: '#ff9f0a',
				red: '#ff453a',
			},
			backgroundImage: {
				right: 'url("./assets/icons/right.svg")',
				solana: 'url("./assets/icons/solana.svg")',
				'arrow-success': 'url("./assets/icons/arrow-success.svg")',
				'arrow-red': 'url("./assets/icons/arrow-red.svg")',
				notification: 'url("./assets/icons/notification.svg")',
			}
		},
	},
	plugins: [],
}

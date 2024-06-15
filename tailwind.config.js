/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blessed-blue': '#273375'
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [],
};

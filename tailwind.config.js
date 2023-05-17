/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/application/**/*.{vue,js,jsx,tsx}'],
	darkMode: 'Media',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1280px',
			xl: '1420px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#583D12',
					light: '#C39F6F'
				},
				secondary: {
					DEFAULT: '#169152',
					'30': '#16915260'
				},
				light: '#FFFFFF',
				dark: '#1A0A06'
			}
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		}
	},
	plugins: [],
}

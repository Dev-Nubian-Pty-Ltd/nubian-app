/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js, jsx}'],
	theme: {
		extend: {
			variants: {
				width: ['responsive', 'hover', 'focus'],
			},
			fontFamily: {
				sans: ['Rubik'],
				rubik: ['Rubik'],
				apercu: ['Apercu'],
			},
			fontWeight: {
				book: 300,
				normal: 400,
				medium: 500,
				bold: 600,
			},
			colors: {
				'secondary-text': 'rgb(98, 110, 153)',
				'primary-text': 'rgb(136, 136, 136)',
				brand: {
					DEFAULT: '#6DD4A3',
					dark: '#679C81',
					light: '#D9EDDF',
					light: '#EEFDF4',
				},
				base: {
					DEFAULT: 'rgb(247 248 252)',
					dark: '#090e24',
					light: 'rgba(232,235,255,1)',
					border: 'rgb(208, 212, 224)',
				},
				primary: {
					DEFAULT: '#7B68EE',
					dark: '#000372',
					light: '#E3C5FF',
					lightest: '#EFD0FF',
				},
				info: {
					DEFAULT: '#695CFF',
					dark: '#311FFF',
					light: '#C7C2FF',
					lightest: '#ECEBFF',
				},
				danger: {
					DEFAULT: '#FB607F',
					dark: '#FA385F',
					light: '#FC9CAF',
					lightest: '#FEEBEF',
				},
				success: {
					DEFAULT: '#91C7B1',
					dark: '#52A382',
					light: '#C9E4D9',
					lightest: '#F1F8F5',
				},
				warning: {
					DEFAULT: '#FCC200',
					dark: '#FF9900',
					light: '#E0AC00',
					lightest: '#FBBC05',
				},
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};

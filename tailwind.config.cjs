/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['**/*.{html, jsx, tsx}'],
	theme: {
		extend: {
			variants: {
				width: ['responsive', 'hover', 'focus'],
			},
			fontFamily: {
				helvetica: ['Helvetica'],
				avenir: ['Avenir'],
				inter: ['Inter'],
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
				'base-primary': {
					DEFAULT: 'rgb(248, 249, 251)',
					dark: '#090e24',
					light: 'rgba(232,235,255,1)',
					lightest: 'rgb(240, 242, 247)',
					border: 'rgb(208, 212, 224)',
				},
				brand: {
					DEFAULT: '#6DD4A3',
					dark: '#679C81',
					light: '#D9EDDF',
					light: '#EEFDF4',
				},
				primary: {
					DEFAULT: 'rgb(76, 74, 206)',
					dark: '#000372',
					light: 'rgb(231, 229, 255)',
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
			keyframes: {
				'slide-left': {
					'0%': { width: '275px' },
					'85%': { width: '20px', opacity: 0.25 },
					'100%': { width: '0%', opacity: 0 },
				},
				'slide-right': {
					'0%': { width: '0%', opacity: 0 },
					'85%': { width: '261px', opacity: 0.25 },
					'100%': { width: '275px' },
				},
			},
			animation: {
				'slide-left': 'slide-left 300ms ease-in-out forwards',
				'slide-right': 'slide-right 300ms ease-in-out forwards',
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

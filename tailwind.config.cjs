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
        modalBg: 'rgba(0, 0, 0, 0)',
        modalBgLight: 'rgba(0, 0, 0, 0.8)',
        secondary: {
          DEFAULT: 'rgb(136, 136, 136)',
        },
        primary: {
          DEFAULT: 'rgb(98, 110, 153)',
          dark: 'rgb(25 103 210)',
          light: 'rgb(213 227 253)',
          lightest: 'rgb(240 246 253)',
        },
        'base-primary': {
          DEFAULT: 'rgb(248, 249, 251)',
          dark: 'rgb(22, 27, 34)',
          light: 'rgb(210, 208, 210)',
          lightest: 'rgb(240, 242, 247)',
          border: 'rgb(208, 212, 224)',
        },
        brand: {
          DEFAULT: '#6DD4A3',
          dark: '#679C81',
          light: '#D9EDDF',
          light: '#EEFDF4',
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
        fadeIn: {
          '0%': { background: 'rgba(0, 0, 0, 0)' },
          '100%': { background: 'rgba(0, 0, 0, 0.7)' },
        },
        fadeOut: {
          '0%': { background: 'rgba(0, 0, 0, 0.7)' },
          '100%': { background: 'rgba(0, 0, 0, 0)' },
        },
        scaleUp: {
          '0%': { opacity: 0, transform: 'scale(0.8) translateY(1000px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0px)' },
        },
        scaleDown: {
          '0%': { opacity: 1, transform: 'scale(1) translateY(0px)' },
          '100%': { opacity: 0, transform: 'scale(0.8) translateY(1000px)' },
        },
        scaleBack: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.85)' },
        },
        scaleForward: {
          '0%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        quickScaleDown: {
          '0%': { transform: 'scale(1)' },
          '99.9%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 },
        },
        slideAwayFromRight: {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
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
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        fadeOut: 'fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        scaleUp: 'scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        scaleBack: 'scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        scaleDown: 'scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        scaleForward: 'scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        quickScaleDown: 'quickScaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        slideFromRight: 'slideFromRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        slideAwayFromRight: 'slideAwayFromRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
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

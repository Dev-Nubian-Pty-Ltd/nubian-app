import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@root', replacement: path.resolve(__dirname, 'src') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@components', replacement: path.resolve(__dirname, 'src/components') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
		],
	},
	css: {
		postcss: {
			plugins: [autoprefixer, tailwindcss],
		},
	},
});

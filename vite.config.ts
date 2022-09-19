import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';

const pathSrc = path.resolve(__dirname, './src');

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@root', replacement: path.resolve(__dirname, 'src') },
			{ find: '@components', replacement: path.resolve(__dirname, 'src/components') },
		],
	},
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
		preprocessorOptions: {
			css: { additionalData: `@import "${pathSrc}/assets/scss/index.scss";` },
		},
	},
});

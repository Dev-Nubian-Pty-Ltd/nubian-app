const tailwindcss = require('tailwindcss');
module.exports = {
	plugins: [
		tailwindcss('tailwind.config.js'),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production'
			? [
					'@fullhuman/postcss-purgecss',
					{
						content: ['./pages/**/*.{js,jsx,ts,tsx}', './modules/components/**/*.{js,jsx,ts,tsx}'],
						defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
					},
			  ]
			: undefined,
		'postcss-preset-env',
	],
};

module.exports = {
	content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
}

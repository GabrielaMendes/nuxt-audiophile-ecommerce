/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			body: ["Manrope", "sans-serif"],
		},
		fontSize: {
			xs: [
				"0.8125rem",
				{
					lineHeight: "1.5625rem",
					letterSpacing: "1px",
					fontWeight: "700",
				},
			],
			sm: [
				"0.875rem",
				{
					lineHeight: "1.1875rem",
					letterSpacing: "10px",
					fontWeight: "400",
				},
			],
			base: [
				"0.9375rem",
				{
					lineHeight: "1.5625rem",
					fontWeight: "500",
				},
			],
			lg: [
				"1.125rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "1.3px",
					fontWeight: "700",
				},
			],
			xl: [
				"1.5rem",
				{
					lineHeight: "2.0625rem",
					letterSpacing: "1.7px",
					fontWeight: "700",
				},
			],
			"2xl": [
				"1.75rem",
				{
					lineHeight: "2.325rem",
					letterSpacing: "1.5px",
					fontWeight: "700",
				},
			],
			"3xl": [
				"2rem",
				{
					lineHeight: "2.25rem",
					letterSpacing: "1.15px",
					fontWeight: "700",
				},
			],
			"4xl": [
				"2.5rem",
				{
					lineHeight: "2.75rem",
					letterSpacing: "1.5px",
					fontWeight: "700",
				},
			],
			"5xl": [
				"3.5rem",
				{
					lineHeight: "3.625rem",
					letterSpacing: "2px",
					fontWeight: "700",
				},
			],
			"6xl": [
				"4.5rem",
				{
					lineHeight: "3.625rem",
					letterSpacing: "2px",
					fontWeight: "700",
				},
			],
		},
		extend: {
			colors: {
				terracotta: "#D87D4A",
				"light-salmon": "#FBAF85",
				"off-white": "#FAFAFA",
				"very-light-gray": "#F1F1F1",
				"dark-gray": "#4C4C4C",
				"almost-black": "#101010",
			},
		},
	},
	plugins: [],
};


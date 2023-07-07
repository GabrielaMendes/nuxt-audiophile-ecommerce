// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["/assets/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Manrope: [400, 500, 700],
				},
			},
		],
	],
});

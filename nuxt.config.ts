import { acceptHMRUpdate } from "pinia";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/main.css"],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		//layoutTransition: { name: "page", mode: "out-in" },
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"@nuxt/image-edge",
		"@formkit/nuxt",
		[
			"@pinia/nuxt",
			{
				autoImports: [
					"defineStore",
					"definePiniaStore",
					"storeToRefs",
					"acceptHMRUpdate",
				],
			},
		],
		"@pinia-plugin-persistedstate/nuxt",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Manrope: [400, 500, 700],
				},
			},
		],
	],
	imports: {
		dirs: ["stores"],
	},
});

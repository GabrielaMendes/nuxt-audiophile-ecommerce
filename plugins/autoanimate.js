import { createAutoAnimatePlugin } from "@formkit/addons";
import { plugin, defaultConfig } from "@formkit/vue";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(
		plugin,
		defaultConfig({
			plugins: [
				createAutoAnimatePlugin(
					{
						/* optional AutoAnimate config */
						// default:
						duration: 250,
						easing: "ease-in-out",
						delay: 0,
					},
					{
						/* optional animation targets object */
						// default:
						global: ["outer", "inner", "input"],
						form: ["form"],
						repeater: ["items"],
					}
				),
			],
		})
	);
});

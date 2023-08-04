import autoAnimate from "@formkit/auto-animate";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("auto-animate", autoAnimate);
});

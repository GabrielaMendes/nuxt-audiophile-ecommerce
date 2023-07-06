import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export const useDevice = () => {
	const breakpoints = useBreakpoints(breakpointsTailwind);

	const smAndLarger = breakpoints.greaterOrEqual("sm");
	const lgAndLarger = breakpoints.greaterOrEqual("lg");

	const device = computed(() => {
		if (lgAndLarger.value) {
			return "desktop";
		}

		if (smAndLarger.value) {
			return "tablet";
		}

		return "mobile";
	});

	return { device };
};

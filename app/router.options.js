export default {
	scrollBehavior(to, from) {
		if (from.path === to.path) {
			return {
				top: 0,
				left: 0,
				behavior: "smooth",
			};
		}

		return { top: 0, left: 0 };
	},
};

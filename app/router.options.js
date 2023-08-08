export default {
	scrollBehavior(to, from) {
		if (from.path === to.path) {
			return {
				top: 0,
				left: 0,
				behavior: "smooth",
			};
		}

    const position = {};
    if (to.matched.some((m) => m.meta.scrollToTop)) {
			position.x = 0;
			position.y = 0;
		}

		return position;
	},
};

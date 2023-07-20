export const useScrollStore = defineStore("scroll", () => {
	const scrollLock = ref(false);

	const toggleScrollLock = () => {
		scrollLock.value = !scrollLock.value;
	};

	return { scrollLock, toggleScrollLock };
});

export const useLoadingStore = defineStore("loading", () => {
	const isLoading = ref(false);

	return { isLoading };
});

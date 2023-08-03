<script setup>
const loadingStore = useLoadingStore();
const scrollStore = useScrollStore();
const route = useRoute();

onMounted(() => {
	loadingStore.isLoading = true;
});

watch(
	() => route.fullPath,
	() => {
		loadingStore.isLoading = true;
	}
);

useHead(() => {
	return {
		bodyAttrs: {
			class: scrollStore.scrollLock ? "overflow-hidden" : "[overflow:overlay]",
		},
	};
});
</script>

<template>
	<div>
		<TheNavbar />

		<div 
      v-if="loadingStore.isLoading"
      class="w-full h-[80svh] flex justify-center items-center"
    >
			<IconLoading class="scale-125 sm:scale-150 lg:scale-250" />
		</div>

		<div v-show="!loadingStore.isLoading">
      <NuxtPage />
      <TheFooter />
    </div>
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	@apply transition-all duration-300 ease-in;
}
.page-enter-from,
.page-leave-to {
	@apply opacity-0 blur-lg;
}
</style>

<script setup>
const scrollStore = useScrollStore();
const { scrollLock } = storeToRefs(scrollStore);

useHead(() => {
	return {
		bodyAttrs: {
			class: scrollLock.value ? "overflow-hidden" : "overflow-auto",
		},
	};
});

</script>

<template>
	<div>
		<TheNavbar />

		<NuxtPage />

		<TheFooter />
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

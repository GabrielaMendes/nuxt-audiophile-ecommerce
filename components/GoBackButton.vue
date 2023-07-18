<script setup>
const router = useRouter();

const goBack = () => {
	if (router.options.history.state.back) {
		router.back();
		return;
	}

	navigateTo("/");
};
</script>

<template>
	<button
		@click="goBack"
		class="relative -top-8 lg:-top-14 opacity-50 hover:opacity-100 hover:text-terracotta transition-all duration-200"
	>
		Go Back
	</button>
</template>

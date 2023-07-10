<script setup>
const error = useError();

const handleError = () => {
	clearError({
		redirect: "/",
	});
};
</script>

<template>
	<div class="content-container flex h-screen justify-center items-center">
		<div class="text-center shadow-sm bg-very-light-gray border-[1px] border-almost-black rounded-md p-8">
      <h1 class="md:text-6xl">{{ error.statusCode }}</h1>
      <p class="mt-7 text-lg mb-6">{{ error.message }}</p>
      <BaseButton
        text="Go Back"
        :black="true"
        @click="handleError"
      />
    </div>
	</div>
</template>   
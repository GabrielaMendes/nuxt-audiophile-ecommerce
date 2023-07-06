<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/">Headphones</NuxtLink>
		<NuxtLink to="/">Speakers</NuxtLink>
		<NuxtLink to="/">Earphones</NuxtLink>
	</nav>
</template>

<style scoped>
a {
	@apply text-xs uppercase hover:text-terracotta transition-colors duration-200;
}
</style>
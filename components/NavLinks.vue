<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/products/headphones">Headphones</NuxtLink>
		<NuxtLink to="/products/speakers">Speakers</NuxtLink>
		<NuxtLink to="/products/earphones">Earphones</NuxtLink>
	</nav>
</template>

<style scoped>
a {
	@apply text-xs uppercase hover:text-terracotta transition-colors duration-200 focus-visible:ring-offset-almost-black;
}
</style>
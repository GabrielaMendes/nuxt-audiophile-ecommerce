<template>
	<div class="bg-black text-white">
		<div class="content-container py-8 flex gap-10 justify-between">
			<button class="lg:hidden">
				<IconHamburger />
			</button>
			<NuxtLink to="/" class="sm:max-lg:mr-auto">
				<IconLogo />
			</NuxtLink>
			<nav class="flex gap-8 max-lg:hidden">
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/">Headphones</NuxtLink>
				<NuxtLink to="/">Speaker</NuxtLink>
				<NuxtLink to="/">Eaphones</NuxtLink>
			</nav>
			<button>
				<IconCart />
			</button>
		</div>
	</div>
</template>

<style scoped>
a {
	@apply text-xs uppercase hover:text-terracotta transition-colors duration-200;
}
</style>
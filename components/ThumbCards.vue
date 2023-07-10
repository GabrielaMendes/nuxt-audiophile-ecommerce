<script setup>
const thumbs = [
	{
		name: "Headphones",
		image: "/images/shared/desktop/image-category-thumbnail-headphones.png",
	},
	{
		name: "Speakers",
		image: "/images/shared/desktop/image-category-thumbnail-speakers.png",
	},
	{
		name: "Earphones",
		image: "/images/shared/desktop/image-category-thumbnail-earphones.png",
	},
];
</script>

<template>
	<div class="flex max-sm:flex-col gap-14 sm:gap-3 lg:gap-8 w-full">
		<div
			v-for="thumb in thumbs"
			:key="thumb.name"
			@click="navigateTo(`/products/${thumb.name.toLowerCase()}`)"
			class="relative group cursor-pointer bg-very-light-gray pb-6 rounded-md text-center max-sm:even:mt-4 flex-1 motion-safe:md:hover:shadow-md motion-safe:md:hover:scale-[1.03] transition-all duration-500 ease-out"
		>
			<NuxtImg
				:src="thumb.image"
				:alt="`${thumb.name} thumbnail`"
				class="w-44 lg:w-56 mx-auto "
				:class="{
					'-mt-16 lg:-mt-20': thumb.name === 'Headphones',
					'-mt-14 lg:-mt-[4.5rem]': thumb.name === 'Speakers',
					'-mt-10 lg:-mt-16': thumb.name === 'Earphones',
				}"
			/>
			<h6 class="-mt-3 mb-2 max-lg:text-base max-lg:font-bold">{{ thumb.name }}</h6>
			<button class="mx-auto flex items-center transition-all duration-200">
				<span
					class="text-xs opacity-50 group-hover:opacity-100 group-hover:text-terracotta font-normal uppercase mr-3"
					>Shop</span
				>
				<IconArrow />
			</button>
		</div>
	</div>
</template>

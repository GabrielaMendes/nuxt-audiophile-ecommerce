<script setup>
const { toTitleCase } = useUtilities();
const { earphones, headphones, speakers } = useProducts();

const route = useRoute();
const products = route.params.type;

let productList;

switch (products) {
	case "earphones":
		productList = earphones;
		break;

	case "headphones":
		productList = headphones;
		break;

	case "speakers":
		productList = speakers;
		break;

	default:
		throw new Error(`${toTitleCase(products)} products not found`);
}

const { device } = useDevice();

useHead({
	title: `${toTitleCase(products)} | audiophile`,
});
</script>

<template>
	<NuxtLayout>
		<template #header>
			<div class="header bg-almost-black text-center py-10 sm:py-24 lg:py-28">
				<h2 class="text-white max-sm:text-2xl">
					{{ toTitleCase(products) }}
				</h2>
			</div>
		</template>

		<template #content>
			<section
				v-for="product in productList"
				:key="product.id"
				class="flex flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-between gap-8 sm:gap-14 lg:gap-28 first:max-sm:mt-16"
			>
				<img
					:src="product.images[device].preview"
					alt="Product preview picture"
					class="lg:max-w-[33.75rem] rounded-md"
				/>
				<div
					class="max-lg:text-center flex flex-col items-center lg:items-start sm:max-lg:px-16"
				>
					<h6 v-if="product.new" class="overline-style mb-4">New Product</h6>
					<h2 class="mb-6 max-w-[25rem] max-sm:text-2xl">
            {{ product.name }}
          </h2>
					<p class="mb-8">{{ product.description }}</p>
					<BaseButton />
				</div>
			</section>

			<section class="pt-24 lg:pt-14">
				<ThumbCards />
			</section>
		</template>
	</NuxtLayout>
</template>

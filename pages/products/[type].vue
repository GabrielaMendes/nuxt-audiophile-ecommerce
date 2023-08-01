<script setup>
const { device } = useDevice();
const { toTitleCase } = useUtilities();

const route = useRoute();
const category = route.params.type.toLowerCase();

const { data: productList } = await useFetch(`/api/prisma/get-all-products`);

productList.value = productList.value.filter((product) => {
	return product.category.toLowerCase() === category;
});

if (productList.value.length === 0) {
	throw createError({
		statusCode: 404,
		message: `${toTitleCase(category)} products not found`,
	});
}

const config = useRuntimeConfig();
const previewBaseUrl = `${config.public.supabase.url}/storage/v1/object/public/products-images`;

useHead({
	title: `${toTitleCase(category)} | audiophile`,
});
</script>

<template>
	<div>
		<NuxtLayout name="products">
			<template #header>
				<div class="header bg-almost-black text-center py-10 sm:py-24 lg:py-28">
					<h2 class="text-white max-sm:text-2xl">
						{{ toTitleCase(category) }}
					</h2>
				</div>
			</template>
			<template #content>
				<section
					v-for="product in productList"
					:key="product.id"
					class="flex flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-between gap-8 sm:gap-14 lg:gap-28 first:max-sm:mt-16"
				>
					<NuxtImg
						:src="`${previewBaseUrl}/${product.images}/${device}/image-category-page-preview.jpg`"
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
						<BaseButton
							@click="navigateTo(`/buy/${product.name}-${product.id}`)"
						/>
					</div>
				</section>
			</template>
		</NuxtLayout>
	</div>
</template>

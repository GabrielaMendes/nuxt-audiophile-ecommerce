<script setup>
const { toTitleCase } = useUtilities();
const { products } = useProducts();

const route = useRoute();
const category = route.params.type;

const productList = products.filter(product => {
  return product.category === category;
})

if (productList.length === 0) {
		throw createError({
      statusCode: 404,
      message:`${toTitleCase(category)} products not found`,
    });
}

const { device } = useDevice();

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
      </template>
    </NuxtLayout>
  </div>
</template>

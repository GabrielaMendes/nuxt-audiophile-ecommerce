<script setup>
const { device } = useDevice();

const { products } = useProducts();
const route = useRoute();

const product = products.find((product) => {
	return product.id === parseInt(route.params.id);
});

const number = ref(null);

useHead({
	title: `${route.params.name} | audiophile`,
});
</script>

<template>
	<div>
		<NuxtLayout name="products">
			<template #content>
				<!-- Product -->
				<section>
					<div
						class="flex max-sm:flex-col max-sm:items-start items-center justify-between gap-8 md:gap-20 lg:gap-28"
					>
						<NuxtImg
							:src="product.images[device].product"
							alt="Product picture"
							class="flex-1 w-full max-w-full sm:min-w-[17rem] sm:w-6 lg:min-w-[29rem] lg:w-[33.75rem] rounded-md"
						/>

						<div class="flex-1 flex flex-col items-start">
							<h6 v-if="product.new" class="overline-style mb-4">
								New Product
							</h6>
							<h2 class="mb-8 max-w-[25rem] max-sm:text-2xl">
								{{ product.name }}
							</h2>
							<p class="mb-8">{{ product.description }}</p>
							<h6 class="mb-8">$ {{ product.price.toLocaleString() }}</h6>
							<div class="flex gap-6">
								<div class="bg-very-light-gray">
									<button class="number-button">-</button>
									<input
										ref="number"
										type="number"
										min="1"
										max="10"
										step="1"
										value="1"
										class="h-full w-8 text-center bg-very-light-gray"
									/>
									<button class="number-button">+</button>
								</div>
								<BaseButton text="add to cart" />
							</div>
						</div>
					</div>
				</section>

				<!-- Features and Box Content -->
				<section></section>

				<!-- Gallery -->
				<section class="flex max-sm:flex-col gap-6">
					<div class="flex flex-col gap-6">
						<NuxtImg
							:src="product.images[device].gallery1"
							alt="Product gallery picture"
							class="h-full w-full overflow-hidden rounded-md"
						/>
						<NuxtImg
							:src="product.images[device].gallery2"
							alt="Product gallery picture"
							class="h-full w-full overflow-hidden rounded-md"
						/>
					</div>
					<div>
						<NuxtImg
							:src="product.images[device].gallery3"
							alt="Product gallery picture"
							class="h-full w-full overflow-hidden rounded-md"
						/>
					</div>
				</section>

				<!-- You May Also Like -->
				<RecomendationCards :currentProductId="product.id" />
			</template>
		</NuxtLayout>
	</div>
</template>

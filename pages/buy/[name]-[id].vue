<script setup>
const route = useRoute();
const { data: product } = await useFetchProduct(route.params.id);

const loadingStore = useLoadingStore();
setTimeout(() => (loadingStore.isLoading = false), 300);

const { device } = useDevice();
const { addItem } = useCartStore();

const config = useRuntimeConfig();

const confirmMessage = ref(false);
const maxMessage = ref(false);

if (product.value.name !== route.params.name) {
	navigateTo(`buy/${product.value.name}-${product.value.id}`);
}

const productImgUrl = computed(() => {
	return `${config.public.supabase.url}/storage/v1/object/public/products-images/${product.value.images}/${device.value}`;
});

const loadingImg = ref(true);
const onImgLoad = () => {
	loadingImg.value = false;
};

const number = ref(1);
const increment = () => {
	if (number.value < 10) {
		number.value += 1;
	}
};
const decrement = () => {
	if (number.value > 1) {
		number.value -= 1;
	}
};

watch(number, (newValue) => {
	if (newValue > 10) {
		number.value = 10;
	}
});

const addToCart = () => {
	const success = addItem(product.value, number.value);

	if (success) {
		confirmMessage.value = true;
		maxMessage.value = false;
		number.value = 1;
		setTimeout(() => {
			confirmMessage.value = false;
		}, 3000);
		return;
	}

	maxMessage.value = true;
	confirmMessage.value = false;
	setTimeout(() => {
		maxMessage.value = false;
	}, 3000);
};

useHead({
	title: `${route.params.name} | audiophile`,
});

definePageMeta({
	scrollToTop: true,
});
</script>

<template>
	<div>
		<NuxtLayout name="products">
			<template #content>
				<!-- Product -->
				<section class="max-sm:mt-14 sm:max-lg:mt-16">
					<GoBackButton />

					<div
						class="flex max-sm:flex-col max-sm:items-start items-center justify-between gap-8 md:gap-20 lg:gap-28"
					>
						<div
							v-if="loadingImg"
							class="flex items-center justify-center flex-1 w-full max-w-full h-[310px] sm:min-w-[17rem] sm:w-6 lg:min-w-[29rem] lg:w-[33.75rem] rounded-md bg-very-light-gray"
						>
							<IconLoading />
						</div>

						<transition name="fade">
							<NuxtImg
								v-show="!loadingImg"
								:src="`${productImgUrl}/image-product.jpg`"
								alt="Product picture"
								class="flex-1 w-full max-w-full sm:min-w-[17rem] sm:w-6 lg:min-w-[29rem] lg:w-[33.75rem] rounded-md"
								@load="onImgLoad"
							/>
						</transition>

						<div class="relative flex-1 flex flex-col items-start">
							<h6 v-if="product.new" class="overline-style mb-4">
								New Product
							</h6>
							<h2 class="mb-8 max-w-[25rem] max-sm:text-2xl">
								{{ product.name }}
							</h2>
							<p class="mb-8">{{ product.description }}</p>
							<h6 class="mb-8">$ {{ product.price.toLocaleString() }}</h6>
							<div class="flex gap-6 z-10">
								<div class="bg-very-light-gray shrink-0">
									<button @click="decrement" class="number-button">-</button>
									<input
										v-model="number"
										type="number"
										min="1"
										max="10"
										step="1"
										v-maska
										data-maska="#0"
										@blur="number ? '' : (number = 1)"
										class="h-full w-8 text-center bg-very-light-gray"
									/>
									<button @click="increment" class="number-button">+</button>
								</div>

								<BaseButton
									:disabled="number < 1 || number > 10"
									text="add to cart"
									@click="addToCart"
								/>
							</div>

							<BaseMessageTransition>
								<div
									v-show="confirmMessage"
									class="absolute -bottom-12 flex items-center gap-2 text-emerald-500 text-[0.875rem] border border-emerald-500 px-2 py-1 rounded z-0"
								>
									<IconCheck />
									Product(s) added to cart
								</div>
							</BaseMessageTransition>
							<BaseMessageTransition>
								<div
									v-show="maxMessage"
									class="absolute -bottom-12 flex items-center gap-2 text-error-red text-[0.875rem] border border-error-red px-2 py-1 rounded"
								>
									<IconCancel />
									Limited to 10 items per client
								</div>
							</BaseMessageTransition>
						</div>
					</div>
				</section>

				<!-- Features and Box Content -->
				<section class="flex max-lg:flex-col gap-28">
					<div class="flex flex-col gap-6 sm:gap-8 lg:max-w-[40rem]">
						<h3 class="max-sm:text-xl">Features</h3>
						<p v-for="(feature, i) in product.features" :key="i">
							{{ feature }}
						</p>
					</div>
					<div
						class="flex flex-col sm:max-lg:flex-row gap-6 sm:gap-8 sm:max-lg:0"
					>
						<h3 class="max-sm:text-xl sm:max-lg:flex-1">In the box</h3>
						<div class="sm:max-lg:flex-1 flex flex-col gap-2">
							<div
								v-for="(number, item, i) in product.box"
								:key="i"
								class="flex gap-4"
							>
								<span class="text-terracotta font-bold"> {{ number }}x </span>
								<p>{{ item }}</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Gallery -->
				<ProductGallery :img-url="productImgUrl" />

				<!-- You May Also Like -->
				<ClientOnly placeholder="Loading...">
					<RecommendationCards :currentProductId="product.id" />
				</ClientOnly>
			</template>
		</NuxtLayout>
	</div>
</template>

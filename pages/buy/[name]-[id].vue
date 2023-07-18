<script setup>
const { device } = useDevice();
const { addItem } = useCartStore();
const confirmMessage = ref(false)

const { products } = useProducts();
const route = useRoute();
const router = useRouter();

const product = products.find((product) => {
	return product.id === parseInt(route.params.id);
});

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

const goBack = () => {
	if (router.options.history.state.back) {
		router.back();
		return;
	}

	navigateTo("/");
};

const addToCart = () => {
  addItem(product, number.value);

  confirmMessage.value = true;
  setTimeout(() => {
    confirmMessage.value = false;
    number.value = 1
  }, 5000)
}

useHead({
	title: `${route.params.name} | audiophile`,
});
</script>

<template>
	<div>
		<NuxtLayout name="products">
			<template #content>
				<!-- Product -->
				<section class="max-sm:mt-14 sm:max-lg:mt-16">
					<button
						@click="goBack"
						class="relative -top-8 lg:-top-14 opacity-50 hover:opacity-100 hover:text-terracotta transition-all duration-200"
					>
						Go Back
					</button>

					<div
						class="flex max-sm:flex-col max-sm:items-start items-center justify-between gap-8 md:gap-20 lg:gap-28"
					>
						<NuxtImg
							:src="product.images[device].product"
							alt="Product picture"
							class="flex-1 w-full max-w-full sm:min-w-[17rem] sm:w-6 lg:min-w-[29rem] lg:w-[33.75rem] rounded-md"
						/>

						<div class="relative flex-1 flex flex-col items-start">
							<h6 v-if="product.new" class="overline-style mb-4">
								New Product
							</h6>
							<h2 class="mb-8 max-w-[25rem] max-sm:text-2xl">
								{{ product.name }}
							</h2>
							<p class="mb-8">{{ product.description }}</p>
							<h6 class="mb-8">$ {{ product.price.toLocaleString() }}</h6>
							<div class="flex gap-6">
								<div class="bg-very-light-gray shrink-0">
									<button @click="decrement" class="number-button">-</button>
									<input
										v-model="number"
										type="number"
										min="1"
										max="10"
										step="1"
										class="h-full w-8 text-center bg-very-light-gray"
									/>
									<button @click="increment" class="number-button">+</button>
								</div>
								
                <BaseButton :disabled="number < 1 || number > 10" text="add to cart" @click="addToCart" />
							</div>

              <transition
                enter-from-class="opacity-0 -translate-y-full"
                leave-to-class="opacity-0 -translate-y-full"
                enter-active-class="transition-all duration-300"
                leave-active-class="transition-all duration-300"
              >
                <div v-show="confirmMessage" class="absolute -bottom-8 flex items-center gap-2 text-emerald-500 text-[0.875rem]">
                  <IconCheck />
                  Product(s) added to cart
                </div>
              </transition>
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
					<div class="flex flex-col sm:max-lg:flex-row gap-6 sm:gap-8 sm:max-lg:0">
						<h3 class="max-sm:text-xl sm:max-lg:flex-1">In the box</h3>
						<div class="sm:max-lg:flex-1 flex flex-col gap-2">
							<div
								v-for="(number, item, i) in product.box"
								:key="i"
								class="flex gap-4"
							>
								<span class="text-terracotta font-bold">
                  {{ number }}x
                </span>
								<p>{{ item }}</p>
							</div>
						</div>
					</div>
				</section>

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
				<ClientOnly placeholder="Loading...">
          <RecomendationCards :currentProductId="product.id" />
        </ClientOnly>
      </template>
		</NuxtLayout>
	</div>
</template>

<script setup>
const { device } = useDevice();
const { getMultipleRandom } = useUtilities();

const props = defineProps({
	currentProductId: Number,
});

const { data: products } = await useFetch(`/api/prisma/get-all-products`);

const recomendedProducts = getMultipleRandom(
	products.value.filter((product) => {
		return (
			product.id !== props.currentProductId
		);
	}),
	3
);

const config = useRuntimeConfig();
const imgBaseUrl = `${config.public.supabase.url}/storage/v1/object/public/products-images`;
</script>

<template>
	<section>
		<h3 class="text-center max-sm:text-xl">You may also like</h3>
		<div
			class="text-center mt-10 sm:mt-14 lg:mt-16 flex max-sm:flex-col sm:justify-between gap-14 sm:gap-3 lg:gap-8 w-full"
		>
			<div
				v-for="product in recomendedProducts"
				:key="product.id"
				class="flex-1"
			>
				<NuxtImg
					:src="`${imgBaseUrl}/${product.images}/${device}/image-recommendation.jpg`"
					alt="Product picture"
					class="w-full mx-auto sm:max-w-[18rem] lg:max-w-[22rem] rounded-lg"
				/>
				<h5 class="mt-6 sm:mt-8">
					{{ product.name.replace("Headphones", "").replace("Earphones", "") }}
				</h5>
				<BaseButton
					class="mt-6 sm:mt-8"
					@click="navigateTo(`/buy/${product.name}-${product.id}`)"
				/>
			</div>
		</div>
	</section>
</template>

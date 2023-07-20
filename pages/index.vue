<script setup>
useHead({
	title: "Home | audiophile",
});

const { device } = useDevice();
const { products } = useProducts();

const featured = ["xx99 mark ii", "zx9", "zx7", "yx1"];
const featuredProducts = products.filter((product) => {
	return featured.some((p) =>
		product.name.toLowerCase().includes(p.toLowerCase())
	);
});

const goToProduct = (name) => {
	const product = featuredProducts.find((p) => {
		return p.name.toLowerCase().includes(name.toLowerCase());
	});
  
	navigateTo(`/buy/${product.name}-${product.id}`);
};
</script>

<template>
	<div>
		<NuxtLayout>
			<template #header>
				<div
					class="header bg-almost-black/[.56] bg-no-repeat bg-[length:26rem] sm:bg-[length:45rem] lg:bg-[length:86rem] bg-bottom bg-[url('/images/home/mobile/image-header.jpg')] sm:bg-[url('/images/home/tablet/image-header.jpg')] lg:bg-[url('/images/home/desktop/image-hero.jpg')] bg-blend-difference"
				>
					<div
						class="flex flex-col gap-6 justify-center max-lg:text-center max-lg:items-center max-lg:mx-auto py-32 max-w-[25rem]"
					>
						<p class="text-sm text-white uppercase">New Product</p>
						<h1 class="max-sm:text-4xl">XX99 Mark II Headphones</h1>
						<p class="max-w-[21.75rem]">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<BaseButton class="mt-6" @click="goToProduct('XX99 Mark II')" />
					</div>
				</div>
			</template>
			<template #content>
				<ThumbCards class="mt-44" />
				<section class="flex flex-col gap-7">
					<div
						class="relative px-8 py-16 lg:p-28 max-lg:items-center lg:max-h-[35rem] overflow-hidden bg-terracotta text-white rounded-md w-full flex max-lg:flex-col gap-14 sm:gap-[4.5rem] lg:gap-32 after:circles"
					>
						<NuxtImg
							:src="`/images/home/${device}/image-speaker-zx9.png`"
							alt="Black and white speaker"
							class="w-48 sm:w-52 lg:w-[23.5rem] lg:mt-1 h-full z-10"
						/>
						<div
							class="max-w-[24rem] max-lg:text-center max-lg:mx-auto lg:mt-6 z-10"
						>
							<h1 class="mb-8 sm:mb-6 max-lg:px-6 max-sm:text-4xl">
								ZX9 Speaker
							</h1>
							<p class="white opacity-75 mb-8 sm:mb-10 z-10">
								Upgrade to premium speakers that are phenomenally built to
								deliver truly remarkable sound. See product
							</p>
							<BaseButton :black="true" @click="goToProduct('ZX9')" />
						</div>
					</div>
					<div
						class="rounded-md w-full h-80 px-8 sm:px-24 flex flex-col justify-center bg-cover bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/images/home/desktop/image-speaker-zx7.jpg')]"
					>
						<h4 class="mb-6">ZX7 Speaker</h4>
						<BaseButton :filled="false" @click="goToProduct('ZX7')" />
					</div>
					<div
						class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-7 sm:gap-2 lg:gap-4"
					>
						<NuxtImg
							:src="`/images/home/${device}/image-earphones-yx1.jpg`"
							alt="Black earphones picture"
							class="rounded-md w-full h-[12.5rem] object-cover flex-1 sm:h-80"
						/>
						<div
							class="px-8 sm:px-10 bg-very-light-gray rounded-md flex-1 flex flex-col justify-center h-[12.5rem] sm:h-80"
						>
							<h4 class="mb-6">YX1 Earphones</h4>
							<BaseButton :filled="false" @click="goToProduct('YX1')" />
						</div>
					</div>
				</section>
			</template>
		</NuxtLayout>
	</div>
</template>

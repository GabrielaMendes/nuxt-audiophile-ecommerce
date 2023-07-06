<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

useHead({
	title: "Home | audiophile",
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanSm = breakpoints.smaller("sm");
</script>

<template>
	<NuxtLayout>
		<template #header>
			<div
				class="header bg-almost-black/[.56] bg-no-repeat bg-[length:26rem] sm:bg-[length:45rem] lg:bg-[length:86rem] bg-bottom bg-[url('/images/home/mobile/image-header.jpg')] sm:bg-[url('/images/home/tablet/image-header.jpg')] lg:bg-[url('/images/home/desktop/image-hero.jpg')] bg-blend-difference"
			>
				<div
					class="flex flex-col gap-6 justify-center max-lg:text-center max-lg:items-center max-lg:mx-auto py-32 max-w-[25rem]"
				>
					<p class="text-sm text-white uppercase">New Product</p>
					<component :is="smallerThanSm ? 'h3' : 'h1'"
						>XX99 Mark II Headphones</component
					>
					<p class="max-w-[21.75rem]">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>

					<BaseButton class="mt-6" />
				</div>
			</div>
		</template>

		<template #content>
			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
				aperiam.
			</div>
		</template>
	</NuxtLayout>
</template>

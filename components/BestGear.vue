<script setup>
import { useMotion } from "@vueuse/motion";

const props = defineProps({
	animationDisabled: {
		type: Boolean,
		default: false,
	},
});

const { device } = useDevice();

const text = ref(null);
const image = ref(null);

onMounted(() => {
	if (!props.animationDisabled) {
		useMotion(text, {
			initial: {
				opacity: 0,
				x: device === "mobile" ? -100 : -150,
			},
			visibleOnce: {
				opacity: 1,
				x: 0,
				transition: {
          delay: 200,
					duration: 400,
					type: "keyframes",
					ease: "linear",
				},
			},
		});
    
		useMotion(image, {
			initial: {
				opacity: 0,
				x: device === "mobile" ? 100 : 150,
			},
			visibleOnce: {
				opacity: 1,
				x: 0,
				transition: {
          delay: 200,
					duration: 400,
					type: "keyframes",
					ease: "linear",
				},
			},
		});
	}
});
</script>

<template>
	<section
		class="content-container mb-28 lg:mb-40 flex max-lg:flex-col-reverse items-center overflow-x-hidden"
	>
		<div ref="text" class="flex-1 sm:max-lg:px-16 lg:pr-32 max-lg:text-center">
			<h2 class="mb-8 max-sm:mt-12 sm:max-lg:mt-16">
				Bringing You The <span class="text-terracotta">Best</span> Audio Gear
			</h2>
			<p>
				Located at the heart of New York City, Audiophile is the premier store
				for high end headphones, earphones, speakers, and audio accessories. We
				have a large showroom and luxury demonstration rooms available for you
				to browse and experience a wide range of our products. Stop by our store
				to meet some of the fantastic people who make Audiophile the best place
				to buy your portable audio equipment.
			</p>
		</div>

		<NuxtImg
			ref="image"
			:src="`/images/shared/${device}/image-best-gear.jpg`"
			alt="A guy listening to music in his headphone"
			class="rounded-md flex-1"
		/>
	</section>
</template>

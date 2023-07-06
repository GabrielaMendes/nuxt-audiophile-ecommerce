<script setup>
import { useDevice } from "../composables/useDevice"

const { device } = useDevice()
</script>

<template>
	<section
		class="content-container mb-40 flex max-lg:flex-col-reverse items-center"
	>
		<div class="flex-1 sm:max-lg:px-16 lg:pr-32 max-lg:text-center">
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
		<img
			:src="`/images/shared/${device}/image-best-gear.jpg`"
			alt="A guy listening to music in his headphone"
			class="rounded-md flex-1"
		/>
	</section>
</template>

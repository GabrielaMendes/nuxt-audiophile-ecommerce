<script setup>
defineProps({
	imgUrl: {
		required: true,
		type: String,
	},
});

const { device } = useDevice();
</script>

<template>
	<section class="flex justify-center max-sm:flex-col gap-6">
		<div class="flex flex-col gap-6">
			<NuxtImg
				v-motion
				:initial="{
					opacity: 0,
					x: device === 'mobile' ? -100 : -150,
				}"
				:visibleOnce="{
					opacity: 1,
					x: 0,
					transition: {
						delay: 200,
						duration: 500,
						type: 'keyframes',
						ease: 'linear',
					},
				}"
				:src="`${imgUrl}/image-gallery-1.jpg`"
				alt="Product gallery picture"
				class="h-full w-full overflow-hidden rounded-md"
			/>
			<NuxtImg
				v-motion
				:initial="{
					opacity: 0,
					x: device === 'mobile' ? -100 : -150,
				}"
				:visibleOnce="{
					opacity: 1,
					x: 0,
					transition: {
						delay: 300,
						duration: 500,
						type: 'keyframes',
						ease: 'linear',
					},
				}"
				:src="`${imgUrl}/image-gallery-2.jpg`"
				alt="Product gallery picture"
				class="h-full w-full overflow-hidden rounded-md"
			/>
		</div>

		<div
			v-motion
			:initial="{
				opacity: 0,
				x: device === 'mobile' ? 100 : 150,
			}"
			:visibleOnce="{
				opacity: 1,
				x: 0,
				transition: {
					delay: device === 'mobile' ? 300 : 400,
					duration: 500,
					type: 'keyframes',
					ease: 'linear',
				},
			}"
		>
			<NuxtImg
				:src="`${imgUrl}/image-gallery-3.jpg`"
				alt="Product gallery picture"
				class="h-full w-full overflow-hidden rounded-md"
			/>
		</div>
	</section>
</template>

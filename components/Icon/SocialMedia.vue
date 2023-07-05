<script setup>
defineProps({
  iconHeight: String,
  iconPath: String,
})

const isHovering = ref(false);
</script>

<template>
  <svg
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
		width="24"
		:height="iconHeight"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="transition-colors duration-200 ease-linear"
			:class="isHovering ? 'fill-terracotta' : 'fill-white'"
			:d="iconPath"
			fill-rule="nonzero"
		/>
	</svg>
</template>
<script setup>
defineProps({
  iconHeight: String,
  iconPath: String,
})
</script>

<template>
  <svg
    class="group"
		width="24"
		:height="iconHeight"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="fill-white group-hover:fill-terracotta transition-colors duration-200 ease-linear"
			:d="iconPath"
			fill-rule="nonzero"
		/>
	</svg>
</template>
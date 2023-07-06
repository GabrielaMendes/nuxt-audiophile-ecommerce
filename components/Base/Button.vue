<script setup>
	defineProps({
		filled: {
      type: Boolean,
      default: true,
    },
		black: {
      type: Boolean,
      default: false,
    },
		text: {
      type: String,
      default: "See Product",
    }
	})
</script>

<template>
	<button
		class="w-40 p-3 text-xs uppercase transition-colors duration-200"
		:class="{
      'bg-almost-black text-white hover:bg-dark-gray': filled && black,
      'bg-terracotta text-white hover:bg-light-salmon': filled && !black,
      'border-[1px] border-almost-black hover:bg-almost-black text-white': !filled,
    }"
	>
		{{ text }}
	</button>
</template>

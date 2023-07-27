<script setup>
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["update:modelValue"])

const writeableComputed = computed({
  get() {
    return props.modelValue;
  },
  set(valueProp) {
    emit("update:modelValue", valueProp);
  }
})
</script>

<template>
	<div class="relative">
		<input
			type="checkbox"
			v-model="writeableComputed"
			id="toggle"
			class="hidden peer"
		/>
		<label
			for="toggle"
			class="cursor-pointer w-4 h-[3px] absolute bg-white transition-colors duration-300 peer-checked:bg-almost-black before:hamburger-bar before:hamburger-before peer-checked:before:rotate-z-41 peer-checked:before:w-[1.2rem] after:hamburger-bar after:hamburger-after peer-checked:after:-rotate-z-41  peer-checked:after:w-[1.2rem]"
		></label>
	</div>
</template>

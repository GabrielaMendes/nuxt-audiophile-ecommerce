<script setup>
const props = defineProps({
	item: Object,
	summary: {
		type: Boolean,
		default: false,
	},
});

const { addItem, removeItem, updateQty } = useCartStore();

const { item } = toRefs(props);
const number = ref(item.value.qty);
watch(number, (newValue) => {
	if (newValue > 10) {
		number.value = 10;
	}
});

const updateCartItem = () => {
	if ((number.value === "")) {
		number.value = 1;
	}

	updateQty(item.value.id, number.value);
};

const config = useRuntimeConfig();
const cartImgUrl = `${config.public.supabase.url}/storage/v1/object/public/products-images/${props.item.images}/image-cart.jpg`;
</script>

<template>
	<div class="items-center justify-between" :class="{ flex: !summary }">
		<div class="flex items-center gap-4">
			<NuxtImg
				:src="cartImgUrl"
				alt="Product picture"
				class="w-16 rounded-lg"
			/>
			<div class="font-bold flex w-full">
				<div>
					<div>
						{{
							item.name
								.replace("Headphones", "")
								.replace("Earphones", "")
								.replace("Speaker", "")
								.replace("Wireless", "")
								.replace("Mark", "MK")
						}}
					</div>
					<p>$ {{ item.price.toLocaleString() }}</p>
				</div>
				<p v-if="summary" class="ml-auto">x{{ item.qty }}</p>
			</div>
		</div>

		<div v-if="!summary" class="bg-very-light-gray h-9 shrink-0">
			<button @click="removeItem(item.id); number--" class="number-button">-</button>
			<input
				v-model="number"
				@blur="updateCartItem"
				@keyup.enter="updateCartItem"
				type="number"
				min="1"
				max="10"
				step="1"
				v-maska
				data-maska="#0"
				class="h-full w-7 text-center bg-very-light-gray"
			/>
			<button @click="addItem(item, 1); number++" class="number-button">+</button>
		</div>
	</div>
</template>

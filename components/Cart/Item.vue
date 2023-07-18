<script setup>
defineProps({
	item: Object,
});

const { addItem, removeItem } = useCartStore();
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4">
			<NuxtImg
				:src="item.images.mobile.product"
				alt="Product picture"
				class="w-16 rounded-lg"
			/>
			<div class="font-bold">
				<div>
					{{
						item.name
							.replace("Headphones", "")
							.replace("Earphones", "")
							.replace("Speaker", "")
							.replace("Mark", "MK")
					}}
				</div>
				<p>$ {{ item.price.toLocaleString() }}</p>
			</div>
		</div>
		<div class="bg-very-light-gray h-9 shrink-0">
			<button @click="removeItem(item.id)" class="number-button">-</button>
			<input
				:value="item.qty"
				type="number"
				min="1"
				max="10"
				step="1"
				class="h-full w-7 text-center bg-very-light-gray"
			/>
			<button @click="addItem(item.id, 1)" class="number-button">+</button>
		</div>
	</div>
</template>

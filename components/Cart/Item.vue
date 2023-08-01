<script setup>
const props = defineProps({
	item: Object,
  summary: {
    type: Boolean,
    default: false,
  }
});

const { addItem, removeItem } = useCartStore();

const config = useRuntimeConfig();
const cartImgUrl = `${config.public.supabase.url}/storage/v1/object/public/products-images/${props.item.images}/image-cart.jpg`;
</script>

<template>
	<div class="items-center justify-between" :class="{flex: !summary}">
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
        <p v-if="summary" class="ml-auto">
          x{{ item.qty }}
        </p>
			</div>
		</div>

		<div v-if="!summary" class="bg-very-light-gray h-9 shrink-0">
			<button @click="removeItem(item.id)" class="number-button">-</button>
			<input
				:value="item.qty"
				type="number"
				min="1"
				max="10"
				step="1"
				class="h-full w-7 text-center bg-very-light-gray"
			/>
			<button @click="addItem(item, 1)" class="number-button">+</button>
		</div>
	</div>
</template>

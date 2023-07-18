<script setup>
const cartStore = useCartStore();
const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore);
const { removeAll } = cartStore;

const emit = defineEmits(["closeCart"]);
const onGoBack = () => {
	emit("closeCart");
};
</script>

<template>
	<div class="ml-auto py-6 max-sm:mx-auto max-w-[28rem] max-h-screen">
		<div
			class="rounded-lg w-full overflow-y-auto bg-off-white content-container p-8"
		>
			<div v-if="totalItems > 0">
				<!-- Header -->
				<div class="flex justify-between mb-8">
					<h6>Cart ({{ totalItems }})</h6>
					<button
						@click="removeAll"
						class="opacity-50 underline hover:opacity-100 hover:text-terracotta"
					>
						Remove all
					</button>
				</div>
				<!-- Items -->
				<div v-for="item in cartItems" :key="item.id" class="mt-6">
					<CartItem :item="item" />
				</div>
				<!-- Price -->
				<div class="flex justify-between mt-8">
					<p class="uppercase">Total</p>
					<h6>$ {{ totalPrice.toLocaleString() }}</h6>
				</div>
				<!-- Checkout Button -->
				<BaseButton text="Checkout" class="w-full mt-6" />
			</div>

			<div v-else>
				<h6 class="mb-8">Cart</h6>
				<p>Your cart is currently empty.</p>
				<BaseButton @click="onGoBack" text="Go Back" class="w-full mt-6" />
			</div>
		</div>
	</div>
</template>

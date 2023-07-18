<script setup>
const cartStore = useCartStore();
const { cartItems, totalPrice } = storeToRefs(cartStore);

const expenses = computed(() => [
	{
		name: "Total",
		value: totalPrice.value,
	},
	{
		name: "Shipping",
		value: 50,
	},
	{
		name: "Vat (included)",
		value: 1079,
	},
]);

const grandTotal = computed(() => {
	return expenses.value.reduce((acc, expense) => acc + expense.value, 0);
});
</script>

<template>
	<div>
		<NuxtLayout name="checkout">
			<GoBackButton />
			<FormKit type="form" class="flex max-lg:flex-col">
				<!-- Form -->

				<!-- Summary -->
				<div
					class="rounded-md w-full overflow-y-auto bg-off-white content-container p-8 lg:max-w-[22rem]"
				>
					<div>
						<!-- Header -->
						<h6 class="mb-8">Summary</h6>
						<!-- Items -->
						<div v-for="item in cartItems" :key="item.id" class="mt-6 mb-8">
							<CartItem :item="item" :summary="true" />
						</div>
						<!-- Expenses -->
						<div
							v-for="expense in expenses"
							:key="expense.name"
							class="flex justify-between"
						>
							<p class="uppercase mb-1.5">{{ expense.name }}</p>
							<h6>$ {{ expense.value.toLocaleString() }}</h6>
						</div>
						<!-- Total -->
						<div class="mt-5 flex justify-between">
							<p class="uppercase">Grand Total</p>
							<h6 class="text-terracotta">
								$ {{ grandTotal.toLocaleString() }}
							</h6>
						</div>
						<!-- Continue Button -->
						<BaseButton text="Continue & Pay" class="w-full mt-9" />
					</div>
				</div>
			</FormKit>
		</NuxtLayout>
	</div>
</template>

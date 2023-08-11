<script setup>
const props = defineProps({
	grandTotal: Number,
});

const { grandTotal } = props;

const emit = defineEmits(["backToHome"])

const { cartItems } = useCartStore();
const uniqueItems = cartItems.length;

const showLess = ref(true);
const toggleShowLess = () => {
	showLess.value = !showLess.value;
};

const itemsToShow = computed(() =>{
  if (showLess.value) {
    return [cartItems[0]];
  }

  return cartItems;
})

const goBackHome = () => {
  emit("backToHome");
}
</script>

<template>
	<div class="px-4 mx-auto max-w-[36rem] h-full flex items-center justify-center">
		<div
			class="w-full max-h-[80%] rounded-lg overflow-y-auto bg-off-white content-container p-8"
		>
			<div class="flex flex-col gap-6 sm:gap-9">
				<IconConfirmation
          class="animate-inflate"
        />
				<h3 class="max-sm:text-xl">Thank you<br />for your order</h3>
				<p>You will recieve an email confirmation shortly.</p>

				<div
					class="flex items-stretch max-sm:flex-col rounded-lg bg-very-light-gray overflow-hidden"
				>
					<!-- Items -->
					<div class="px-7 pb-4 w-full flex flex-col justify-center">
						<div v-auto-animate class="mt-4 mb-2.5">
							<div 
                v-for="item in itemsToShow"
                :key="item.id"
                class="mt-2"
              >
								<CartItem :item="item" :summary="true" />
							</div>
						</div>

						<button
							v-if="uniqueItems > 1"
							@click="toggleShowLess"
							class="font-bold opacity-50 border-t border-[#979797]/30 w-full py-2.5"
						>
							{{
								showLess ? `and ${uniqueItems - 1} other item(s)` : "View less"
							}}
						</button>
					</div>
					<!-- Total -->
					<div
						class="ml-auto bg-almost-black w-full sm:max-w-[13rem] max-sm:h-[6rem] text-white py-3 px-6 sm:p-10 flex flex-col justify-end"
					>
						<p class="uppercase mb-2.5">Grand Total</p>
						<h6 class="mb-2">$ {{ grandTotal.toLocaleString() }}</h6>
					</div>
				</div>

				<!-- Checkout Button -->
				<BaseButton
					@click="goBackHome"
					text="Back to home"
					class="w-full mt-2"
				/>
			</div>
		</div>
	</div>
</template>

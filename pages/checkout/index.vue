<script setup>
import { reset } from "@formkit/core";

const { toggleScrollLock } = useScrollStore();

const cartStore = useCartStore();
const { cartItems, totalPrice } = storeToRefs(cartStore);

const backToHome = () => {
	cartStore.removeAll();
	finish.value = false;
	toggleScrollLock();
	navigateTo("/");
};

const shipping = ref(50);
const vat = ref(1079);
const expenses = computed(() => [
	{
		name: "Total",
		value: totalPrice.value,
	},
	{
		name: "Shipping",
		value: shipping.value,
	},
	{
		name: "Vat (included)",
		value: vat.value,
	},
]);

const grandTotal = computed(() => {
	return expenses.value.reduce((acc, expense) => acc + expense.value, 0);
});

const payment = ref("eMoney");

const checkoutForm = ref(null);

const finish = ref(false);
const isSubmmiting = ref(false);
const errorMessage = ref("");

const finishOrder = async (values) => {
	const body = {
		...values,
		shipping: shipping.value,
		vat: vat.value,
		items: cartItems.value,
	};

  isSubmmiting.value = true;
	try {
		const response = await $fetch("/api/prisma/create-order", {
			method: "post",
			body,
		});
    
		finish.value = true;
		toggleScrollLock();
    isSubmmiting.value = false;
	} catch (error) {
		errorMessage.value = error.statusMessage;
    isSubmmiting.value = false;
	}

};

useHead({
	title: "Checkout | audiophile",
});
</script>

<template>
	<div>
		<NuxtLayout name="checkout">
			<GoBackButton />

			<!-- Empty Cart -->
			<div
				v-if="cartItems.length === 0"
				class="text-center flex flex-col items-center justify-center rounded-md w-full bg-off-white p-8 lg:p-12 shadow-[0_5px_18px_9px_rgba(0,0,0,0.02)]"
			>
				<h3 class="max-sm:text-2xl mt-2">Checkout</h3>
				<p class="mt-6">
					It looks like your cart is currently empty.<br />
					Add some products before checking out.
				</p>
			</div>

			<!-- Checkout -->
			<FormKit
				v-else
				type="form"
				ref="checkoutForm"
				:actions="false"
				#default="{ value, state: { valid } }"
				:config="{
					classes: {
						outer: 'mb-5 sm:mb-1 relative',
						label: 'block font-bold text-[0.75rem] mb-1',
						message: 'text-error-red text-[0.75rem] absolute top-1 right-0',
						input:
							'w-full caret-terracotta text-[0.875rem] bg-off-white py-3 px-6 focus:outline-none rounded-md border border-[#CFCFCF] focus:border-terracotta',
						inner: '',
						options: 'text-[0.875rem]',
					},
				}"
			>
				<div class="flex items-start max-lg:flex-col gap-8">
					<!-- Form -->
					<div
						class="rounded-md w-full overflow-y-auto bg-off-white p-8 lg:p-12 shadow-[0_5px_18px_9px_rgba(0,0,0,0.02)]"
					>
						<h3 class="max-sm:text-2xl mt-2">Checkout</h3>
						<!-- Billing -->
						<div class="subtitle mt-8 sm:mt-12 mb-4">Billing Details</div>
						<div class="sm:grid-form">
							<FormKit
								type="text"
								name="name"
								id="name"
								label="Name"
								placeholder="Alexei Ward"
								validation="required|alpha_spaces|length:3,100"
								:validation-messages="{
									length: 'Field length is invalid.',
								}"
							/>
							<FormKit
								type="email"
								name="email"
								id="email"
								label="Email Adress"
								placeholder="alexei@mail.com"
								validation="required|email|length:3,100"
								:validation-messages="{
									length: 'Field length is invalid.',
								}"
							/>
							<FormKit
								type="text"
								name="phone"
								id="phone"
								label="Phone Number"
								placeholder="(202) 555-0136"
								validation="required|matches:/^\(\d{3}\) \d{3}-\d{4}$/"
								v-maska
								data-maska="(###) ###-####"
								inputmode="numeric"
								:validation-messages="{
									matches: 'Invalid phone number.',
								}"
							/>
						</div>
						<!-- Shipping -->
						<div class="subtitle mt-8 sm:mt-14 mb-4">Shipping Info</div>
						<FormKit
							type="text"
							name="address"
							id="address"
							label="Your Address"
							placeholder="1137 Williams Avenue"
							validation="required|length:3,100"
						/>
						<div class="sm:grid-form sm:mt-5">
							<FormKit
								type="text"
								name="zipcode"
								id="zipcode"
								label="Zip Code"
								placeholder="10001"
								validation="required|matches:/\d{5}/"
								v-maska
								data-maska="#####"
								inputmode="numeric"
								:validation-messages="{
									matches: 'Zip Code must be 5 digits.',
								}"
							/>
							<FormKit
								type="text"
								name="city"
								id="city"
								label="City"
								placeholder="New York"
								validation="required|alpha_spaces|length:2,100"
								:validation-messages="{
									length: 'Field length is invalid.',
								}"
							/>
							<FormKit
								type="text"
								name="country"
								id="country"
								label="Country"
								placeholder="United States"
								validation="required|alpha_spaces|length:2,50"
								:validation-messages="{
									length: 'Field length is invalid.',
								}"
							/>
						</div>
						<!-- Payment -->
						<div class="subtitle mt-8 sm:mt-14 mb-4">Payment Details</div>
						<FormKit
							v-model="payment"
							type="radio"
							name="payment"
							label="Payment Method"
							:options="{
								eMoney: 'e-Money',
								cash: 'Cash on Delivery',
							}"
							input-class="block cursor-pointer accent-terracotta w-4 h-4 rounded-full border border-terracotta"
							label-class="$reset block font-bold text-[0.875rem]"
							wrapper-class="cursor-pointer p-3 rounded-md border border-[#CFCFCF] focus:border-terracotta hover:border-terracotta transition-colors duration-300 flex flex-reverse items-center gap-4"
							fieldset-class="sm:grid grid-cols-2 gap-4"
							options-class="col-start-2 flex flex-col gap-4"
							legend-class="block sm:float-left mb-2 font-bold text-[0.75rem] mb-1 formkit-invalid:text-[#CD2C2C]"
						/>
						<div v-if="payment === 'eMoney'" class="sm:grid-form mt-5">
							<FormKit
								type="text"
								name="eMoneyNumber"
								id="eMoneyNumber"
								label="e-Money Number"
								placeholder="238521993"
								validation="required|number"
							/>
							<FormKit
								type="text"
								name="eMoneyPin"
								id="eMoneyPin"
								label="e-Money Pin"
								placeholder="238521993"
								validation="required|number"
								inputmode="numeric"
							/>
						</div>
						<div
							v-else
							class="mt-7 flex items-center max-sm:flex-col gap-8 max-sm:gap-4"
						>
							<IconCash class="shrink-0 max-sm:mx-auto" />
							<p class="max-sm:text-center">
								The 'Cash on Delivery' option enables you to pay in cash when
								our delivery courier arrives at your residence. Just make sure
								your address is correct so that your order will not be
								cancelled.
							</p>
						</div>
					</div>
					<!-- Summary -->
					<div
						class="rounded-md w-full overflow-y-auto bg-off-white content-container p-8 lg:max-w-[22rem] shadow-[0_5px_18px_9px_rgba(0,0,0,0.02)]"
					>
						<div>
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
								<p class="uppercase mb-1.5">
									{{ expense.name }}
								</p>
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
							<BaseButton
								:disabled="!valid || isSubmmiting"
								type="submit"
								@click.prevent="finishOrder(value)"
								:text="payment === 'eMoney' ? 'Continue & Pay' : 'Continue'"
								:loading="isSubmmiting"
                class="w-full mt-9 relative"
							/>
						</div>
					</div>
				</div>
			</FormKit>
		</NuxtLayout>

		<BaseOverlay v-if="finish">
			<ConfirmationModal :grand-total="grandTotal" @back-to-home="backToHome" />
		</BaseOverlay>
	</div>
</template>

<style>
[data-invalid] .formkit-input {
	@apply border-2 border-error-red;
}

[data-invalid] .formkit-label {
	@apply text-error-red;
}
</style>

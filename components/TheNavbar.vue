<script setup>
import { useWindowScroll } from "@vueuse/core";

const { toggleScrollLock } = useScrollStore();
const { device } = useDevice();

const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);

const modalNav = ref(false);
const modalCart = ref(false);
const someModal = computed(() => modalNav.value || modalCart.value);

const toggleNavModal = () => {
	modalNav.value = !modalNav.value;
	toggleScrollLock();
};

watch(device, (newValue) => {
	if (newValue === "desktop" && modalNav.value) {
		toggleNavModal();
	}
});

const toggleCartModal = () => {
	modalCart.value = !modalCart.value;
	toggleScrollLock();
};

const cartModal = ref(null);
const cartButton = ref(null);
const navModal = ref(null);
const menuButton = ref(null);

onClickOutside(
	navModal,
	() => {
		if (modalNav.value) {
			toggleNavModal();
		}
	},
	{ ignore: [menuButton] }
);

onClickOutside(
	cartModal,
	() => {
		if (modalCart.value) {
			toggleCartModal();
		}
	},
	{ ignore: [cartButton] }
);

// Hide and Show NavBar
const { y } = useWindowScroll();

const isScrollingDown = ref(false);

watch(y, (newValue, oldValue) => {
	if (oldValue < newValue) {
		isScrollingDown.value = true;
	} else {
		isScrollingDown.value = false;
	}
});
</script>

<template>
	<div
		class="sticky top-0 bg-almost-black text-white z-50 transition-transform duration-300"
		:class="{ '-translate-y-full': isScrollingDown }"
	>
		<div class="content-container py-8 flex gap-10 justify-between">
			<button
				ref="menuButton"
				:disabled="modalCart"
				@click="toggleNavModal"
				class="lg:hidden"
			>
				<IconHamburger aria-hidden="true" />
				<span class="hidden">Menu</span>
			</button>

			<NuxtLink to="/" class="sm:max-lg:mr-auto">
				<IconLogo aria-hidden="true" />
				<span class="hidden">audiophile</span>
			</NuxtLink>
			<NavLinks class="flex gap-8 max-lg:hidden" />
			<button
				ref="cartButton"
				:disabled="modalNav"
				@click="toggleCartModal"
				class="relative"
			>
				<transition
					enter-from-class="opacity-0 scale-0"
					leave-to-class="opacity-0 scale-0"
					enter-active-class="transition-all duration-300 ease-out"
					leave-active-class="transition-all duration-300 ease-out"
				>
					<span
						v-show="totalItems > 0"
						class="absolute -right-3 -top-1.5 bg-terracotta w-[18px] h-[18px] px-0.5 rounded-full flex items-center justify-center text-[0.8125rem]"
						>{{ totalItems }}</span
					>
				</transition>
				<IconCart
					aria-hidden="true"
					:class="{ 'pointer-events-none': modalNav }"
				/>
				<span class="hidden">Shopping Cart</span>
			</button>
		</div>

		<!-- Overlay -->
		<BaseOverlay v-show="someModal">
			<!-- Menu Modal -->
			<div
				v-show="modalNav"
				ref="navModal"
				class="rounded-b-md mt-0 w-full overflow-x-hidden max-h-[85%] overflow-y-auto bg-off-white content-container pt-28 pb-8"
			>
				<ThumbCards @close-modal="toggleNavModal" />
			</div>

			<!-- Cart Modal -->
			<div class="content-container">
				<CartModal
					v-show="modalCart"
					ref="cartModal"
					@close-cart="toggleCartModal"
				/>
			</div>
		</BaseOverlay>
	</div>
</template>

<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import { useWindowScroll } from "@vueuse/core";

const { toggleScrollLock } = useScrollStore();
const { device } = useDevice();

const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);

const navModalActive = ref(false);
const cartModalActive = ref(false);
const someModal = computed(() => navModalActive.value || cartModalActive.value);

const toggleNavModal = () => {
	navModalActive.value = !navModalActive.value;
	toggleScrollLock();
};

watch(device, (newValue) => {
	if (newValue === "desktop" && navModalActive.value) {
		toggleNavModal();
	}
});

const toggleCartModal = () => {
	cartModalActive.value = !cartModalActive.value;
	toggleScrollLock();
};

const navBar = ref(null);
const { activate, deactivate } = useFocusTrap(navBar);

watch(someModal, (newValue) => {
	if (newValue) {
		activate();
		return;
	}
	deactivate();
});

const cartModal = ref(null);
const cartButton = ref(null);
const navModal = ref(null);
const menuButton = ref(null);

onClickOutside(
	navModal,
	() => {
		if (navModalActive.value) {
			toggleNavModal();
		}
	},
	{ ignore: [menuButton] }
);

onClickOutside(
	cartModal,
	() => {
		if (cartModalActive.value) {
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
		ref="navBar"
		class="sticky top-0 bg-almost-black text-white z-50 transition-transform duration-300"
		:class="{ '-translate-y-full': isScrollingDown }"
	>
		<div class="content-container py-8 flex gap-8 justify-between items-center">
			<button
				ref="menuButton"
				:disabled="cartModalActive"
				@click.prevent="toggleNavModal"
				class="lg:hidden h-5 transition-all duration-300"
				:class="navModalActive ? 'w-4 mr-1' : 'w-5'"
			>
				<IconHamburgerToClose v-model="navModalActive" />
			</button>

			<NuxtLink tabindex="-1" to="/" class="sm:max-lg:mr-auto">
				<IconLogo />
			</NuxtLink>

			<NavLinks class="flex gap-8 max-lg:hidden" />
			<button
				ref="cartButton"
				:disabled="navModalActive"
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
				<IconCart :class="{ 'pointer-events-none': navModalActive }" />
			</button>
		</div>

		<!-- Overlay -->
		<transition name="fade">
			<BaseOverlay v-show="someModal" class="top-[5.5625rem]">
				<!-- Menu Modal -->
				<div
					v-show="navModalActive"
					ref="navModal"
					class="rounded-b-md mt-0 w-full overflow-x-hidden max-h-[85%] overflow-y-auto bg-off-white content-container pt-28 pb-8"
				>
					<ThumbCards @close-modal="toggleNavModal" />
				</div>

				<!-- Cart Modal -->
				<div class="content-container">
					<CartModal
						v-show="cartModalActive"
						ref="cartModal"
						@close-cart="toggleCartModal"
					/>
				</div>
			</BaseOverlay>
		</transition>
	</div>
</template>

<style scoped>
a,
button {
	@apply focus-visible:ring-offset-almost-black;
}
</style>

<script setup>
import { useWindowScroll, onClickOutside } from "@vueuse/core";

// Hamburger Menu
const modalNav = ref(false);

const toggleModal = () => {
	modalNav.value = !modalNav.value;
};

const modal = ref(null);
const menuButton = ref(null);

onClickOutside(modal, () => {
  modalNav.value = false
}, { ignore: [menuButton] });

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
		class="sticky top-0 bg-almost-black text-white z-50 transition-transform duration-500"
		:class="{ '-translate-y-full': isScrollingDown }"
	>
		<div class="content-container py-8 flex gap-10 justify-between">
			<button ref="menuButton" @click="toggleModal" class="lg:hidden">
				<IconHamburger aria-hidden="true" />
				<span class="hidden">Menu</span>
			</button>

			<NuxtLink to="/" class="sm:max-lg:mr-auto">
				<IconLogo aria-hidden="true" />
				<span class="hidden">audiophile</span>
			</NuxtLink>
			<NavLinks class="flex gap-8 max-lg:hidden" />
			<button>
				<IconCart aria-hidden="true" />
				<span class="hidden">Shopping Cart</span>
			</button>
		</div>

		<!-- Overlay -->
		<div
			v-show="modalNav"
			class="fixed z-20 top-[5.5625rem] left-0 bg-black/40 w-full h-full lg:hidden"
		>
			<!-- Modal -->
			<div
				ref="modal"
				class="rounded-b-md mt-0 w-full overflow-x-hidden max-h-[85%] overflow-y-auto bg-off-white content-container pt-28 pb-8"
			>
				<ThumbCards class="text-almost-black" />
			</div>
		</div>
	</div>
</template>

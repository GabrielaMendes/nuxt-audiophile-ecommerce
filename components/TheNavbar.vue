<template>
	<div class="bg-almost-black text-white">
		<div class="content-container py-8 flex gap-10 justify-between">
			<button class="lg:hidden">
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
	</div>
</template>
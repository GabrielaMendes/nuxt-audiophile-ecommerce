<template>
	<div>
		<TheNavbar />

		<header class="bg-almost-black text-white">
			<div class="content-container">
				<slot name="header"></slot>
			</div>
		</header>

		<main class="content-container">
			<slot name="content"></slot>
		</main>

		<BestGear />

		<TheFooter />
	</div>
</template>

<style scoped>
header :slotted(.header) {
	@apply border-t-[1px] border-white border-opacity-20;
}
</style>

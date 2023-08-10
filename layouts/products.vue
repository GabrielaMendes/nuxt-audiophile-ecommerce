<template>
	<div>
		<header class="relative bg-almost-black text-white">
			<div class="content-container">
				<slot name="header"></slot>
			</div>
		</header>

		<main class="content-container">
			<slot name="content"></slot>
      
      <section class="pt-20 lg:pt-14">
				<ThumbCards />
			</section>
		</main>

		<BestGear :animation-disabled="true" />
	</div>
</template>

<style scoped>
header :slotted(.header) {
	@apply border-t-[1px] border-white border-opacity-20 before:behind-bar;
}
</style>
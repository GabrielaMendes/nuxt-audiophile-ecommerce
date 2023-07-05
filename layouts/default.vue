<template>
	<div>
		<TheNavbar class="sticky top-0" />

    <header class="bg-almost-black text-white">
      <div class="content-container">
        <slot name="header"></slot>
      </div>
    </header>

		<main class="content-container">
			<slot name="content"></slot>
    </main>

		<TheFooter />
	</div>
</template>

<style scoped>
header :slotted(div) {
  @apply border-t-[1px] border-white border-opacity-20
}
</style>
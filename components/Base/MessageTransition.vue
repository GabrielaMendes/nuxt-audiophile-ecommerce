<template>
	<transition
		enter-from-class="opacity-0 -translate-y-full"
		leave-to-class="opacity-0 -translate-y-full"
		enter-active-class="transition-all duration-300"
		leave-active-class="transition-all duration-300"
	>
		<slot></slot>
	</transition>
</template>

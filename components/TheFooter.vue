<template>
	<div class="bg-almost-black text-white">
		<div class="content-container pb-12 max-sm:text-center">
			<div class="w-[100px] h-1 bg-terracotta mb-14 max-sm:mx-auto"></div>

			<div
				class="flex flex-col lg:flex-row gap-10 sm:gap-8 justify-between mt-5 sm:max-lg:mb-8 mb-10"
			>
				<NuxtLink tabindex="-1" to="/" class="max-sm:mx-auto">
					<IconLogo aria-hidden="true" />
					<span class="hidden">audiophile</span>
				</NuxtLink>

				<NavLinks class="flex flex-col gap-4 sm:gap-8 sm:flex-row" />
			</div>

			<div class="sm:grid sm:grid-cols-2 sm::grid-rows-1 lg:items-center">
				<p
					class="mb-10 sm:mb-16 lg:mb-14 lg:max-w-[540px] col-span-2 lg:col-span-1"
				>
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we're open 7 days a week.
				</p>

				<p class="col-start-1 max-sm:mb-12">
					Copyright 2021. All Rights Reserved
				</p>

				<div
					class="flex gap-6 justify-center sm:justify-end lg:row-span-2 lg:row-start-1 lg:col-start-2"
				>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconFacebook aria-hidden="true" />
						<span class="hidden">Facebook</span>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconTwitter aria-hidden="true" />
						<span class="hidden">Twitter</span>
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconInstagram aria-hidden="true" />
						<span class="hidden">Instagram</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
a, button {
  @apply focus-visible:ring-offset-almost-black;
}
</style>
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
      
      <section class="pt-24 lg:pt-14">
				<ThumbCards />
			</section>
		</main>

		<BestGear />
		<TheFooter />
	</div>
</template>
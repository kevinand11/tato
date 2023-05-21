<template>
	<div class="px-6 py-12 md:px-8 md:py-24 lg:px-20 lg:py-32 bg-secondary-30 flex flex-col gap-12 md:gap-16 text-center">
		<div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
			<h2 class="text-2xl md:text-4xl font-bold flex-1">When life gives you potatoes, make <span class="highlight">$TATO</span></h2>
			<span class="text-lg font-bold flex-1">
				<span class="highlight">$TATO</span> is for the people, for the memes, for the toast, and the chips.
				It's the age of potatoes and the freshest memecoin.
			</span>
		</div>
		<div class="flex flex-col md:flex-row items-center gap-8">
			<div class="flex-[1.5] grid grid-cols-2 gap-6">
				<div v-for="details in mainDetails" :key="details.title" class="flex flex-col gap-4 items-center text-center">
					<h4 class="flex items-center gap-4 text-lg font-bold">
						<img src="@/assets/images/about-tea.svg" class="w-[2rem]" alt="">
						<span>{{ details.title }}</span>
					</h4>
					<span v-html="details.sub" />
				</div>
			</div>
		</div>
		<div class="flex flex-col md:flex-row items-center gap-8 text-center">
			<div class="flex-[2] flex-col flex gap-6">
				<h2 class="font-bold text-4xl">It’s time to vibe with the <span class="highlight">TATOCOINS</span></h2>
				<p>Your dollar may be getting destroyed by inflation but <span class="highlight">$TATO</span> will stay sweet and steady with no taxes or bullshit.</p>
				<div class="flex-1 grid grid-cols-2 gap-6">
				<div v-for="details in subDetails" :key="details.title" class="flex flex-col gap-2 items-center">
					<h4 class="flex items-center gap-4 text-2xl highlight font-bold">
						{{ details.title }}
					</h4>
					<span v-html="details.sub" />
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const mainDetails = [
	{ title: 'On Arbitrum', sub: 'For cheaper fees and faster transactions.' },
	{ title: 'Presale', sub: '<span class="highlight">$TATO</span> coin would always reward early investors.' },
]
const subDetails = [
	{ title: '1 Billion', sub: 'Total tokens forever!' },
	{ title: '250 Million', sub: '94% For Liquidity Pools!' },
	{ title: '500 Million', sub: '50% burnt' },
	{ title: 'Zero Team Tokens', sub: 'For vesting or shit heads!' },
]
</script>
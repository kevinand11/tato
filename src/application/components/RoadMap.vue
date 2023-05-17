<template>
	<div class="flex flex-col px-4 py-16 md:px-8 md:py-24 lg:p-16 lg:py-20 justify-center items-center gap-32 md:gap-48">
		<div class="w-full max-w-[600px] mx-auto flex flex-col gap-4 text-center">
			<h2 class="text-4xl font-bold">The <span class="highlight">$TATO</span> Map</h2>
			<span>
				<span class="highlight">$TATO</span> is a useless memecoin with no intrinsic value and
				there's no formal team or roadmap but here's a rough scoop!
			</span>

			<div class="flex flex-col gap-6">
				<a v-for="(action, idx) in map" :key="action.title" @click="toggleIdx(idx)" class="flex flex-col">
					<span class="flex gap-6 items-center justify-between text-xl font-bold p-2">
						<span>Phase {{ idx + 1 }}: {{ action.title }}</span>
						<i :class="[idx === open ? PrimeIcons.ANGLE_DOWN : PrimeIcons.ANGLE_UP]" />
					</span>
					<div v-if="idx === open" class="flex flex-col gap-2 items-start pl-6">
						<span v-for="step in action.steps" :key="step" class="text-lg px-4 py-2">- {{ step }}</span>
					</div>
				</a>
			</div>
		</div>
		<div class="bg-dark rounded-3xl p-8 md:p-12 lg:px-32 flex flex-col w-full gap-4">
			<h2 class="text-4xl font-bold">Remember this is for the MEME!</h2>
			<span class="text-lg">
				<span class="highlight">$TATO</span> is a meme coin with absolutely no intrinsic value, expectation of financial return, or official roadmap and
				speculative promises. There is no formal team and this coin is completely useless. We are here for the
				entertainment purposes only. Would you like some <span class="highlight">$TATO</span> with that?
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { PrimeIcons } from 'primevue/api'

const open = ref(-1)

const toggleIdx = (idx: number) => {
	if (open.value === idx) open.value = -1
	else open.value = idx
}

const map = [
	{
		title: 'Stealth Launch And Meme',
		steps: [
			'$TATO Token Launch And Liquidity Deposit',
			'CoinGecko & CoinMarketCap Listings',
			'Grow the $TATO Gang to 1000+ members',
			'Let\'s get $TATO Trending on Twitter and other social networks!',
		]
	},
	{
		title: 'Stealth Launch And Meme',
		steps: [
			'$TATO Token Launch And Liquidity Deposit',
			'CoinGecko & CoinMarketCap Listings',
			'Grow the $TATO Gang to 1000+ members',
			'Let\'s get $TATO Trending on Twitter and other social networks!',
		]
	},
	{
		title: 'Stealth Launch And Meme',
		steps: [
			'$TATO Token Launch And Liquidity Deposit',
			'CoinGecko & CoinMarketCap Listings',
			'Grow the $TATO Gang to 1000+ members',
			'Let\'s get $TATO Trending on Twitter and other social networks!',
		]
	}
]
</script>
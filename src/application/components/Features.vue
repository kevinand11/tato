<template>
	<div class="flex p-4 md:p-8 lg:p-16 lg:py-20 flex-col justify-center items-center">
		<div class="gap-6 flex flex-col md:flex-row">
			<div v-for="feature in features" :key="feature.title"
				class="flex flex-col gap-2 p-8 bg-light text-primary rounded-3xl">
				<span class="p-2 rounded-full bg-primary-light w-12 mb-2">
					<img src="@/assets/images/feature-icon.svg" alt="" class="w-full">
				</span>
				<h3 class="font-bold text-lg">{{ feature.title }}</h3>
				<span class="text-primary-light mb-6">{{ feature.sub }}</span>
				<a :href="feature.link" target="_blank" class="text-secondary flex items-center gap-4">
					<span>{{ feature.linkTitle }}</span>
					<i :class="PrimeIcons.ARROW_RIGHT" />
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { PrimeIcons } from 'primevue/api'

const features = [
	{ title: 'Swap on Raydium', sub: 'Make a splash in the market and swap for $TATO directly on Raydium!', linkTitle: 'Get $TATO on Raydium', link: '' },
	{ title: 'Swap on Birdeye', sub: 'Get ready to $TATO-and-roll on Birdeye with token statistics and price charts!', linkTitle: 'Get $TATO on Birdeye', link: '' },
	{ title: 'Swap on Jup.ag', sub: 'Grab a chip and scoop the dip on Jupiter\'s DEX aggregator swap platform!', linkTitle: 'Get $TATO on Jup.ag', link: '' },
]
</script>
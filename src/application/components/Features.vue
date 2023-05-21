<template>
	<div class="flex p-4 md:p-8 lg:p-16 lg:py-20 flex-col justify-center items-center">
		<div class="gap-6 flex flex-col md:flex-row">
			<div v-for="feature in features" :key="feature.sub"
				class="flex flex-col gap-2 p-8 bg-light text-primary rounded-3xl w-full flex-1">
				<span class="p-2 rounded-full bg-primary-light w-12 mb-2">
					<img src="@/assets/images/feature-icon.svg" alt="" class="w-full">
				</span>
				<span class="text-primary-light mb-6">{{ feature.sub }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

const features = [
	{ sub: '5% tax on all transactions' },
	{ sub: '3% auto liquidity' },
	{ sub: '2% for marketing' },
]
</script>
<template>
	<div class="flex gap-12 flex-col px-8 py-16 md:p-16">
		<div class="flex flex-col items-center text-center">
			<h2 class="font-bold text-4xl">Learn How To Get Your <span class="highlight">$TATO</span> On!</h2>
		</div>

		<div class="flex flex-col md:flex-row gap-6">
			<div v-for="(step, idx) in steps" :key="step.title"
				class="flex flex-col gap-2 p-6 bg-light text-primary rounded-3xl">
				<span class="font-bold text-lg">Step {{ idx + 1 }}</span>
				<h3 class="font-bold text-2xl">{{ step.title }}</h3>
				<span class="text-primary-light">{{ step.text }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const steps = [
	{ title: "Create Wallet", text: "Download Phantom, Solflare, or another wallet of your choice from the app store or their official website. Make sure to confirm it's the real one to avoid scams!" },
	{ title: "Get Some Sol", text: "Now you need some Solana! You can buy Solana in most wallets or purchase it on another exchange and send it to your new wallet before getting $TATO!" },
	{ title: "Swap SOL To TATO", text: "Connect to one of the dApps that supports $TATO markets like Birdeye and Jupiter. You can then swap your Solana to $TATO. You may need to adjust slippage!" },
]
</script>
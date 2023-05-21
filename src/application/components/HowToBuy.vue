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
	{ title: "Create Wallet", text: "Create a BSC wallet, you can use trust wallet, Metamask, Safepal and many more but avoid using a CEX wallet" },
	{ title: "Get Some ARB ETH", text: "Credit your wallet with some ARB ETH as that’s what you’ll be using to purchase $TATO" },
	{ title: "Swap ARB ETH To TATO", text: "When presale is live on pinksale you would just need to connect your wallet to the presale and buy with your ARB ETH" },
]
</script>
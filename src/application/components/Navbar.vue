<template>
	<div class="flex items-center justify-between gap-6 py-4 px-8 md:px-16 bg-primary-light">
		<img src="@/assets/images/logo.svg" class="h-[40px] md:h-[50px]" alt="Tato">
		<div class="gap-6 items-center md:flex hidden">
			<LinkTag to="/">Home</LinkTag>
			<LinkTag to="/#about">About</LinkTag>
			<LinkTag to="/#tatonomics">Tatonomics</LinkTag>
		</div>
		<a target="_blank" class="hidden lg:inline-block">
			<button>Get $TATO</button>
		</a>
		<a class="text-3xl text-primary lg:hidden" @click="openMenu = true">
			<i :class="PrimeIcons.ALIGN_LEFT" />
		</a>

		<transition>
			<div v-if="openMenu" class="menu flex flex-col gap-6 bg-light text-black">
				<a class="text-2xl ml-auto text-blue" @click="openMenu = false">
					<i :class="PrimeIcons.TIMES" />
				</a>
				<LinkTag to="/" @clicked="openMenu = false">Home</LinkTag>
				<LinkTag to="/#about" @clicked="openMenu = false">About</LinkTag>
				<LinkTag to="/#tatonomics" @clicked="openMenu = false">Tatonomics</LinkTag>

				<button>Get $TATO</button>
			</div>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import LinkTag from '@/components/LinkTag.vue'
import { PrimeIcons } from 'primevue/api'

const openMenu = ref(false)
</script>

<style scoped>
.menu {
	position: fixed;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	top: 0;
	left: 0;
	padding: 60px;
}

.v-enter-active {
	transition: all 0.3s ease-out;
}

.v-enter-from {
	transform: translateX(200px);
}
</style>
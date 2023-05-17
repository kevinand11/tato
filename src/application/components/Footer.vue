<template>
	<footer class="flex flex-col gap-4 p-8 md:p-16 items-center">
		<div class="flex justify-between items-center flex-col gap-12 w-full md:w-3/4">
			<div class="flex justify-center items-center gap-4">
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/#about">About</nuxt-link>
				<nuxt-link to="/#tatonomics">Tatonomics</nuxt-link>
				<a target="_blank" :href="TwitterLink">Twitter</a>
				<a target="_blank" :href="TelegramLink">Telegram</a>
			</div>
			<span>
				© {{ new Date().getFullYear() }} TATOCOINS - All Rights Reserved
			</span>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { TelegramLink, TwitterLink } from '../constants'
</script>
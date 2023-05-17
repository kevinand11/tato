<template>
	<a @click="click" class="pb-2 border-b-2 lg:border-b-0 text-primary"
		:class="{ 'active-link': route.fullPath === to }">
		<slot />
	</a>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const props = defineProps({
	to: {
		type: String,
		required: true
	},
})

const emits = defineEmits(['clicked'])

const click = async () => {
	emits('clicked')
	router.push(props.to)
}
</script>

<style scoped>
@media (min-width: theme('screens.md')) {
	a {
		border-bottom: unset;
	}

	.active-link {
		border-bottom: 2px solid theme('colors.primary.DEFAULT') !important;
	}
}
</style>
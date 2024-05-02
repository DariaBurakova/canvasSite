<script setup>
defineProps({
	attr: String,
	text: String
})
</script>

<template>
	<div :class="attr">
		<h2 class="center mb-0 ls1">{{ text }}</h2>
	</div>
</template>

<style scoped>

</style>
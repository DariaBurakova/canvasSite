<script setup>
defineProps( {
	title: String
})
</script>

<template>
	<div class="widget clearfix">
		<h4 v-if="title">{{ title }}</h4>
		<slot/>
	</div>
</template>

<style scoped>

</style>
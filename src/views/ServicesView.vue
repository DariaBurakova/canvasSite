<script setup>
import PageTitle from '@/components/block/PageTitle.vue'
import ServicesBlock from '@/components/block/ServicesBlock.vue'
const breadcrumbs = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "What We Do",
		href: "/services"
	}
]
</script>

<template>
	<PageTitle
		:descr="'A Short Page Title Tagline'"
		:title="'What We Do'"
		:breadcrumbs="breadcrumbs"
	/>
	<ServicesBlock/>
</template>

<style scoped>

</style>
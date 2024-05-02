<script setup>
import BreadCrumbs from '@/components/UI/BreadCrumbs.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
defineProps({
	breadcrumbs: {
		type: Array,
		required: true,
	},
	title: {
		type: String,
		required: true
	},
	descr: {
		type: String,
		required: true
	}
})
</script>

<template>
	<section id="page-title">
		<ClearFix>
			<h1>{{ title }}</h1>
			<span>{{ descr }}</span>
			<BreadCrumbs :breadcrumbs="breadcrumbs"/>
		</ClearFix>
	</section>
</template>

<style scoped>

</style>
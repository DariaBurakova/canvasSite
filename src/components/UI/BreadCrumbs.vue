<script setup>
defineProps({
	breadcrumbs: {
		type: Array,
		required: true
	}
})
</script>

<template>
	<ol class="breadcrumb">
		<li
			v-for="(item, index) in breadcrumbs"
			:key="index"
			class="breadcrumb-item"
			:class="{'active': this.$route.href === item.href }"
		>
			<RouterLink v-if="!(this.$route.href === item.href)" :to="item.href">
				{{ item.name }}
			</RouterLink>
			<template v-else>
				{{ item.name }}
			</template>
		</li>
	</ol>
</template>

<style scoped>

</style>
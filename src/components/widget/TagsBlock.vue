<script setup>
import { useTags } from '@/stores/tags.js'

const {tags} = useTags();
</script>

<template>
	<div class="tagcloud">
		<RouterLink
			v-for="(tag, index) in tags"
			:key="index"
			:to="tag.href"
		>
			{{ tag.name }}
		</RouterLink>
	</div>
</template>

<style scoped>

</style>
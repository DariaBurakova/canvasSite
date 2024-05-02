<script setup>
import EntryMeta from '@/components/block/blog/EntryMeta.vue'

defineProps({
	post: Object
})
</script>

<template>
	<div class="col-12">
		<div class="entry-image">
			<RouterLink :to="post.link" class="entry-link" target="_blank">
				{{ post.title }}
				<span>- {{ post.link }}</span>
			</RouterLink>
		</div>
		<EntryMeta :post="post"/>
	</div>
</template>

<style scoped>

</style>
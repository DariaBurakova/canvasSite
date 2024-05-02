<script setup>
import EntryMeta from '@/components/block/blog/EntryMeta.vue'

defineProps({
	post: Object
})
</script>

<template>
	<div class="col-12">
		<div class="entry-image">
			<blockquote>
				<p>{{ post.blockquote.text }}</p>
				<footer>{{ post.blockquote.footer }}</footer>
			</blockquote>
		</div>
		<EntryMeta :post="post" />
	</div>
</template>

<style scoped>

</style>
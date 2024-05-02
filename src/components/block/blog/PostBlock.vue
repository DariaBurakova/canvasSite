<script setup>

import EntryMeta from '@/components/block/blog/EntryMeta.vue'

defineProps({
	post: Object
})
</script>

<template>
	<div class="col-12">
		<div class="entry-image">
			<div class="card">
				<div class="card-body">
					{{ post.card }}
				</div>
			</div>
		</div>
		<EntryMeta :post="post" />
	</div>
</template>

<style scoped>

</style>
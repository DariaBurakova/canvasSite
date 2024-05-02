<script setup>
import PostCard from '@/components/block/blog/PostCard.vue'
import PostBlockquote from '@/components/block/blog/PostBlockquote.vue'
import PostLink from '@/components/block/blog/PostLink.vue'
import PostBlock from '@/components/block/blog/PostBlock.vue'

defineProps({
	posts: Array
})
</script>

<template>
	<div
		v-for="(post, index) in posts"
		:key="index"
		class="entry col-12"
	>
		<div class="grid-inner row no-gutters">
			<template v-if="post.type === 'post'">
				<PostCard :post="post"/>
			</template>
			<template v-if="post.type === 'blockquote'">
				<PostBlockquote :post="post" />
			</template>
			<template v-if="post.type === 'link'">
				<PostLink :post="post" />
			</template>
			<template v-if="post.type === 'block'">
				<PostBlock :post="post" />
			</template>
		</div>
	</div>
</template>

<style scoped>

</style>
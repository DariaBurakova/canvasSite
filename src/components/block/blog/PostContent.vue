<script setup>

import PostList from '@/components/block/blog/PostList.vue'
import { useBlog } from '@/stores/blog.js'
import Pagination from '@/components/Pagination.vue'
import BlogSidebar from '@/components/block/blog/BlogSidebar.vue'

const {posts} = useBlog();
</script>

<template>
	<div class="postcontent col-lg-9">

		<div id="posts" class="row gutter-40 mb-0">
			<PostList
				:posts="posts"
			/>
		</div>

		<Pagination/>
	</div>

	<BlogSidebar />
</template>

<style scoped>

</style>
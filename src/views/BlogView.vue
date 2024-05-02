<script setup>

import PageTitle from '@/components/block/PageTitle.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
import PostContent from '@/components/block/blog/PostContent.vue'
const breadcrumbs = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Blog",
		href: "/blog"
	}
]
</script>

<template>
	<PageTitle
		:descr="'A Short Page Title Tagline'"
		:title="'News'"
		:breadcrumbs="breadcrumbs"
	/>
	<section id="content">
		<div class="content-wrap">
			<ClearFix>
				<div class="row gutter-40 col-mb-80">
					<PostContent/>
				</div>
			</ClearFix>
		</div>
	</section>
</template>

<style scoped>

</style>
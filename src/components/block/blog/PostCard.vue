<script setup>

import ImgTag from '@/components/UI/ImgTag.vue'
import EntryMeta from '@/components/block/blog/EntryMeta.vue'
defineProps({
	post: Object
})
</script>

<template>
	<div class="entry-image col-md-4">
		<template
			v-if="post.img"
		>
			<RouterLink :to="post.href" data-lightbox="image">
				<ImgTag :alt="post.title" :src="post.img"/>
			</RouterLink>
		</template>
		<template
			v-if="post.video"
		>
			<iframe :src="post.video" width="500" height="350" allow="autoplay; fullscreen" allowfullscreen></iframe>
		</template>
		<template v-if="post.gallery">
			<div class="slide">
				<RouterLink :to="post.href" data-lightbox="gallery-item">
					<ImgTag
						v-for="(item, index) in post.gallery"
						:key="index"
						:alt="post.title" :src="item"
					/>
				</RouterLink>
			</div>
		</template>
	</div>
	<div class="col-md-8 pl-md-4">
		<div class="entry-title title-sm">
			<h2>
				<RouterLink :to="post.href">
					{{ post.title }}
				</RouterLink>
			</h2>
		</div>
		<EntryMeta :post="post" />
		<div class="entry-content">
			<p>{{ post.text }}</p>
			<RouterLink :to="post.href" class="button button-border button-rounded">
				Read More
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>

</style>
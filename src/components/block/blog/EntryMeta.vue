<script setup>
defineProps({
	post: Object
})
</script>

<template>
	<div class="entry-meta">
		<ul>
			<li><i class="icon-calendar3"></i> {{ post.meta.date }}</li>
			<li><RouterLink to="#"><i class="icon-user"></i> {{ post.meta.user }}</RouterLink></li>
			<li><i class="icon-folder-open"></i>
				<template v-for="(item, index) in post.meta.cat" :key="index">
					<RouterLink
						:to="item.href">
						{{ item.name }}
					</RouterLink>,
				</template>

			</li>
			<li>
				<RouterLink to="#">
					<i class="icon-comments"></i> {{ post.meta.comments }}
				</RouterLink>
			</li>
			<li>
				<RouterLink to="#">
					<i v-if="post.img" class="icon-camera-retro"></i>
					<i v-if="post.video" class="icon-film"></i>
					<i v-if="post.gallery" class="icon-picture"></i>
					<i v-if="post.blockquote" class="icon-quote-left"></i>
					<i v-if="post.link" class="icon-link"></i>
					<i v-if="post.card" class="icon-align-justify2"></i>
				</RouterLink>
			</li>
		</ul>
	</div>

</template>

<style scoped>

</style>
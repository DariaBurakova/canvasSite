<script setup>

import WidgetLayout from '@/components/widget/WidgetLayout.vue'
import TwitterFeed from '@/components/widget/TwitterFeed.vue'
import FlickrPhotostream from '@/components/widget/FlickrPhotostream.vue'
import SidebarTabs from '@/components/widget/SidebarTabs.vue'
import PortfolioCarousel from '@/components/widget/PortfolioCarousel.vue'
import TagsBlock from '@/components/widget/TagsBlock.vue'
</script>

<template>
	<div class="sidebar col-lg-3">
		<div class="sidebar-widgets-wrap">

			<WidgetLayout
				:class="'widget-twitter-feed'"
				:title="'Twitter Feed'"
			>
				<TwitterFeed/>
			</WidgetLayout>

			<WidgetLayout :title="'Flickr Photostream'">
				<FlickrPhotostream/>
			</WidgetLayout>

			<WidgetLayout>
				<SidebarTabs/>
			</WidgetLayout>

			<WidgetLayout :title="'Portfolio Carousel'">
				<PortfolioCarousel />
			</WidgetLayout>

			<WidgetLayout :title="'Tag Cloud'">
				<TagsBlock />
			</WidgetLayout>
		</div>

	</div>
</template>

<style scoped>

</style>
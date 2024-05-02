<script setup>
import PageTitle from '@/components/block/PageTitle.vue'
import ContentSite from '@/components/ContentSite.vue'
import AboutBlock from '@/components/block/AboutBlock.vue'
import AboutInfo from '@/components/block/AboutInfo.vue'
import RecentNews from '@/components/block/RecentNews.vue'
import ClientsBlock from '@/components/block/ClientsBlock.vue'
import BannerBlock from '@/components/block/BannerBlock.vue'
import GoodHands from '@/components/block/GoodHands.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
const breadcrumbs = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "About Us",
		href: "/about"
	}
]
</script>

<template>
	<PageTitle
		:descr="'A Short Page Title Tagline'"
		:title="'About Us'"
		:breadcrumbs="breadcrumbs"
	/>
	<ContentSite>
		<AboutBlock/>
		<AboutInfo/>
		<ClearFix>
			<div class="row clearfix">
				<RecentNews class="col-md-7"/>
				<ClientsBlock class="col-md-5"/>
			</div>
		</ClearFix>
		<BannerBlock
			:class="'button button-3d border-bottom-0 topmargin-sm button-full center text-right bottommargin font-weight-light font-primary'"
			:href="'/portfolio'" :text="'Would you like to Build your Dream Home with Us?'" :text-btn="'Enquire Here'"
		/>
		<GoodHands/>
	</ContentSite>
</template>

<style scoped>

</style>
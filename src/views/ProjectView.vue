<script setup>
import PageTitle from '@/components/block/PageTitle.vue'
import ContentSite from '@/components/ContentSite.vue'
import ProjectBlock from '@/components/block/ProjectBlock.vue'
import { useProject } from '@/stores/project.js'
import BannerBlock from '@/components/block/BannerBlock.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
const {project} = useProject();
const breadcrumbs = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Project",
		href: "/project"
	}
]
</script>

<template>
	<PageTitle
	:descr="'A Short Page Title Tagline'"
	:title="'Projects'"
	:breadcrumbs="breadcrumbs"
	/>
	<ContentSite>
		<ClearFix>
			<ProjectBlock :project="project"/>
		</ClearFix>
		<BannerBlock
			:class="'button button-3d border-bottom-0 button-full center text-right font-weight-light font-primary topmargin footer-stick'"
			:href="'/portfolio'" :text="'Would you like to Build your Dream Home with Us?'" :text-btn="'Enquire Here'"
		/>
	</ContentSite>

</template>

<style scoped>

</style>
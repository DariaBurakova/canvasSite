<script setup>
import SliderSection from '@/components/SliderSection.vue'
import { useSlidersSlide } from '@/stores/sliders-slide.js'
import ContentSite from '@/components/ContentSite.vue'
import PromoBlock from '@/components/block/PromoBlock.vue'
import FeatureBlock from '@/components/block/FeatureBlock.vue'
import ParalaxBlock from '@/components/block/ParalaxBlock.vue'
import { useParalax } from '@/stores/paralax.js'
import InfoBlock from '@/components/block/InfoBlock.vue'
import { useInfo } from '@/stores/info.js'
import ProjectBlock from '@/components/block/ProjectBlock.vue'
import { useProject } from '@/stores/project.js'
import BannerBlock from '@/components/block/BannerBlock.vue'
import FeedBack from '@/components/block/FeedBack.vue'
import GoodHands from '@/components/block/GoodHands.vue'
const {slides} = useSlidersSlide();
const {paralax} = useParalax();
const {info} = useInfo();
const {project} = useProject();
</script>

<template>
  <SliderSection :slides="slides"/>
  <ContentSite>
		<PromoBlock
		:title="'Start Planning your New Dream Home with us'"
		:descr="'We strive to provide Our Customers with Top Notch Support to make their Theme'"
		:text-btn="'Start Now'"
		/>
		<FeatureBlock/>
		<ParalaxBlock :paralax="paralax"/>
		<InfoBlock :info="info"/>
		<ProjectBlock :attr="'section mb-0'" :project="project"/>
		<BannerBlock
			:class="'button button-3d border-bottom-0 button-full center text-right bottommargin-lg font-weight-light font-primary'"
			:href="'/portfolio'" :text="'Would you like to Build your Dream Home with Us?'" :text-btn="'Enquire Here'"
		/>
		<FeedBack/>
		<GoodHands/>
  </ContentSite>
</template>

<style scoped>

</style>
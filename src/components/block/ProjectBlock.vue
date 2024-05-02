<script setup>
import TitlePageBLock from '@/components/block/TitlePageBLock.vue'

defineProps({
    project: Array,
	attr: String,
})
</script>

<template>
	<TitlePageBLock
		:class="'bottommargin'"
		:text="'Some of Our Esteemed Projects:'"
	/>

  <div id="portfolio" class="portfolio row grid-container no-gutters">

    <article
      v-for="item in project"
      :key="item.title"
      class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics"
    >
      <div class="grid-inner">
        <div class="portfolio-image">
          <img :src="item.img" :alt="item.title">
          <div class="bg-overlay">
            <div class="bg-overlay-content dark" data-hover-animate="fadeIn">
              <a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
            </div>
            <div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
          </div>
        </div>
        <div class="portfolio-desc">
          <h3>{{ item.title }}</h3>
          <span>{{ item.country }}</span>
        </div>
      </div>
    </article>

  </div>
</template>

<style scoped>

</style>
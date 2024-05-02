<script setup>

import { useRecentNews } from '@/stores/recent-news.js'
import ImgTag from '@/components/UI/ImgTag.vue'

const {recentNews, title} = useRecentNews();
</script>

<template>
  <div>
    <h4>{{ title }}</h4>

    <div id="oc-posts" class="owl-carousel posts-carousel carousel-widget posts-md" data-margin="20" data-nav="true" data-pagi="true" data-items-xs="1" data-items-xl="2">
      <div
        v-for="(news, index) in recentNews"
        :key="index"
        class="oc-item"
      >
        <div class="entry">
          <div class="entry-image">
            <div v-if="news.slider" class="fslider" data-arrows="false" data-lightbox="gallery">
              <div class="flexslider">
                <div class="slider-wrap">
                      <div class="slide" v-for="item in news.slider">
                        <RouterLink :to="news.href" data-lightbox="gallery-item">
                          <ImgTag :alt="news.title" :src="item" />
                        </RouterLink>
                        
                      </div>
                </div>
              </div>
            </div>
            <RouterLink v-else :to="news.href" data-lightbox="image">
              <ImgTag :alt="news.title" :src="news.cover" />
            </RouterLink>

          </div>
          <div class="entry-title title-sm nott">
            <h3>
              <RouterLink :to="news.href">
                {{ news.title }}
              </RouterLink>
            </h3>
          </div>
          <div class="entry-meta">
            <ul>
              <li>{{ news.date }}</li>
              <li><a href="#comments">{{ news.comment }} Comments</a></li>
            </ul>
          </div>
          <div class="entry-content">
            <p>{{ news.descr }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
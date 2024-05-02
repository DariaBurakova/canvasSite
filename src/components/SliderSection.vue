<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';

defineProps({
  slides: Array,
})

import { ref } from 'vue'
const module = [Navigation];
const prev = ref(null);
const next = ref(null);
</script>

<template>
  <section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-75" data-loop="true">

    <div class="swiper-container swiper-parent">
    <Swiper :navigation="{
      prevEl: prev,
      nextEl: next
    }"
            :modules="module" class="swiper-wrapper">
       <SwiperSlide
       v-for="slide in slides"
       :key="slide.title"
       >
         <div class="container">
           <div class="slider-caption">
             <div>
               <h2>{{ slide.title }}</h2>
               <p class="d-none d-sm-block">{{ slide.descr }}</p>
             </div>
           </div>
         </div>
         <div v-if="slide.slideBg" class="swiper-slide-bg" :style="{ backgroundImage: 'url(' + slide.slideBg + ')', backgroundPosition: 'center top' }"></div>
         <div v-if="slide.videos"   class="video-wrap">

           <video id="slide-video" :poster="slide.videos.cover" preload="auto" loop autoplay muted>
             <source
               v-for="video in slide.videos.items"
               :src="video.name" :type="video.type"
             />
           </video>
           <div class="video-overlay" style="background-color: rgba(0,0,0,0.1);"></div>
         </div>
       </SwiperSlide>
    </Swiper>
      <div ref="prev" class="slider-arrow-left"><i class="icon-angle-left"></i></div>
      <div ref="next" class="slider-arrow-right"><i class="icon-angle-right"></i></div>
    </div>

  </section>
</template>

<style scoped>

</style>
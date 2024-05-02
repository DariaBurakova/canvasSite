<script setup>
defineProps({
  paralax: Array
})
</script>

<template>

  <div class="section parallax dark" style="background-image: url(); padding: 120px 0;"  data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">

    <div class="fslider testimonial testimonial-full" data-arrows="false" style="z-index: 2;">
      <div class="flexslider">
        <div class="slider-wrap">
          <div class="slide" v-for="item in paralax">
            <div class="testi-image">
              <a href="#"><img :src="item.img" :alt="item.text"></a>
            </div>
            <div class="testi-content">
              <p>{{ item.text }}</p>
              <div class="testi-meta">
                {{ item.name }}
                <span>{{ item.company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="video-wrap" style="z-index: 1;">
      <div class="video-overlay" style="background: rgba(241,128,82,0.9);"></div>
    </div>

  </div>
</template>

<style scoped>

</style>
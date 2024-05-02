<script setup>
defineProps({
  info: Array
})
</script>

<template>
  <div class="container">

    <div class="row align-items-stretch col-mb-50">
      <div
        v-for="item in info"
        class="col-lg-4 col-md-6">
        <div class="feature-box fbox-plain">
          <div class="fbox-icon">
            <a href="#"><img :src="item.img" :alt="item.title"></a>
          </div>
          <div class="fbox-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descr }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
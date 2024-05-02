<script setup>
import LogoNav from '@/components/LogoNav.vue'
import SearchButton from '@/components/SearchButton.vue'
import NavigationList from '@/components/NavigationList.vue'
import FomSearch from '@/components/UI/FomSearch.vue'
</script>

<template>
  <header id="header" class="header-size-sm" data-sticky-shrink="false">
    <div class="container">
     <LogoNav/>
    </div>

    <div id="header-wrap">
      <div class="container">
        <div class="header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center">
        <SearchButton/>
        <NavigationList/>
        <FomSearch/>
        </div>
      </div>
    </div>
    <div class="header-wrap-clone"></div>
  </header>
</template>

<style scoped>

</style>
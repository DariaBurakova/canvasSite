<script setup>

import { useGoodHands } from '@/stores/good-hands.js'
import ImgTag from '@/components/UI/ImgTag.vue'

const {lists, title, descr, img} = useGoodHands();
</script>

<template>
  <div class="line topmargin-sm"></div>

  <div class="section bg-transparent mt-0 p-0 footer-stick">
    <div class="container clearfix">

      <div class="row">
        <div class="col-lg-7">
         <ImgTag :alt="title" :src="img" />
        </div>
        <div class="col-lg-5 topmargin-sm">
          <div class="heading-block border-bottom-0">
            <h2>{{ title }}</h2>
            <span class="ls1">{{ descr }}</span>
          </div>

          <ul class="iconlist iconlist-large iconlist-color">
            <li
            v-for="(item, index) in lists"
            :key="index"
            >
              <i class="icon-ok"></i> {{ item }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
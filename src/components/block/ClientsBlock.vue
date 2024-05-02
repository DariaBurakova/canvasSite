<script setup>

import { useClients } from '@/stores/clients.js'
import ImgTag from '@/components/UI/ImgTag.vue'

const {clients, title, descr, seeMore} = useClients();
</script>

<template>
  <div>
    <h4>{{ title }}</h4>

    <p> {{ descr }} <a :href="seeMore.href">{{ seeMore.text }}</a></p>

    <ul class="clients-grid grid-2 grid-sm-3 mb-0">
                <li
                  v-for="(client, index) in clients"
                  :key="index"

                  class="grid-item" style="padding: 20px;"
                >
                <RouterLink :to="client.href">
                  <ImgTag :alt="client.alt" :src="client.img" />
                </RouterLink>
                </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
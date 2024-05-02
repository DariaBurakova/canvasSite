<script setup>
defineProps({
  subList: Array
});
</script>

<template>
  <ul class="sub-menu-container">
    <li class="menu-item" v-for="sub in subList" :key="sub.name">
      <a class="menu-link" :href="sub.href">
        <div>{{ sub.name }}</div>
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>
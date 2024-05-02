<script setup>
import { useNavigation } from '@/stores/navigation.js';
import SubNavigationList from '@/components/SubNavigationList.vue'

const { menuItems } = useNavigation();

</script>

<template>

  <nav class="primary-menu with-arrows">
    <ul class="menu-container">
      <li class="menu-item"   v-for="item in menuItems" :key="item.name" :class="{'current': this.$route.href === item.href }">
	      <RouterLink class="menu-link" :to="item.href">
		      <div>{{ item.name }}</div>
	      </RouterLink>
	      <template v-if="item.subList">
		      <SubNavigationList :sub-list="item.subList" />
	      </template>
      </li>
    </ul>

  </nav>
</template>

<style scoped>

</style>
<script setup>
import { RouterView } from 'vue-router'
import HeaderC from '@/components/HeaderC.vue'
import TopBar from '@/components/TopBar.vue'
import FooterC from '@/components/FooterC.vue'
import GoTop from '@/components/UI/GoTop.vue'

</script>

<template>
  <div id="wrapper" class="clearfix">
	<TopBar/>
		<HeaderC/>
			<RouterView />
		<FooterC/>
	<GoTop/>
  </div>
</template>

<style scoped>
</style>

<script setup>
import ClearFix from '@/components/UI/ClearFix.vue'

defineProps({
  href: {
    type: String,
    required: true
  },
  text: String,
  textBtn: String
})
</script>

<template>

  <RouterLink :to="href"  style="font-size: 26px;">
	<ClearFix>
		{{ text }} <strong>{{ textBtn }}</strong> <i class="icon-angle-right" style="top:3px;"></i>
	</ClearFix>
  </RouterLink>
</template>

<style scoped>

</style>
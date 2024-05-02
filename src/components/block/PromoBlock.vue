<script setup>
import ClearFix from '@/components/UI/ClearFix.vue'

defineProps(
  {
    title: String,
    descr: String,
    textBtn: String
  }
)
</script>

<template>
  <div class="promo promo-light promo-full promo-uppercase p-5 bottommargin-lg header-stick">
	<ClearFix>
		<div class="row align-items-center">
			<div class="col-12 col-lg">
				<h3 style="letter-spacing: 2px;">{{ title }}</h3>
				<span>{{ descr }}</span>
			</div>
			<div class="col-12 col-lg-auto mt-4 mt-lg-0">
				<a href="#" class="button button-large button-circle button-black m-0">{{ textBtn }}</a>
			</div>
		</div>
	</ClearFix>
  </div>
</template>

<style scoped>

</style>
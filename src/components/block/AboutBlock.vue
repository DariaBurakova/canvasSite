<script setup>
import { useAbout } from '@/stores/about.js'
import ClearFix from '@/components/UI/ClearFix.vue'

const {title, subtitle, text, link} = useAbout();
</script>

<template>
	<ClearFix>
		<div class="row clearfix">
			<div class="col-lg-6">
				<div class="heading-block border-bottom-0 bottommargin-sm">
					<h3>{{ title }}</h3>
					<span>{{ subtitle }}</span>
				</div>
				<p>{{ text }}</p>
				<RouterLink class="button button-3d ml-0 bottommargin-sm" :to="link.href">
					{{ link.name }}
				</RouterLink>
			</div>

		</div>
	</ClearFix>

</template>

<style scoped>

</style>
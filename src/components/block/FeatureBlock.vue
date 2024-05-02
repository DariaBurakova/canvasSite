<script setup>

import { useFeature } from '@/stores/feature.js'
import ImgTag from '@/components/UI/ImgTag.vue'
import ClearFix from '@/components/UI/ClearFix.vue'

const { feature } = useFeature();

</script>

<template>
	<ClearFix>
		<div class="row justify-content-center col-mb-50">

			<div
				v-for="item in feature"
				:key="item.title"
				class="col-sm-6 col-lg-4"
			>
				<div class="feature-box media-box">
					<div class="fbox-media">
						<ImgTag :alt="item.alt" :src="item.img"/>
					</div>
					<div class="fbox-content px-0">
						<h3>{{ item.title }}<span class="subtitle">{{ item.subtitle }}</span></h3>
						<p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum quo.</p>
					</div>
				</div>
			</div>

		</div>
	</ClearFix>
</template>

<style scoped>

</style>
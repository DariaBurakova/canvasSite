<script setup>

import TitlePageBLock from '@/components/block/TitlePageBLock.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
import { useServicesView } from '@/stores/services-view.js'
import ImgTag from '@/components/UI/ImgTag.vue'

const {arrOne, arrTwo} = useServicesView();
</script>

<template>
	<section id="content">
		<div class="content-wrap">
			<TitlePageBLock
				class="section header-stick"
				:text="'Some of Our Esteemed Projects:'"
			/>

			<ClearFix>
				<div class="container clearfix">

					<div class="row col-mb-50 mb-0">
						<div
							v-for="(item, index) in arrTwo"
							:key="index"
							class="col-md-6 col-lg-4"
						>
							<div class="feature-box fbox-plain">
								<div class="fbox-icon">
									<RouterLink to="#">
										<ImgTag :alt="item.title" :src="item.img" />
									</RouterLink>
								</div>
								<div class="fbox-content">
									<h3>{{ item.title }}</h3>
									<p>{{ item.text }}</p>
								</div>
							</div>
						</div>
					</div>

					<div class="row col-mb-50">
						<div
							v-for="(item, index) in arrTwo"
							:key="index"
							class="col-sm-6 col-lg-4"
						>
							<div class="feature-box media-box">
								<div class="fbox-media">
									<ImgTag class="rounded" :alt="item.title" :src="item.img"/>
								</div>
								<div class="fbox-content px-0">
									<h3>{{ item.title }}<span class="subtitle">{{ item.subtitle }}</span></h3>
									<p>{{ item.text }}</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</ClearFix>
		</div>
	</section>
</template>

<style scoped>

</style>
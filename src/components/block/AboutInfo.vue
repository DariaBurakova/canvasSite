<script setup>
import { useInfo } from '@/stores/info.js'
import ImgTag from '@/components/UI/ImgTag.vue'

const {info} = useInfo();
</script>

<template>
	<div class="section row p-0 align-items-stretch dark topmargin clearfix">
		<div class="col-lg-4 d-none d-md-block" style="background: url('./src/assets/images/parallax.jpg') center center repeat; background-size: cover;">
			<div>&nbsp;</div>
		</div>
		<div class="col-lg-8">
			<div class="col-padding">

				<div class="row align-items-stretch clearfix">
					<div
						v-for="(item, index) in info"
						:key="index"
						class="col-md-6 bottommargin"
					>
						<div class="feature-box fbox-plain">
							<div class="fbox-icon">
								<RouterLink to="">
									<ImgTag :alt="item.title" :src="item.img"/>
								</RouterLink>
							</div>
							<div class="fbox-content">
								<h3>{{ item.title }}</h3>
								<p>{{ item.descr }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped>

</style>
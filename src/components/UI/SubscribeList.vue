<script setup>
import { useSubscribe } from '@/stores/subscribe.js'

const {subscribe} = useSubscribe();
</script>

<template>
	<div class="widget subscribe-widget clearfix">

		<div class="row col-mb-30">
			<div
				v-for="(item, index) in subscribe"
				:key="index"
				class="col-12 col-sm-6 clearfix">
				<RouterLink :to="item.href" class="social-icon si-dark si-colored mb-0" :class="item.iconS" style="margin-right: 10px;">
					<i :class="item.icon"></i>
					<i :class="item.icon"></i>
				</RouterLink>
				<RouterLink :to="item.href">
					<small style="display: block; margin-top: 3px;"><strong>Like us</strong><br>on {{ item.name }}</small>
				</RouterLink>
			</div>
		</div>

	</div>
</template>

<style scoped>

</style>
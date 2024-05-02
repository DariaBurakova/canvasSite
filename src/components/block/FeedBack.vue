<script setup>

import FormBlock from '@/components/block/FormBlock.vue'
import TabsBlock from '@/components/block/TabsBlock.vue'
import ClientsBlock from '@/components/block/ClientsBlock.vue'
import RecentNews from '@/components/block/RecentNews.vue'
import ClearFix from '@/components/UI/ClearFix.vue'
</script>

<template>
	<ClearFix class="topmargin-lg">
		<div class="row col-mb-50">
			<TabsBlock class="col-md-8"/>
			<FormBlock class="col-md-4"/>
		</div>

		<div class="line"></div>

		<div class="row col-mb-50">
			<ClientsBlock class="col-md-5"/>
			<RecentNews class="col-md-7"/>
		</div>
	</ClearFix>
</template>

<style scoped>

</style>
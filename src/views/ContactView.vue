<script setup>

import InteractiveMap from '@/components/InteractiveMap.vue'
import ContentSite from '@/components/ContentSite.vue'
import FormContact from '@/components/block/FormContact.vue'
import SidebarContacts from '@/components/SidebarContacts.vue'

</script>

<template>
	<InteractiveMap/>
	<ContentSite>
		<div class="container clearfix">
			<div class="row gutter-40 col-mb-80">
				<div class="postcontent col-lg-9">
					<h3>Send us an Email</h3>
					<div class="form-widget">
						<div class="form-result"></div>
					<FormContact/>
					</div>
				</div>

				<SidebarContacts/>
			</div>
		</div>
	</ContentSite>
</template>

<style scoped>

</style>
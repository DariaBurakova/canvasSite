<script setup>
import { useServices } from '@/stores/services.js'

const props = defineProps(['name', 'modelValue']);
const emit = defineEmits(['change:modelValue']);

const {services} = useServices();
</script>

<template>
	<div class="col-md-4 form-group">
		<label for="template-contactform-service">{{ name }}</label>
		<select
			:value="props.modelValue.trim()"
			@change="emit('update:modelValue', $event.target.value.trim())"
			id="template-contactform-service" name="template-contactform-service" class="sm-form-control">
			<option
				v-for="(item, index) in services"
				:key="index"
				:value="item.val"
			>
				{{ item.name }}
			</option>
		</select>
	</div>
</template>

<style scoped>

</style>
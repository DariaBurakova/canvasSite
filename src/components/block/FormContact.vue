<script setup>
import InputTag from '@/components/UI/InputTag.vue'
import { useContacts } from '@/stores/contacts.js'
import TextArea from '@/components/UI/TextArea.vue'
import SelectList from '@/components/UI/SelectList.vue'
import { useServices } from '@/stores/services.js'

const {inputValue, handleUpdateInput} = useContacts();
const {valueItem, handleValueItem} = useServices();
</script>

<template>
	<form class="mb-0" id="template-contactform" name="template-contactform" action="include/form.php" method="post">

		<div class="form-process">
			<div class="css3-spinner">
				<div class="css3-spinner-scaler"></div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4 form-group">
				<label for="name">Name <small>*</small></label>
				<InputTag
					:type="'text'"
					:modelValue="inputValue.name"
					@update:modelValue="name => handleUpdateInput('name', name)"
					class="required sm-form-control input-block-level"
				/>
			</div>

			<div class="col-md-4 form-group">
				<label for="template-contactform-email">Email <small>*</small></label>
				<InputTag
					:type="'email'"
					:modelValue="inputValue.email"
					@update:modelValue="email => handleUpdateInput('email', email)"
					class="required sm-form-control input-block-level"
				/>
			</div>

			<div class="col-md-4 form-group">
				<label for="template-contactform-phone">Phone</label>
				<InputTag
					:type="'text'"
					:modelValue="inputValue.phone"
					@update:modelValue="phone => handleUpdateInput('phone', phone)"
					class="required sm-form-control input-block-level"
				/>
			</div>

			<div class="w-100"></div>

			<div class="col-md-8 form-group">
				<label for="template-contactform-subject">Subject <small>*</small></label>
				<InputTag
					:type="'text'"
					:modelValue="inputValue.subject"
					@update:modelValue="subject => handleUpdateInput('subject', subject)"
					class="required sm-form-control input-block-level"
				/>
			</div>

			<SelectList
				:modelValue="valueItem"
				@update:modelValue="handleValueItem"
				:name="'Services'"
				class="col-md-4 form-group"
			/>

			<div class="w-100"></div>

			<div class="col-12 form-group">
				<label for="template-contactform-message">Message <small>*</small></label>
				<TextArea
					:modelValue="inputValue.message" @update:modelValue="message => handleUpdateInput('message', message)"
					class="required sm-form-control input-block-level short-textarea"
					rows="6" cols="30"
				/>
			</div>

			<div class="col-12 form-group d-none">
				<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
			</div>

			<div class="col-12 form-group">
				<button class="button button-3d m-0" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
			</div>
		</div>

		<input type="hidden" name="prefix" value="template-contactform-">

	</form>
</template>

<style scoped>

</style>
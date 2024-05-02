<script setup>
import InputTag from '@/components/UI/InputTag.vue'
import { useForm } from '@/stores/form.js'
import TextArea from '@/components/UI/TextArea.vue'

const {inputValue, handleUpdateInput} = useForm();
</script>

<template>
  <div>

    <div class="widget quick-contact-widget form-widget clearfix">
      <h4>Quick Quotation Form</h4>
      <div class="form-result"></div>
      <form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" class="quick-contact-form mb-0">
        <div class="form-process">
          <div class="css3-spinner">
            <div class="css3-spinner-scaler"></div>
          </div>
        </div>
        <InputTag
          :type="'text'"
          :placeholder="'Full Name'"
          :modelValue="inputValue.name"
          @update:modelValue="name => handleUpdateInput('name', name)"
          class="required sm-form-control input-block-level"
        />
        <InputTag
          :type="'email'"
          :placeholder="'Email Address'"
          :modelValue="inputValue.email" @update:modelValue="email => handleUpdateInput('email', email)"
          class="required sm-form-control email input-block-level"
        />

        <TextArea
        :placeholder="'Message'"
        :modelValue="inputValue.message" @update:modelValue="message => handleUpdateInput('message', message)"
        class="required sm-form-control input-block-level short-textarea"
        rows="4" cols="30"
        />


        <button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" class="button button-small button-3d m-0" value="submit">Send Email</button>
      </form>

    </div>

  </div>
</template>

<style scoped>

</style>
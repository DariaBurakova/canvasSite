<script setup>
const props = defineProps(['modelValue', 'placeholder']);
const emit = defineEmits(["update:modelValue"])
</script>

<template>
<textarea :value="props.modelValue.trim()" @input="emit('update:modelValue', $event.target.value.trim())" :placeholder="placeholder"></textarea>
</template>

<style scoped>

</style>
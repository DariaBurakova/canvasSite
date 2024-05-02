<script setup>
const props = defineProps(['modelValue', 'placeholder', "type"]);
const emit = defineEmits(["update:modelValue"])
</script>

<template>
<input :value="props.modelValue.trim()" @input="emit('update:modelValue', $event.target.value.trim())" :placeholder="placeholder" :type="type">
</template>

<style scoped>

</style>
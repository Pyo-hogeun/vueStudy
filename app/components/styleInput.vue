<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null):void
}>()

const onInput = ($event: Event) => {
  console.log('onINPUT!', ($event.target as HTMLInputElement).value);
  emit('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>
<template>
  <input
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="onInput"
  />
</template>
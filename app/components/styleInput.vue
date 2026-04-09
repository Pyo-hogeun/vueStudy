<script setup lang="ts">
const props = defineProps<{
  mode: string
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
  <div :class="mode === 'light'?'input-wrap':'input-wrap darken'">
    <input
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="onInput"
    />
  </div>
</template>
<style scoped lang="scss">
input{
  height: 2.5em;
  font-size: 1em;
  border-radius: 0.4em;
  border: 1px solid gray;
  padding: 0 0.5em;
  background-color: gray;
}
.input-wrap{
  margin: 1em;
  &.darken{
    input{
      background-color: white;
    }
  }
}
</style>
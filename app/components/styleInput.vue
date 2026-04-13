<script setup lang="ts">
const props = defineProps<{
  mode: 'light' | 'dark'
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
  <div class="input-wrap">
    <input
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :class="props.mode === 'dark' ? 'is-dark' : 'is-light'"
      class="w-full rounded-lg border border-slate-300 px-3 py-2"
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
}

.is-light{
  background-color: #ffffff;
  color: #0f172a;
}

.is-dark{
  background-color: #1e293b;
  color: #f8fafc;
  border-color: #475569;
}
.input-wrap{
  margin: 1em;
}
</style>

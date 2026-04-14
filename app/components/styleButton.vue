<script setup lang="ts">
const props = defineProps<{
  text?: string
}>();
const emit = defineEmits<{
  (e: 'click'):void
}>();
const mode = useMode();
const handleClick = () => {
  emit('click');
}
</script>
<template>
  <button class="style-button" :class="mode==='dark'?'is-dark':''" type="button" @click="handleClick">
    <slot>{{ text }}</slot>
  </button>
</template>
<style scoped lang="scss">
.style-button{
  padding: 0.5em 1em;
  border-radius: 0.4em;
  border: 1px solid gray;
  background-color: #ffffff;
  color: #0f172a;
  &.is-dark{
    background-color: #1e293b;
    color: #f8fafc;
    border-color: #475569;
  }
}
</style>
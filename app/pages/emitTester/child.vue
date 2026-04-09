<template>
  <h3>자식</h3>
  <p>여기에 emit(방출)을 정의한다</p>

  <div>
    <button @click="handleCompleteState">설정완료</button>
    <button @click="handleResetState">재설정</button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'setup-complete', value: string | number):void
  (e: 'setup-reset', value: string | number):void
}>();
const handleCompleteState = () => {
  console.log('설정완료 - 자식');
  emit('setup-complete', 12345);
}
const handleResetState = () => {
  console.log('재설정 - 자식');
  emit('setup-reset', 1);
}
</script>
<style scoped lang="scss">
button{
  font-size: 1em;
  margin: 0.2em;
}
</style>

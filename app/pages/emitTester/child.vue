<template>
  <h3 class="text-lg">자식</h3>
  <p>여기에 emit(방출)을 정의한다</p>

  <div class="button-group">
    <StyleButton 
      @click="handleCompleteState"
      text="설정완료"
    />
    <StyleButton
      @click="handleResetState"
      text="재설정"
    />
    <StyleButton
      text="스타일버튼 테스트"
      @click="handleTestStyleButton"
    />
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

  const handleTestStyleButton = () => {
    console.log('이건 공통스타일 버튼 활용에 대한 테스트입니다.');
  }
</script>
<style scoped lang="scss">
  .button-group{
    display: flex;
    gap: 4px;
    margin: 10px 0;
  }
</style>

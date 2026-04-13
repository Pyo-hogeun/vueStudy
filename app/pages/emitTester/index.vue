<template>
  <h2 class="text-xl font-bold">Emit / props 관련 스터디 페이지</h2>
  <child @setup-complete="handleComplete" @setup-reset="handleReset" />
  <styleInput v-model="name" :mode="mode" placeholder="안녕하세요123"/>
  <!-- 내부표현 ⬇️ -->
  <!-- <styleInput :modelValue="name" @update:modelValue="name = $event" placeholder="안녕하세요123"/> -->
  
  <p>이름 : {{ name }}</p>
</template>
<script setup>
import StyleInput from '~/components/styleInput.vue';
import Child from './child.vue';
import { ref } from 'vue';

// const mode = useState('mode', () => 'light')
const mode = useMode();

const handleComplete = (e) => {
  console.log('설정완료 - 부모', e);
}
const handleReset = (e) => {
  console.log('재설정 - 부모', e);
}
const name = ref('');
</script>

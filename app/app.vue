
<script setup lang="ts">
  import { ref } from 'vue'
  type mode = 'light' | 'dark';
  let mode:mode = ref('light');
  const changeMode = () => {
    console.log('click', mode);
    if(mode === 'light'){
      mode = 'dark';
      return
    } else {
      mode = 'light';
    }
  }
</script>
<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 layout">
    <NuxtRouteAnnouncer />
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <h1 class="text-xl font-bold">Vue.js 스터디 미니 프로젝트</h1>
        <nav class="flex gap-2 text-sm font-medium">
          <NuxtLink to="/" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">홈</NuxtLink>
          <NuxtLink to="/todos" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">상태관리</NuxtLink>
          <NuxtLink to="/posts/aaa" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">비동기</NuxtLink>
        </nav>
      </div>
      <div class="mode">
        <button @click="changeMode">모드변환 {{ mode }}</button>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
  .layout{
    height: 100%;
    width: 100%;
    padding: 2em;
    h1{
      margin: 0 0 2em 0;
    }
  }
  header nav{
    display: flex;
    gap: 10px;
    justify-content: center;
    a{
      font-size: 20px;
      color: var(--blue);
    }
  }
</style>

<script setup lang="ts">
import { ref } from 'vue'

type Mode = 'light' | 'dark'

const mode = ref<Mode>('light')

const changeMode = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div
    :class="[
      'min-h-screen layout transition-colors',
      mode === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-900'
    ]"
  >
    <NuxtRouteAnnouncer />
    <header :class="mode === 'dark' ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'" class="border-b">
      <div class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <h1 class="text-xl font-bold">Vue.js 스터디 미니 프로젝트</h1>
        <nav class="flex gap-2 text-sm font-medium">
          <NuxtLink to="/" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">홈</NuxtLink>
          <NuxtLink to="/todos" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">상태관리</NuxtLink>
          <NuxtLink to="/posts/aaa" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">비동기</NuxtLink>
        </nav>
      </div>
      <div class="mode px-4 pb-4">
        <button
          @click="changeMode"
          class="rounded border px-3 py-2 text-sm"
          :class="mode === 'dark' ? 'border-slate-500 bg-slate-700 text-slate-100' : 'border-slate-300 bg-white text-slate-900'"
        >
          모드변환 {{ mode }}
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
  padding: 2em;

  h1 {
    margin: 0 0 2em 0;
  }
}

header nav {
  display: flex;
  gap: 10px;
  justify-content: center;

  a {
    font-size: 20px;
    color: var(--blue);
  }
}
</style>

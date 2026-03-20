<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <NuxtRouteAnnouncer />
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <h1 class="text-xl font-bold">Vue.js 스터디 미니 프로젝트</h1>
        <nav class="flex gap-2 text-sm font-medium">
          <NuxtLink to="/" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">홈</NuxtLink>
          <NuxtLink to="/todos" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">상태관리</NuxtLink>
          <NuxtLink to="/posts" class="rounded px-3 py-2 hover:bg-slate-100" active-class="bg-slate-900 text-white">비동기</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>

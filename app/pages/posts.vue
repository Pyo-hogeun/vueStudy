<script setup lang="ts">
const postsQuery = usePosts()
</script>

<template>
  <section class="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
    <header>
      <h2 class="text-xl font-bold">Vue Query 비동기 실습</h2>
      <p class="text-sm text-slate-500">jsonplaceholder API에서 게시글 5개를 가져옵니다.</p>
    </header>

    <p v-if="postsQuery.isLoading.value" class="rounded-lg bg-slate-100 px-4 py-3 text-sm">로딩 중...</p>
    <p v-else-if="postsQuery.isError.value" class="rounded-lg bg-rose-100 px-4 py-3 text-sm text-rose-700">
      데이터를 불러오는 중 오류가 발생했습니다.
    </p>

    <ul v-else class="space-y-3">
      <li v-for="post in postsQuery.data.value" :key="post.id" class="rounded-lg border border-slate-200 p-4">
        <h3 class="mb-1 font-semibold">{{ post.title }}</h3>
        <p class="text-sm text-slate-600">{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template>

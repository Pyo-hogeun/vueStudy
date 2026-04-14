<script setup lang="ts">
  const postsQuery = usePosts();
  const mode = useMode();
  const route = useRoute();
  console.log('test', route);
</script>

<template>
  <section class="space-y-4 rounded-2xl p-6 shadow-sm" :class="mode === 'dark' ? 'border-slate-700 bg-slate-800 mode-dark' : 'border-slate-200 bg-white'">
    <header>
      <h2 class="text-xl font-bold">Vue Query 비동기 실습</h2>
      <p class="text-sm" :class="mode === 'dark' ? 'text-slate-400' : 'text-slate-500'">jsonplaceholder API에서 게시글 5개를 가져옵니다.</p>
    </header>

    <p v-if="postsQuery.isLoading.value" class="rounded-lg bg-slate-100 px-4 py-3 text-sm" :class="mode === 'dark' ? 'bg-slate-600' : 'bg-slate-100'">로딩 중...</p>
    <p v-else-if="postsQuery.isError.value" class="rounded-lg bg-rose-100 px-4 py-3 text-sm text-rose-700" :class="mode === 'dark' ? 'bg-rose-900 text-rose-300' : 'bg-rose-100 text-rose-700'">
      데이터를 불러오는 중 오류가 발생했습니다.
    </p>

    <ul v-else class="space-y-3">
      <li v-for="post in postsQuery.data.value" :key="post.id" class="rounded-lg border border-slate-200 p-4" :class="mode === 'dark' ? 'border-slate-600' : 'border-slate-200'">
        <h3 class="mb-1 font-semibold">{{ post.title }}</h3>
        <p class="text-sm" :class="mode === 'dark' ? 'text-slate-400' : 'text-slate-600'">{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template> 
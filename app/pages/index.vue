<template>
  <section class="space-y-6">
    <div class="rounded-2xl bg-white p-6 shadow-sm">
      <p class="mb-2 text-sm font-semibold text-indigo-600">Beginner Friendly</p>
      <h2 class="mb-3 text-2xl font-bold">Nuxt로 배우는 Vue 실전 스터디</h2>
      <p class="text-slate-600">
        이 프로젝트는 라우팅, 상태관리, 비동기 데이터 조회를 한 번에 연습할 수 있도록 만든 미니 학습 템플릿입니다.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <article class="rounded-xl bg-white p-5 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold">1) 라우트</h3>
        <p class="text-sm text-slate-600">파일 기반 라우팅으로 `/`, `/todos`, `/posts` 페이지를 이동해보세요.</p>
      </article>
      <article class="rounded-xl bg-white p-5 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold">2) 상태관리</h3>
        <p class="text-sm text-slate-600">Pinia 스토어로 Todo를 추가하고 완료 상태를 토글해보세요.</p>
      </article>
      <article class="rounded-xl bg-white p-5 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold">3) 비동기</h3>
        <p class="text-sm text-slate-600">Vue Query로 API 호출 결과와 로딩/에러 상태를 관리해보세요.</p>
      </article>
    </div>
  </section>
</template>

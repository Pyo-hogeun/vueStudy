<script setup lang="ts">
  const todoStore = useTodoStore()
  const mode = useMode();
</script>

<template>
  <section 
    class="space-y-4 rounded-2xl p-6 shadow-sm"
    :class="mode === 'dark' ? 'border-slate-700 bg-slate-800 mode-dark' : 'border-slate-200 bg-white'">
    <header class="flex items-center justify-between">
      <h2 class="text-xl font-bold">Pinia Todo 실습</h2>
      <p class="rounded-full px-3 py-1 text-sm font-medium" :class="mode==='dark'?'bg-slate-700':'bg-slate-100'">진행률: {{ todoStore.progressText }}</p>
    </header>

    <div class="flex gap-2">
      <input
        v-model="todoStore.newTodo"
        :mode="mode"
        type="text"
        class="flex-1 rounded-lg border border-slate-300 px-3 py-2 grow-2"
        :class="mode==='light'?'':'bg-black border-slate-100'"
        placeholder="새 스터디 할 일을 입력하세요"
        @keyup.enter="todoStore.addTodo"
      >

      <button class="rounded-lg basis-24 bg-indigo-600 px-4 py-2 font-medium text-white" @click="todoStore.addTodo">
        추가
      </button>
    </div>

    <ul class="space-y-2">
      <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        class="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3"
      >
        <label class="flex cursor-pointer items-center gap-2">
          <input type="checkbox" :checked="todo.done" @change="todoStore.toggleTodo(todo.id)">
          <span :class="{ 'text-slate-400 line-through': todo.done }">{{ todo.title }}</span>
        </label>
      </li>
    </ul>

    <p class="text-sm text-slate-500">완료된 할 일: {{ todoStore.doneCount }}개</p>
  </section>
</template>


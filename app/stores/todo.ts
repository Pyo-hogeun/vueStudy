export interface StudyTodo {
  id: number
  title: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    newTodo: '',
    todos: [
      { id: 1, title: 'Vue 기초 문법 읽기', done: false },
      { id: 2, title: 'Nuxt 라우팅 페이지 만들기', done: false }
    ] as StudyTodo[]
  }),
  getters: {
    doneCount: (state) => state.todos.filter((todo) => todo.done).length,
    progressText: (state) => `${state.todos.filter((todo) => todo.done).length} / ${state.todos.length}`
  },
  actions: {
    addTodo() {
      const trimmed = this.newTodo.trim()

      if (!trimmed) {
        return
      }

      this.todos.unshift({
        id: Date.now(),
        title: trimmed,
        done: false
      })
      this.newTodo = ''
    },
    toggleTodo(id: number) {
      const target = this.todos.find((todo) => todo.id === id)

      if (target) {
        target.done = !target.done
      }
    }
  }
})

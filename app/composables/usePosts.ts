import { useQuery } from '@tanstack/vue-query'

interface StudyPost {
  id: number
  title: string
  body: string
}

export const usePosts = () => {
  return useQuery({
    queryKey: ['study-posts'],
    queryFn: () => $fetch<StudyPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
  })
}

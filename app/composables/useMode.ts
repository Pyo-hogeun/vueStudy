type Mode = 'light' | 'dark'

export const useMode = () => {
  return useState<Mode>('mode', () => 'light')
}
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  /**
   * Current name of the theme.
   */
  const savedTheme = ref('lightTheme')
  const previousTheme = $ref(new Set<string>())

  const usedTheme = computed(() => Array.from(previousTheme))
  const otherTheme = computed(() => usedTheme.value.filter(name => name !== savedTheme.value))

  /**
   * Changes the current name of the theme and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewTheme(name: string) {
    if (savedTheme)
      previousTheme.add(savedTheme.value)

    savedTheme.value = name
  }

  return {
    setNewTheme,
    otherTheme,
    savedTheme,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))

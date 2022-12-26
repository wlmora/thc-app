<script setup lang="ts">
const themeStore = useThemeStore()
let theme = $ref(themeStore.savedTheme)

watch(() => themeStore.savedTheme, () => {
  theme = themeStore.savedTheme
})
</script>

<template>
  <v-app id="thc" :theme="theme">
    <v-main class="mx-auto text-center">
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

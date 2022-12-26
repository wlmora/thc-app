<script setup lang="ts">
/* const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const themeStore = useThemeStore()
let themes = $ref(themeStore.savedTheme)
const toggleTheme = () => {
  themes = themes === 'lightTheme' ? 'darkTheme' : 'lightTheme'
  themeStore.setNewTheme(themes)
}

const dialog = ref(false) */
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const themeStore = useThemeStore()
const themes = $ref(themeStore.savedTheme)
const toggleTheme = () => {
  themes = themes === 'lightTheme' ? 'darkTheme' : 'lightTheme'
  themeStore.setNewTheme(themes)
}
</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <v-container class="text-xs-center">
      <v-btn icon="mdi-translate-variant" :title="t('index.button.toggle_langs')" @click="toggleLocales()" />
      <v-btn
        size="small"
        :icon="themes === 'lightTheme' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        :title="themes === 'lightTheme' ? t('index.button.toggle_dark') : t('index.button.toggle_light')"
        @click="toggleTheme()"
      />
      <v-btn
        icon="mdi-information-outline" :title="t('index.button.about')" @click="$router.push({ path: '/about' })"
      />
    </v-container>
  </v-footer>
</template>

<style scoped>
  .v-btn--variant-elevated {
    box-shadow: none !important;
    background: none;
  }
  .v-footer, .v-container{
    padding-top: 8px !important;
    padding-right: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
  }
</style>

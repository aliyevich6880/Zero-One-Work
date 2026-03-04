<template>
  <a-config-provider :theme="antTheme">
    <router-view />
  </a-config-provider>

</template>
<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const { locale } = useI18n()
const appStore = useAppStore()

// Til o'zgarganda i18n yangilanadijhgfcgtyhu
watch(() => appStore.currentLang, (lang) => {
  locale.value = lang
}, { immediate: true })

const antTheme = {
  token: {
    colorPrimary:       '#4FD1C5',
    colorPrimaryHover:  '#38B2AC',
    borderRadius:       12,
    borderRadiusLG:     16,
    borderRadiusSM:     8,
    fontFamily:         "'Plus Jakarta Sans', sans-serif",
    colorBgContainer:   '#ffffff',
    colorBorder:        '#E2E8F0',
    colorText:          '#1A202C',
    colorTextSecondary: '#718096',
  }
}
</script>
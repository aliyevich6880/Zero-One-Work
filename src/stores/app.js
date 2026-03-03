import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {

  // --- State ---
  const currentLang   = ref(localStorage.getItem('lang')      || 'en')
  const sidebarCollapsed = ref(false)

  // --- Actions ---
  function setLang(lang) {
    currentLang.value = lang
    localStorage.setItem('lang', lang)
  }

  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  return {
    currentLang, sidebarCollapsed,
    setLang, toggleSidebar
  }
})
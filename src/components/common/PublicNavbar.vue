<template>
<header
  :class="[
    'fixed top-0 left-0 md:left-[calc(16rem+1px)] right-0 z-50 transition-all duration-300',
    'bg-[#F8F9FA]'
  ]"
>
    <nav class="w-full px-3 sm:px-4 md:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- LEFT -->
        <div class="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <button
            class="md:hidden w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white text-[#1A202C] flex items-center justify-center"
            @click="$emit('toggle-sidebar')"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="w-5 h-5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div class="flex flex-col gap-1 min-w-0">
          <span class="hidden min-[361px]:flex items-center whitespace-nowrap text-xs sm:text-sm">
            <p class="px-[4px] py-[2px] font-medium text-gray-700 !m-0">
              {{ $t("nav.pages") }}
            </p>
            <p class="px-[2px] py-[2px] font-bold !m-0">/</p>
            <!-- Dinamik page nomi -->
            <p class="px-[4px] py-[2px] !m-0">{{ $t(currentPageName) }}</p>
          </span>
          <!-- Dinamik h3 -->
          <h3 class="pl-[4px] !m-0 whitespace-nowrap !font-semibold text-sm sm:text-base">
            {{ $t(currentPageName) }}
          </h3>
          </div>
        </div>
        <!-- RIGHT -->
        <div class="flex items-center gap-1.5 sm:gap-3">
          <!-- Search - faqat lg da -->
          <div class="hidden lg:block">
            <a-input
              :placeholder="$t('nav.search')"
              class="custom-search-input w-[220px]"
            >
              <template #prefix>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A0AEC0"
                  stroke-width="2"
                  style="width: 16px; height: 16px"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </template>
            </a-input>
          </div>

          <!-- Language -->
          <a-dropdown placement="bottomCenter">
            <span
              class="flex items-center gap-[6px] px-2.5 sm:px-3 py-2 text-[10px] font-semibold text-black uppercase tracking-[0.5px] rounded-lg cursor-pointer select-none transition-all duration-200 hover:bg-gray-100"
            >
              <GlobalOutlined class="text-[12px]" />
              {{ currentLang.toUpperCase() }}
            </span>
            <template #overlay>
              <a-menu @click="changeLang">
                <a-menu-item key="en">{{ $t("nav.langEnglish") }}</a-menu-item>
                <a-menu-item key="uz">{{ $t("nav.langUzbek") }}</a-menu-item>
                <a-menu-item key="ru">{{ $t("nav.langRussian") }}</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <!-- Sign Out   -->
          <div class="hidden lg:flex items-center gap-4">
            <a-button
            danger ghost
              class="px-4 py-2 text-[10px] font-semibold text-[#E53E3E] uppercase tracking-[0.5px] rounded-lg cursor-pointer select-none transition-all duration-200 hover:bg-[#E53E3E] hover:text-white"
              @click="openLogoutConfirm"
            >
              {{ $t("nav.logout") }}
            </a-button>
            <setting-outlined class="icon-style" />
            <bell-outlined class="icon-style" />
          </div>

          <!-- Burger -->
          <button
            type="text"
            class="lg:hidden cursor-pointer"
            @click="toggleMobileNav"
          >
            <!-- Burger -->
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="w-5 h-5 transition-all duration-300"
            >
              <template v-if="!isMobileNavOpen">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </template>
              <template v-else>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </template>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu - animatsiya bilan -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileNavOpen"
          class="lg:hidden pb-3 border-t border-[#E2E8F0] pt-3 flex flex-col gap-3"
        >
          <!-- Search -->
          <div>
            <a-input
              :placeholder="$t('nav.search')"
              class="custom-search-input w-full"
            >
              <template #prefix>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A0AEC0"
                  stroke-width="2"
                  style="width: 16px; height: 16px"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </template>
            </a-input>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <a-button
              type="text"
              danger
              size="small"
              @click="openLogoutConfirm"
            >
              {{ $t("nav.logout") }}
            </a-button>
            <setting-outlined class="icon-style" />
            <bell-outlined class="icon-style" />
          </div>
        </div>
      </Transition>

      <a-modal
        v-model:open="isLogoutConfirmOpen"
        :footer="null"
        :closable="false"
        centered
        width="380px"
      >
        <div class="py-2">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F5]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E53E3E"
              stroke-width="2"
              class="h-6 w-6"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <path d="M16 17l5-5-5-5" />
              <path d="M21 12H9" />
            </svg>
          </div>
          <h3 class="mb-2 text-center text-[18px] font-bold text-[#1A202C]">
            {{ $t("logoutModal.title") }}
          </h3>
          <p class="mb-6 text-center text-[14px] text-[#718096]">
            {{ $t("logoutModal.description") }}
          </p>
          <div class="flex items-center justify-center gap-3">
            <a-button
              @click="isLogoutConfirmOpen = false"
            >
              {{ $t("logoutModal.cancel") }}
            </a-button>
            <a-button
              type="primary"
              danger
              @click="confirmLogout"
            >
              {{ $t("logoutModal.confirm") }}
            </a-button>
          </div>
        </div>
      </a-modal>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/stores/app";
import { useAuthStore } from "@/stores/auth";
import {
  GlobalOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
defineEmits(["toggle-sidebar"]);
const appStore = useAppStore();
const authStore = useAuthStore();
const router = useRouter();
const { locale } = useI18n();
const currentLang = computed(() => appStore.currentLang);
const isMobileNavOpen = ref(false);
const isLogoutConfirmOpen = ref(false);

const route = useRoute();
const isProfileRoute = computed(() => route.name === "Profile");

// Route nomini chiroyli ko'rinishda chiqarish
const currentPageName = computed(() => {
  const names = {
    Dashboard: "nav.dashboard",
    Tables: "nav.tables",
    Billing: "nav.billing",
    RTL: "nav.rtl",
    Profile: "nav.profile",
  };
  return names[route.name] || "nav.dashboard";
});
function changeLang({ key }) {
  appStore.setLang(key);
  locale.value = key;
}

function toggleMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value;
}

function handleLogout() {
  authStore.logout();
  isMobileNavOpen.value = false;
  router.push("/auth/login");
}

function openLogoutConfirm() {
  isLogoutConfirmOpen.value = true;
}

function confirmLogout() {
  isLogoutConfirmOpen.value = false;
  handleLogout();
}
</script>
<style scoped>
.custom-search-input {
  border-radius: 15px; /* Yumaloqlik */
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
}

/* Fokus bo'lgandagi holat */
.custom-search-input:focus,
.custom-search-input:hover {
  border-color: #40a9ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}
</style>

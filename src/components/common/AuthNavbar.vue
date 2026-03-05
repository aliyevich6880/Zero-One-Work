<template>
  <header class="w-full">
    <nav
      class="z-50 w-full mx-auto rounded-lg bg-white lg:bg-transparent px-3 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-[1000px] mx-auto min-h-[64px] lg:min-h-[70px] flex items-center justify-between gap-2 sm:gap-3 lg:gap-8"
      >
        <router-link
          to="/"
          class="flex items-center gap-1.5 sm:gap-2 lg:gap-3 no-underline shrink-0"
        >
          <div
            class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8795 0H1.1219C0.502293 0 0 0.502293 0 1.1219V10.5297C0 11.1493 0.502293 11.6516 1.1219 11.6516H5.17558V20.8795C5.17522 21.1769 5.29311 21.4623 5.50329 21.6727C5.71347 21.8831 5.99869 22.0014 6.29611 22.0014H15.7039C16.3235 22.0014 16.8258 21.4991 16.8258 20.8795V11.6557H20.8795C21.1769 11.6557 21.4621 11.5375 21.6723 11.327C21.8825 11.1166 22.0004 10.8312 22 10.5338V1.1219C22.0004 0.824482 21.8825 0.539118 21.6723 0.328681C21.4621 0.118244 21.1769 0 20.8795 0ZM1.30042 1.30179H10.3498V10.3512H1.30042V1.30179ZM15.5254 20.701H6.476V11.6557H15.5254V20.701ZM20.6996 10.3512H11.6502V1.30179H20.6996V10.3512Z"
                fill="white"
              />
              <path
                d="M7.44831 7.32455C7.70457 7.56505 8.10548 7.55869 8.35399 7.31018C8.60249 7.06167 8.60885 6.66077 8.36835 6.40451L6.2907 4.32686C6.03594 4.07448 5.62542 4.07448 5.37066 4.32686L3.28752 6.40451C3.11436 6.56701 3.04345 6.81092 3.10248 7.04093C3.16151 7.27094 3.34112 7.45055 3.57114 7.50959C3.80115 7.56862 4.04506 7.4977 4.20756 7.32455L5.82519 5.70692L7.44831 7.32455Z"
                fill="white"
              />
              <path
                d="M14.5573 7.32455L16.1749 5.70692L17.7925 7.32455C18.0488 7.56505 18.4497 7.55869 18.6982 7.31018C18.9467 7.06167 18.9531 6.66077 18.7126 6.40451L16.6349 4.32686C16.3801 4.07448 15.9696 4.07448 15.7149 4.32686L13.6372 6.40451C13.3967 6.66077 13.4031 7.06167 13.6516 7.31018C13.9001 7.55869 14.301 7.56505 14.5573 7.32455Z"
                fill="white"
              />
              <path
                d="M9.38176 14.6767C9.12514 14.4366 8.72423 14.4435 8.47609 14.6924C8.22795 14.9413 8.22219 15.3422 8.46309 15.5981L10.5407 17.6744C10.6626 17.7966 10.8281 17.8654 11.0008 17.8654C11.1734 17.8654 11.3389 17.7966 11.4608 17.6744L13.5384 15.5981C13.703 15.4338 13.7674 15.1941 13.7074 14.9694C13.6474 14.7446 13.472 14.569 13.2474 14.5087C13.0228 14.4483 12.783 14.5123 12.6184 14.6767L11.0008 16.2957L9.38176 14.6767Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            class="text-[9px] sm:text-[11px] md:text-[12px] font-bold text-[white] uppercase tracking-[1px] whitespace-nowrap hidden sm:block"
          >
            Purity UI Dashboard
          </span>
        </router-link>

        <div
          class="hidden lg:flex items-center gap-4 flex-1 justify-center min-w-0"
        >
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-[6px] py-2 text-[13px] font-medium text-white no-underline rounded-lg transition-all duration-200 hover:text-white/70"
            active-class="!text-white !font-semibold"
          >
            <span
              v-html="link.icon"
              class="flex items-center text-white"
            ></span>
            <span class="uppercase tracking-[0.5px] text-[10px]">{{
              $t(link.label)
            }}</span>
          </router-link>
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a-dropdown placement="bottomCenter">
            <span
              class="flex items-center gap-[6px] px-3 py-2 text-[10px] font-semibold text-white uppercase tracking-[0.5px] rounded-lg cursor-pointer select-none transition-all duration-200 hover:bg-white/10"
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

          <button
            class="flex items-center gap-2 shrink-0 rounded-full px-6 py-2.5 bg-white text-[13px] font-semibold tracking-[0.3px] text-[#1A202C] border-none cursor-pointer hover:bg-white/90 transition-colors"
          >
            <span>{{ $t("nav.freeDownload") }}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 shrink-0"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </button>
        </div>

        <div class="flex lg:hidden items-center gap-1.5">
          <a-dropdown placement="bottomRight">
            <button
              class="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-[#1A202C] border-none cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <GlobalOutlined class="text-[16px]" />
            </button>
            <template #overlay>
              <a-menu @click="changeLang">
                <a-menu-item key="en">{{ $t("nav.langEnglish") }}</a-menu-item>
                <a-menu-item key="uz">{{ $t("nav.langUzbek") }}</a-menu-item>
                <a-menu-item key="ru">{{ $t("nav.langRussian") }}</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <button
            class="flex items-center gap-1.5 shrink-0 rounded-full px-3 py-2 bg-white text-[12px] font-semibold tracking-[0.3px] text-[#1A202C] border-none cursor-pointer hover:bg-white/90 transition-colors"
          >
            <span class="hidden sm:inline">{{ $t("nav.freeDownload") }}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 shrink-0"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </button>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="flex items-center justify-center w-9 h-9 rounded-lg text-[#1A202C] bg-transparent border-none cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <MenuOutlined v-if="!mobileMenuOpen" class="text-[18px]" />
            <CloseOutlined v-else class="text-[18px]" />
          </button>
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-[78px] left-4 right-4 bg-white shadow-xl border border-[#E2E8F0] z-[90] rounded-xl"
      >
        <div class="flex flex-col p-4 gap-3">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-2 text-[#1A202C] font-semibold py-2 border-b border-[#E2E8F0] no-underline hover:text-[#4FD1C5] transition-colors"
            @click="mobileMenuOpen = false"
          >
            <span v-html="link.icon" class="flex items-center"></span>
            {{ $t(link.label) }}
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/stores/app";
import {
  GlobalOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";

const route = useRoute();
const appStore = useAppStore();
const { locale } = useI18n();
const currentLang = computed(() => appStore.currentLang);
const mobileMenuOpen = ref(false);

const navLinks = [
  {
    to: "/dashboard",
    label: "nav.dashboard",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_92_22)">
<path d="M9.47247 2.92779C9.48545 2.92022 9.49621 2.90939 9.50369 2.89636C9.51117 2.88334 9.51511 2.86858 9.51511 2.85356C9.51511 2.83854 9.51117 2.82379 9.50369 2.81076C9.49621 2.79774 9.48545 2.7869 9.47247 2.77933L6.19095 0.872811C5.98098 0.751106 5.7426 0.687012 5.49991 0.687012C5.25722 0.687012 5.01883 0.751106 4.80886 0.872811L1.52798 2.77933C1.51501 2.7869 1.50425 2.79774 1.49677 2.81076C1.48929 2.82379 1.48535 2.83854 1.48535 2.85356C1.48535 2.86858 1.48929 2.88334 1.49677 2.89636C1.50425 2.90939 1.51501 2.92022 1.52798 2.92779L5.45704 5.23908C5.47026 5.24686 5.48532 5.25097 5.50066 5.25097C5.516 5.25097 5.53105 5.24686 5.54427 5.23908L9.47247 2.92779Z" fill="currentColor"/>
<path d="M1.16016 3.51212C1.14705 3.50456 1.13218 3.50059 1.11705 3.50061C1.10192 3.50063 1.08706 3.50465 1.07398 3.51226C1.0609 3.51987 1.05006 3.5308 1.04256 3.54394C1.03505 3.55708 1.03115 3.57197 1.03125 3.58711V7.32302C1.03158 7.50306 1.07903 7.67987 1.16888 7.83587C1.25874 7.99188 1.38787 8.12164 1.54344 8.21226L5.02735 10.3012C5.0404 10.3087 5.05521 10.3127 5.07029 10.3127C5.08537 10.3127 5.10018 10.3087 5.11325 10.3012C5.12631 10.2937 5.13716 10.2828 5.14471 10.2698C5.15225 10.2567 5.15624 10.2419 5.15625 10.2268V5.89238C5.15624 5.87731 5.15226 5.86251 5.14472 5.84946C5.13717 5.83641 5.12633 5.82558 5.11328 5.81804L1.16016 3.51212Z" fill="currentColor"/>
<path d="M5.84375 5.90747V10.2258C5.84377 10.2409 5.84775 10.2557 5.8553 10.2688C5.86285 10.2818 5.8737 10.2927 5.88676 10.3002C5.89982 10.3077 5.91463 10.3117 5.92971 10.3117C5.94479 10.3117 5.9596 10.3077 5.97266 10.3002L9.45635 8.21124C9.61179 8.12074 9.74087 7.99116 9.83076 7.83536C9.92064 7.67955 9.96821 7.50295 9.96875 7.32308V3.58716C9.9687 3.5721 9.96469 3.55732 9.95712 3.5443C9.94956 3.53128 9.9387 3.52047 9.92565 3.51296C9.91259 3.50546 9.89779 3.50151 9.88274 3.50153C9.86768 3.50154 9.85288 3.50551 9.83984 3.51304L5.88672 5.83335C5.8737 5.84087 5.86288 5.85167 5.85534 5.86468C5.8478 5.87768 5.8438 5.89244 5.84375 5.90747Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_92_22">
<rect width="11" height="11" fill="white"/>
</clipPath>
</defs>
</svg>`,
  },
  {
    to: "/dashboard/profile",
    label: "nav.profile",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_92_42)">
<path d="M7.14658 1.38728C6.7285 0.935891 6.14455 0.687317 5.50002 0.687317C4.85205 0.687317 4.26617 0.934387 3.85002 1.38298C3.42936 1.83652 3.2244 2.4529 3.27252 3.11849C3.36791 4.43161 4.36715 5.49982 5.50002 5.49982C6.63289 5.49982 7.63041 4.43183 7.72731 3.11892C7.77607 2.45935 7.56982 1.84425 7.14658 1.38728Z" fill="currentColor"/>
<path d="M9.28137 10.3118H1.71887C1.61989 10.3131 1.52186 10.2923 1.43192 10.251C1.34198 10.2096 1.26239 10.1487 1.19895 10.0727C1.0593 9.90577 1.00301 9.67782 1.04469 9.4473C1.22602 8.4414 1.79192 7.59642 2.68137 7.00323C3.47157 6.47665 4.47252 6.18683 5.50012 6.18683C6.52772 6.18683 7.52867 6.47687 8.31887 7.00323C9.20832 7.5962 9.77422 8.44118 9.95555 9.44708C9.99723 9.67761 9.94094 9.90556 9.80129 10.0725C9.73787 10.1485 9.65829 10.2095 9.56835 10.2509C9.47841 10.2923 9.38037 10.3131 9.28137 10.3118Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_92_42">
<rect width="11" height="11" fill="white"/>
</clipPath>
</defs>
</svg>`,
  },
  {
    to: "/auth/register",
    label: "nav.signUp",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 1.0307C3.03596 1.0307 1.03125 3.03541 1.03125 5.49945C1.03125 7.96349 3.03596 9.9682 5.5 9.9682C7.96404 9.9682 9.96875 7.96349 9.96875 5.49945C9.96875 3.03541 7.96404 1.0307 5.5 1.0307ZM4.42105 3.54051C4.69326 3.25197 5.07633 3.0932 5.5 3.0932C5.92367 3.0932 6.3033 3.25304 6.57658 3.54308C6.85351 3.83699 6.98822 4.23187 6.95643 4.6564C6.89283 5.49945 6.23971 6.18695 5.5 6.18695C4.76029 6.18695 4.10588 5.49945 4.04357 4.65619C4.01199 4.22822 4.14648 3.83205 4.42105 3.54051ZM5.5 9.2807C4.99522 9.28103 4.49551 9.18 4.0305 8.98359C3.5655 8.78718 3.14467 8.4994 2.79297 8.1373C2.9944 7.85005 3.25105 7.60581 3.54793 7.41886C4.09557 7.06781 4.78865 6.87445 5.5 6.87445C6.21135 6.87445 6.90443 7.06781 7.45143 7.41886C7.74855 7.60573 8.00543 7.84997 8.20703 8.1373C7.85536 8.49944 7.43454 8.78725 6.96953 8.98366C6.50451 9.18007 6.00479 9.28108 5.5 9.2807Z" fill="currentColor"/>
</svg>`,
  },
  {
    to: "/auth/login",
    label: "nav.signIn",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 1.0307C3.03596 1.0307 1.03125 3.03541 1.03125 5.49945C1.03125 7.96349 3.03596 9.9682 5.5 9.9682C7.96404 9.9682 9.96875 7.96349 9.96875 5.49945C9.96875 3.03541 7.96404 1.0307 5.5 1.0307ZM4.42105 3.54051C4.69326 3.25197 5.07633 3.0932 5.5 3.0932C5.92367 3.0932 6.3033 3.25304 6.57658 3.54308C6.85351 3.83699 6.98822 4.23187 6.95643 4.6564C6.89283 5.49945 6.23971 6.18695 5.5 6.18695C4.76029 6.18695 4.10588 5.49945 4.04357 4.65619C4.01199 4.22822 4.14648 3.83205 4.42105 3.54051ZM5.5 9.2807C4.99522 9.28103 4.49551 9.18 4.0305 8.98359C3.5655 8.78718 3.14467 8.4994 2.79297 8.1373C2.9944 7.85005 3.25105 7.60581 3.54793 7.41886C4.09557 7.06781 4.78865 6.87445 5.5 6.87445C6.21135 6.87445 6.90443 7.06781 7.45143 7.41886C7.74855 7.60573 8.00543 7.84997 8.20703 8.1373C7.85536 8.49944 7.43454 8.78725 6.96953 8.98366C6.50451 9.18007 6.00479 9.28108 5.5 9.2807Z" fill="currentColor"/>
</svg>`,
  },
];

function changeLang({ key }) {
  appStore.setLang(key);
  locale.value = key;
}

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>

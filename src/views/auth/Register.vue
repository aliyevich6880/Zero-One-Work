<template>
  <div
    :style="{ backgroundImage: `url(${myImage})` }"
    class="top-0 left-0 right-0 mx-auto h-[50vh] bg-cover bg-center"
  >
    <header>
      <nav
        class="z-50 w-full mx-auto rounded-lg bg-transparent px-4 sm:px-6 lg:px-8"
      >
        <div
          class="max-w-[1000px] mx-auto min-h-[64px] lg:min-h-[70px] flex items-center justify-between gap-2 sm:gap-3 lg:gap-8"
        >
          <!-- LOGO -->
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
              class="text-[9px] sm:text-[11px] md:text-[12px] font-bold text-white uppercase tracking-[1px] whitespace-nowrap hidden sm:block"
            >
              Purity UI Dashboard
            </span>
          </router-link>

          <!-- DESKTOP NAV LINKS -->
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
                class="flex items-center shrink-0"
              ></span>
              <span class="uppercase tracking-[0.5px] text-[10px]">{{
                $t(link.label)
              }}</span>
            </router-link>

            <a-dropdown placement="bottomCenter">
              <span
                class="flex items-center gap-[6px] px-4 py-2 text-[10px] font-semibold text-white uppercase tracking-[0.5px] rounded-lg cursor-pointer select-none transition-all duration-200 hover:bg-white/10"
              >
                <GlobalOutlined class="text-[12px]" />
                {{ currentLang.toUpperCase() }}
              </span>
              <template #overlay>
                <a-menu @click="changeLang">
                  <a-menu-item key="en">{{
                    $t("nav.langEnglish")
                  }}</a-menu-item>
                  <a-menu-item key="uz">{{ $t("nav.langUzbek") }}</a-menu-item>
                  <a-menu-item key="ru">{{
                    $t("nav.langRussian")
                  }}</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>

          <!-- DESKTOP DOWNLOAD BUTTON -->
          <button
            class="hidden lg:flex items-center gap-2 shrink-0 rounded-full px-6 py-2.5 bg-white text-[13px] font-semibold tracking-[0.3px] text-[#1A202C] border-none cursor-pointer hover:bg-white/90 transition-colors"
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
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </button>

          <!-- MOBILE RIGHT SIDE -->
          <div class="flex lg:hidden items-center gap-2">
            <!-- Mobile download button -->
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
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
            </button>

            <!-- Mobile language -->
            <a-dropdown placement="bottomRight">
              <button
                class="flex items-center justify-center w-9 h-9 rounded-lg text-white bg-transparent border-none cursor-pointer hover:bg-white/10 transition-colors"
              >
                <GlobalOutlined class="text-[16px]" />
              </button>
              <template #overlay>
                <a-menu @click="changeLang">
                  <a-menu-item key="en">{{
                    $t("nav.langEnglish")
                  }}</a-menu-item>
                  <a-menu-item key="uz">{{ $t("nav.langUzbek") }}</a-menu-item>
                  <a-menu-item key="ru">{{
                    $t("nav.langRussian")
                  }}</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <!-- Burger -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="flex items-center justify-center w-9 h-9 rounded-lg text-white bg-transparent border-none cursor-pointer hover:bg-white/10 transition-colors"
            >
              <MenuOutlined v-if="!mobileMenuOpen" class="text-[18px]" />
              <CloseOutlined v-else class="text-[18px]" />
            </button>
          </div>
        </div>
      </nav>

      <!-- MOBILE MENU PANEL -->
      <transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden fixed top-[80px] left-0 right-0 bg-white shadow-xl z-40 rounded-xl mx-4"
        >
          <div class="flex flex-col p-4 gap-3">
            <router-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex items-center gap-2 text-[#1A202C] font-semibold py-2 border-b border-gray-100 no-underline hover:text-[#4FD1C5] transition-colors"
              @click="mobileMenuOpen = false"
            >
              <component :is="link.icon" />
              {{ $t(link.label) }}
            </router-link>
          </div>
        </div>
      </transition>
    </header>
    <main>
      <div class="inset-0 pt-[10vh] flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-[32px] font-extrabold mb-2">
            {{ $t("auth.welcome") }}
          </h1>
          <p class="text-[15px] mb-8">
            {{ $t("auth.signInSubtitle") }}
          </p>
        </div>
      </div>
      <!-- Form card -->
      <div class="flex items-center justify-center mt-[20px]">
        <div
          class="bg-white w-full max-w-[450px] p-5 rounded-2xl shadow-xl border border-gray-100"
        >
          <!-- Register with -->
          <p class="text-center text-[15px] font-semibold text-[#1A202C] mb-5">
            {{ $t("auth.registerWith") }}
          </p>

          <!-- Social buttons -->
          <div class="flex items-center justify-center gap-4 mb-5">
            <!-- Facebook -->
            <a-button
              type="text"
              class="!w-[60px] !h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6" fill="#1877F2">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a-button>

            <!-- Apple -->
            <a-button
              type="text"
              class="!w-[60px] !h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6" fill="#1A202C">
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                />
              </svg>
            </a-button>

            <!-- Google -->
            <a-button
              type="text"
              class="!w-[60px] !h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </a-button>
          </div>

          <!-- OR -->
          <div class="flex items-center gap-3 mb-5">
            <div class="flex-1 h-px bg-[#E2E8F0]"></div>
            <span class="text-[13px] font-semibold text-[#4FD1C5]">{{
              $t("auth.or")
            }}</span>
            <div class="flex-1 h-px bg-[#E2E8F0]"></div>
          </div>
          <!-- REGISTER FORM -->
          <a-form
            ref="formRef"
            :model="form"
            :rules="rules"
            @finish="handleSubmit"
            layout="vertical"
            autocomplete="off"
          >
            <!-- ISM INPUT -->
            <a-form-item name="name" :label="$t('auth.name')">
              <a-input
                v-model:value="form.name"
                size="large"
                :placeholder="$t('auth.fullNamePlaceholder')"
                autocomplete="off"
              />
            </a-form-item>
            <!-- EMAIL INPUT -->

            <a-form-item name="email" :label="$t('auth.email')">
              <a-input
                v-model:value="form.email"
                size="large"
                :placeholder="$t('auth.emailPlaceholder')"
                autocomplete="off"
                autocapitalize="off"
                autocorrect="off"
                spellcheck="false"
              />
            </a-form-item>
            <!-- PASSWORD INPUT -->
            <a-form-item name="password" :label="$t('auth.password')">
              <a-input-password
                v-model:value="form.password"
                size="large"
                :placeholder="$t('auth.passwordPlaceholder')"
                autocomplete="new-password"
              />
            </a-form-item>
            <!-- REMEMBER ME -->
            <a-form-item>
              <div class="flex items-center gap-3">
                <a-switch v-model:checked="rememberMe" />
                <span class="text-[13px] font-medium text-[#1A202C]">
                  {{ $t("auth.rememberMe") }}
                </span>
              </div>
            </a-form-item>
            <!-- General error message -->
            <a-form-item>
              <a-alert
                v-if="errorMsg"
                :message="errorMsg"
                type="error"
                class="mb-4"
              />
              <a-button
                type="primary"
                html-type="submit"
                size="large"
                class="w-full rounded-xl"
                :loading="isLoading"
              >
                {{ $t("auth.createAccount") }}
              </a-button>
            </a-form-item>
            <!-- ALLAQACHON XISOB BOR -->
            <p class="text-center text-[14px] text-[#718096] mt-4">
              {{ $t("auth.alreadyHaveAccount") }}
              <router-link
                to="/auth/login"
                class="text-[#4FD1C5] font-semibold no-underline hover:underline"
              >
                {{ $t("auth.signIn") }}
              </router-link>
            </p>
          </a-form>
        </div>
      </div>
    </main>
    <footer
      class="bottom-0 left-0 right-0 mx-auto w-[calc(80%-0px)] sm:w-[calc(80%-0px)] auth-footer flex items-center justify-between px-10 py-[18px] text-[12px] text-[#718096]"
    >
      <span>
        © 2024, {{ $t("footer.madeWith") }} ❤️ {{ $t("footer.by") }}
        <a
          href="#"
          class="text-[#4FD1C5] font-semibold no-underline hover:underline"
          >{{ $t("footer.creativeTim") }}</a
        >
        &amp;
        <a
          href="#"
          class="text-[#4FD1C5] font-semibold no-underline hover:underline"
          >{{ $t("footer.simmmple") }}</a
        >
      </span>
      <div class="auth-footer-links flex gap-6">
        <a
          href="#"
          class="text-[#718096] font-medium no-underline hover:text-[#1A202C]"
          >{{ $t("footer.creativeTim") }}</a
        >
        <a
          href="#"
          class="text-[#718096] font-medium no-underline hover:text-[#1A202C]"
          >{{ $t("footer.simmmple") }}</a
        >
        <a
          href="#"
          class="text-[#718096] font-medium no-underline hover:text-[#1A202C]"
          >{{ $t("footer.blog") }}</a
        >
        <a
          href="#"
          class="text-[#718096] font-medium no-underline hover:text-[#1A202C]"
          >{{ $t("footer.license") }}</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useAppStore } from "@/stores/app";
import myImage from "@/assets/Image.png";
import {
  DashboardOutlined,
  UserOutlined,
  UserAddOutlined,
  LoginOutlined,
  GlobalOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const appStore = useAppStore();
const { t, locale } = useI18n();

const formRef = ref();
const isLoading = ref(false);
const errorMsg = ref("");
const rememberMe = ref(true);
const mobileMenuOpen = ref(false);
const currentLang = computed(() => appStore.currentLang);

const navLinks = [
  {
    to: "/dashboard",
    label: "nav.dashboard",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_92_198)">
<path d="M9.47247 2.92779C9.48545 2.92022 9.49621 2.90939 9.50369 2.89636C9.51117 2.88334 9.51511 2.86858 9.51511 2.85356C9.51511 2.83854 9.51117 2.82379 9.50369 2.81076C9.49621 2.79774 9.48545 2.7869 9.47247 2.77933L6.19095 0.872811C5.98098 0.751106 5.7426 0.687012 5.49991 0.687012C5.25722 0.687012 5.01883 0.751106 4.80886 0.872811L1.52798 2.77933C1.51501 2.7869 1.50425 2.79774 1.49677 2.81076C1.48929 2.82379 1.48535 2.83854 1.48535 2.85356C1.48535 2.86858 1.48929 2.88334 1.49677 2.89636C1.50425 2.90939 1.51501 2.92022 1.52798 2.92779L5.45704 5.23908C5.47026 5.24686 5.48532 5.25097 5.50066 5.25097C5.516 5.25097 5.53105 5.24686 5.54427 5.23908L9.47247 2.92779Z" fill="white"/>
<path d="M1.16016 3.51212C1.14705 3.50456 1.13218 3.50059 1.11705 3.50061C1.10192 3.50063 1.08706 3.50465 1.07398 3.51226C1.0609 3.51987 1.05006 3.5308 1.04256 3.54394C1.03505 3.55708 1.03115 3.57197 1.03125 3.58711V7.32302C1.03158 7.50306 1.07903 7.67987 1.16888 7.83587C1.25874 7.99188 1.38787 8.12164 1.54344 8.21226L5.02735 10.3012C5.0404 10.3087 5.05521 10.3127 5.07029 10.3127C5.08537 10.3127 5.10018 10.3087 5.11325 10.3012C5.12631 10.2937 5.13716 10.2828 5.14471 10.2698C5.15225 10.2567 5.15624 10.2419 5.15625 10.2268V5.89238C5.15624 5.87731 5.15226 5.86251 5.14472 5.84946C5.13717 5.83641 5.12633 5.82558 5.11328 5.81804L1.16016 3.51212Z" fill="white"/>
<path d="M5.84375 5.90741V10.2258C5.84377 10.2408 5.84775 10.2557 5.8553 10.2687C5.86285 10.2818 5.8737 10.2926 5.88676 10.3001C5.89982 10.3077 5.91463 10.3116 5.92971 10.3116C5.94479 10.3116 5.9596 10.3076 5.97266 10.3001L9.45635 8.21118C9.61179 8.12068 9.74087 7.9911 9.83076 7.8353C9.92064 7.67949 9.96821 7.50289 9.96875 7.32302V3.5871C9.9687 3.57204 9.96469 3.55726 9.95712 3.54424C9.94956 3.53122 9.9387 3.52041 9.92565 3.5129C9.91259 3.5054 9.89779 3.50145 9.88274 3.50146C9.86768 3.50148 9.85288 3.50545 9.83984 3.51298L5.88672 5.83329C5.8737 5.84081 5.86288 5.85161 5.85534 5.86461C5.8478 5.87762 5.8438 5.89238 5.84375 5.90741Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_92_198">
<rect width="11" height="11" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    to: "/dashboard/profile",
    label: "nav.profile",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_92_190)">
<path d="M7.14658 1.38728C6.7285 0.935891 6.14455 0.687317 5.50002 0.687317C4.85205 0.687317 4.26617 0.934387 3.85002 1.38298C3.42936 1.83652 3.2244 2.4529 3.27252 3.11849C3.36791 4.43161 4.36715 5.49982 5.50002 5.49982C6.63289 5.49982 7.63041 4.43183 7.72731 3.11892C7.77607 2.45935 7.56982 1.84425 7.14658 1.38728Z" fill="white"/>
<path d="M9.28137 10.3118H1.71887C1.61989 10.3131 1.52186 10.2923 1.43192 10.251C1.34198 10.2096 1.26239 10.1487 1.19895 10.0727C1.0593 9.90577 1.00301 9.67782 1.04469 9.4473C1.22602 8.4414 1.79192 7.59642 2.68137 7.00323C3.47157 6.47665 4.47252 6.18683 5.50012 6.18683C6.52772 6.18683 7.52867 6.47687 8.31887 7.00323C9.20832 7.5962 9.77422 8.44118 9.95555 9.44708C9.99723 9.67761 9.94094 9.90556 9.80129 10.0725C9.73787 10.1485 9.65829 10.2095 9.56835 10.2509C9.47841 10.2923 9.38037 10.3131 9.28137 10.3118Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_92_190">
<rect width="11" height="11" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    to: "/auth/register",
    label: "nav.signUp",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 1.03076C3.03596 1.03076 1.03125 3.03547 1.03125 5.49951C1.03125 7.96355 3.03596 9.96826 5.5 9.96826C7.96404 9.96826 9.96875 7.96355 9.96875 5.49951C9.96875 3.03547 7.96404 1.03076 5.5 1.03076ZM4.42105 3.54057C4.69326 3.25203 5.07633 3.09326 5.5 3.09326C5.92367 3.09326 6.3033 3.25311 6.57658 3.54314C6.85351 3.83705 6.98822 4.23193 6.95643 4.65646C6.89283 5.49951 6.23971 6.18701 5.5 6.18701C4.76029 6.18701 4.10588 5.49951 4.04357 4.65625C4.01199 4.22828 4.14648 3.83211 4.42105 3.54057ZM5.5 9.28076C4.99522 9.28109 4.49551 9.18006 4.0305 8.98365C3.5655 8.78724 3.14467 8.49946 2.79297 8.13736C2.9944 7.85011 3.25105 7.60587 3.54793 7.41893C4.09557 7.06787 4.78865 6.87451 5.5 6.87451C6.21135 6.87451 6.90443 7.06787 7.45143 7.41893C7.74855 7.60579 8.00543 7.85003 8.20703 8.13736C7.85536 8.4995 7.43454 8.78731 6.96953 8.98372C6.50451 9.18013 6.00479 9.28114 5.5 9.28076Z" fill="white"/>
</svg>
`,
  },
  {
    to: "/auth/login",
    label: "nav.signIn",
    icon: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.68574 3.59191C4.68574 3.87121 4.68574 4.14191 4.77383 4.39542C3.84785 5.48253 1.40293 8.35499 1.1752 8.57413C1.12993 8.61474 1.09373 8.66443 1.06893 8.71995C1.04413 8.77547 1.03129 8.83559 1.03125 8.8964C1.03125 9.07902 1.14297 9.25519 1.2375 9.35402C1.3793 9.50226 1.98516 10.063 2.09687 9.95558C2.42773 9.63331 2.49434 9.54738 2.62969 9.41417C2.83379 9.21437 2.6082 8.80617 2.6791 8.64074C2.75 8.47531 2.8252 8.44308 2.94766 8.4173C3.07012 8.39152 3.28711 8.4796 3.45684 8.48175C3.63516 8.4839 3.73184 8.4087 3.86504 8.2841C3.97246 8.18527 4.0498 8.09288 4.05195 7.94894C4.05625 7.75558 3.77695 7.49992 3.98535 7.29581C4.19375 7.09171 4.49453 7.42902 4.71582 7.40324C4.93711 7.37746 5.20566 7.07023 5.23359 6.93917C5.26152 6.80812 4.98223 6.47081 5.02519 6.2796C5.04023 6.21515 5.17129 6.06476 5.27012 6.04328C5.36895 6.02179 5.80723 6.19152 5.90605 6.17003C6.02637 6.14425 6.16602 6.01749 6.27988 5.9466C6.61289 6.09054 6.91582 6.14855 7.30469 6.14855C8.77637 6.14855 9.96875 5.00128 9.96875 3.58761C9.96875 2.17394 8.77637 1.03162 7.30469 1.03162C5.83301 1.03162 4.68574 2.17824 4.68574 3.59191ZM8.59375 3.09412C8.59375 3.23009 8.55343 3.36301 8.47788 3.47607C8.40234 3.58913 8.29497 3.67725 8.16934 3.72928C8.04372 3.78132 7.90549 3.79493 7.77212 3.76841C7.63876 3.74188 7.51626 3.6764 7.42011 3.58025C7.32397 3.4841 7.25849 3.3616 7.23196 3.22824C7.20543 3.09488 7.21905 2.95665 7.27108 2.83102C7.32312 2.7054 7.41124 2.59802 7.52429 2.52248C7.63735 2.44694 7.77027 2.40662 7.90625 2.40662C8.08859 2.40662 8.26345 2.47905 8.39239 2.60798C8.52132 2.73691 8.59375 2.91178 8.59375 3.09412Z" fill="white"/>
</svg>
`,
  },
];

const form = ref({
  name: "",
  email: "",
  password: "",
});

const rules = computed(() => ({
  name: [
    { required: true, message: t("auth.errors.nameRequired"), trigger: "blur" },
    { min: 2, message: t("auth.errors.nameMin"), trigger: "blur" },
  ],
  email: [
    {
      required: true,
      message: t("auth.errors.emailRequired"),
      trigger: "blur",
    },
    { type: "email", message: t("auth.errors.emailInvalid"), trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: t("auth.errors.passwordRequired"),
      trigger: "blur",
    },
    { min: 6, message: t("auth.errors.passwordMin"), trigger: "blur" },
  ],
}));

function changeLang({ key }) {
  appStore.setLang(key);
  locale.value = key;
}

async function handleSubmit() {
  errorMsg.value = "";
  isLoading.value = true;
  try {
    await authStore.register(
      form.value.name,
      form.value.email,
      form.value.password,
    );
    router.push("/dashboard");
  } catch (err) {
    errorMsg.value =
      t(`auth.errors.${err.message}`) || t("auth.errors.general");
  } finally {
    isLoading.value = false;
  }
}

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>

<style scoped>
:deep(.ant-form-item-label > label) {
  font-size: 13px;
  font-weight: 600;
  color: #1a202c;
}
:deep(.ant-input-lg),
:deep(.ant-input-affix-wrapper-lg) {
  border-radius: 12px !important;
}
:deep(.ant-switch-checked) {
  background: #4fd1c5 !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

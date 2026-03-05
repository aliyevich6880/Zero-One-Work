<template>
  <div class="bg-[#F8F9FA] min-h-screen">
    <section
      :style="{ backgroundImage: `url(${myImage})` }"
      class="relative h-[50vh] min-h-[320px] bg-cover bg-center"
    >
      <header class="absolute top-0 left-0 right-0 z-20">
        <AuthNavbar />
      </header>
      <div class="h-full pt-[88px] sm:pt-[96px] flex items-start justify-center">
        <div class="text-center text-white px-4 mt-8 sm:mt-10">
          <h1 class="text-[28px] sm:text-[32px] font-extrabold mb-2">
            {{ $t("auth.welcome") }}
          </h1>
          <p class="text-[14px] sm:text-[15px] mb-8">
            {{ $t("auth.signInSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <main class="relative z-10 -mt-14 sm:-mt-16 px-3 sm:px-4 pb-6">
      <!-- Form card -->
      <div class="flex items-center justify-center">
        <div
          class="bg-white w-full max-w-[450px] p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100"
        >
          <!-- Register with -->
          <p class="text-center text-[15px] font-semibold text-[#1A202C] mb-5">
            {{ $t("auth.registerWith") }}
          </p>

          <!-- Social buttons -->
          <div class="flex items-center justify-center gap-3 sm:gap-4 mb-5">
            <!-- Facebook -->
            <a-button
              type="text"
              class="!w-[54px] sm:!w-[60px] !h-[54px] sm:!h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
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
              class="!w-[54px] sm:!w-[60px] !h-[54px] sm:!h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
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
              class="!w-[54px] sm:!w-[60px] !h-[54px] sm:!h-[60px] !rounded-xl !p-0 !border !border-[#E2E8F0] !flex !items-center !justify-center hover:!border-[#4FD1C5] hover:!shadow-md"
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
      class="bottom-0 left-0 right-0 mx-auto w-full max-w-[1200px] auth-footer flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 px-4 sm:px-10 py-[18px] text-[12px] text-[#718096]"
    >
      <span class="text-center sm:text-left break-words">
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
      <div class="auth-footer-links flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import AuthNavbar from "@/components/common/AuthNavbar.vue";
import myImage from "@/assets/Image.png";

const router = useRouter();
const authStore = useAuthStore();
const { t } = useI18n();

const formRef = ref();
const isLoading = ref(false);
const errorMsg = ref("");
const rememberMe = ref(true);

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

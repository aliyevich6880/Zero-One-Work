<template>
  <header>
    <AppNavbar />
  </header>
  <main class="login-page flex w-full min-h-screen">
    <!-- ── LEFT: FORM ── -->
    <div
      class="login-form-panel flex flex-1 items-center justify-center px-16 py-12"
    >
      <div class="w-full max-w-[380px]">
        <!-- Title -->
        <h1
          class="text-[28px] font-extrabold text-[#4FD1C5] mb-2 tracking-tight"
        >
          {{ $t("auth.welcomeBack") }}
        </h1>
        <p class="text-[14px] text-[#718096] mb-8">
          {{ $t("auth.signInSubtitle") }}
        </p>

        <!-- Form -->
        <a-form
          :model="form"
          :rules="rules"
          ref="formRef"
          layout="vertical"
          autocomplete="off"
          @finish="handleSubmit"
        >
          <!-- Email -->
          <a-form-item :label="$t('auth.email')" name="email">
            <a-input
              v-model:value="form.email"
              :placeholder="$t('auth.emailPlaceholder')"
              size="large"
              class="!rounded-xl"
            />
          </a-form-item>

          <!-- Password -->
          <a-form-item :label="$t('auth.password')" name="password">
            <a-input-password
              v-model:value="form.password"
              :placeholder="$t('auth.passwordPlaceholder')"
              size="large"
              class="!rounded-xl"
              autocomplete="new-password"
            />
          </a-form-item>

          <!-- Remember me -->
          <div class="flex items-center gap-3 mb-6">
            <a-switch v-model:checked="rememberMe" />
            <span class="text-[13px] font-medium text-[#1A202C]">
              {{ $t("auth.rememberMe") }}
            </span>
          </div>

          <!-- General xato -->
          <a-alert
            v-if="errorMsg"
            :message="errorMsg"
            type="error"
            show-icon
            closable
            class="!rounded-xl !mb-4"
            @close="errorMsg = ''"
          />

          <!-- Submit -->
          <a-button
            html-type="submit"
            type="primary"
            size="large"
            block
            :loading="isLoading"
            class="!rounded-xl !h-[50px] !text-[13px] !font-bold !tracking-[1.5px] !uppercase !bg-gradient-to-r !from-[#4FD1C5] !to-[#38B2AC] !border-none hover:!shadow-[0_8px_25px_rgba(79,209,197,0.4)] hover:!-translate-y-[1px] transition-all duration-200"
          >
            {{ $t("auth.signIn") }}
          </a-button>
        </a-form>

        <!-- Sign up link -->
        <p class="text-center text-[13px] text-[#718096] !mt-5">
          {{ $t("auth.noAccount") }}
          <router-link
            to="/auth/register"
            class="text-[#4FD1C5] font-bold no-underline hover:underline"
          >
            {{ $t("auth.signUp") }}
          </router-link>
        </p>
      </div>
    </div>

    <!-- ── RIGHT: VISUAL ── -->
    <div class="login-visual w-[700px] relative overflow-hidden">
      <!-- Chakra brand -->
      <div class="relative z-10 flex items-center gap-5">
        <img src="../../assets/Image.svg" alt="chakra" class="w-full" />
      </div>
    </div>
  </main>
  <footer
    class="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[1200px] auth-footer flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 px-4 sm:px-10 py-[18px] text-[12px] text-[#718096]"
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
</template>

<script setup>
import AppNavbar from "@/components/common/PrivateNavbar.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();
const { t } = useI18n();

const formRef = ref();
const isLoading = ref(false);
const errorMsg = ref("");
const rememberMe = ref(true);

const form = ref({
  email: "",
  password: "",
});

// Ant Design Form Rules
const rules = computed(() => ({
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
  ],
}));

async function handleSubmit() {
  errorMsg.value = "";
  isLoading.value = true;
  try {
    await authStore.login(form.value.email, form.value.password);
    router.push("/dashboard");
  } catch (_err) {
    errorMsg.value = t("auth.errors.general");
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
/* Ant Design label style */
:deep(.ant-form-item-label > label) {
  font-size: 13px;
  font-weight: 600;
  color: #1a202c;
}
:deep(.ant-input-lg),
:deep(.ant-input-password) {
  border-radius: 12px !important;
}
:deep(.ant-switch-checked) {
  background: #4fd1c5 !important;
}

.login-form-panel {
  min-width: 0;
}

.login-visual {
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .login-visual {
    display: none;
  }

  .login-form-panel {
    padding: 32px 24px;
  }
}

@media (max-width: 640px) {
  .login-form-panel {
    padding: 24px 16px;
  }
}
</style>

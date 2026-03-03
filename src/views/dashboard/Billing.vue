<template>
  <main
    class="!pt-18 p-4 md:p-6 flex flex-col gap-6 lg:pl-[270px] md:pl-[270px] pl-[80px]"
  >
    <section class="grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_360px] gap-6">
      <div class="flex flex-col gap-4 min-w-0">
        <a-row :gutter="[16, 16]" align="stretch">
          <!-- Credit Card -->
          <a-col :xs="24" :lg="14" class="flex">
            <div>
              <card
                :bordered="false"
                class="!rounded-[15px] !p-0 overflow-hidden w-full !m-0"
              >
                <div
                  class="bg-[linear-gradient(135deg,#1a1f3c_0%,#0f1628_50%,#1a2344_100%)] h-[180px] md:h-[200px] lg:h-[240px] rounded-[15px] text-white relative overflow-hidden !p-0 !m-0"
                >
                  <!-- Decorative circles -->
                  <div
                    class="absolute w-[200px] h-[200px] rounded-full border border-white/10 -top-16 -right-10 pointer-events-none"
                  ></div>
                  <div
                    class="absolute w-[150px] h-[150px] rounded-full border border-white/10 top-10 right-10 pointer-events-none"
                  ></div>
                  <div
                    class="absolute w-[220px] h-[220px] rounded-full border border-white/10 -bottom-20 -left-10 pointer-events-none"
                  ></div>

                  <div
                    class="flex flex-col p-6 gap-4 justify-between h-full relative z-10"
                  >
                    <!-- Top: title + mastercard -->
                    <div class="flex items-center justify-between">
                      <h3 class="text-xl font-bold !m-0">
                        {{ $t("sidebar.brand") }}
                      </h3>
                      <!-- Mastercard icon -->
                      <div class="relative w-[42px] h-[26px]">
                        <div
                          class="absolute left-0 w-[26px] h-[26px] rounded-full bg-[rgba(235,80,60,0.9)] mix-blend-screen"
                        ></div>
                        <div
                          class="absolute left-[14px] w-[26px] h-[26px] rounded-full bg-[rgba(255,160,0,0.9)] mix-blend-screen"
                        ></div>
                      </div>
                    </div>

                    <!-- Number + details -->
                    <div>
                      <h2 class="font-bold text-lg !m-0 tracking-widest">
                        7812 2139 0823 XXXX
                      </h2>
                      <div class="flex gap-6 mt-4">
                        <div>
                          <p
                            class="text-[10px] uppercase tracking-widest !m-0 text-white/60"
                          >
                            {{ $t("billing.validThru") }}
                          </p>
                          <h4 class="!m-0 mt-1 font-bold">05/24</h4>
                        </div>
                        <div>
                          <p
                            class="text-[10px] uppercase tracking-widest !m-0 text-white/60"
                          >
                            {{ $t("billing.cvv") }}
                          </p>
                          <h4 class="!m-0 mt-1 font-bold">09X</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </card>
            </div>
          </a-col>

          <!-- Salary -->
          <a-col :xs="12" :lg="5" class="flex">
            <a-card
              :bordered="false"
              class="!rounded-[15px] w-full h-[200px] md:h-[200px] lg:h-[240px]"
            >
              <div
                class="flex flex-col items-center justify-center h-full gap-4"
              >
                <div
                  class="w-[56px] h-[56px] bg-[#4FD1C5] rounded-[15px] flex items-center justify-center"
                >
                  <!-- Wallet icon -->
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.8496 5.27879H21.0996C21.2894 5.2787 21.479 5.29075 21.6673 5.31485C21.6035 4.86684 21.4496 4.4364 21.2149 4.04948C20.9803 3.66255 20.6697 3.32716 20.3019 3.06351C19.9341 2.79987 19.5167 2.61344 19.0749 2.51547C18.6331 2.41749 18.176 2.41 17.7313 2.49344L4.36718 4.77504H4.35194C3.51307 4.93546 2.76709 5.41008 2.26636 6.10196C3.02076 5.56536 3.92383 5.2776 4.8496 5.27879V5.27879Z"
                      fill="white"
                    />
                    <path
                      d="M21.0996 6.49982H4.84961C3.98794 6.50076 3.16184 6.84347 2.55255 7.45276C1.94326 8.06205 1.60055 8.88815 1.59961 9.74982V19.4998C1.60055 20.3615 1.94326 21.1876 2.55255 21.7969C3.16184 22.4062 3.98794 22.7489 4.84961 22.7498H21.0996C21.9613 22.7489 22.7874 22.4062 23.3967 21.7969C24.0059 21.1876 24.3487 20.3615 24.3496 19.4998V9.74982C24.3487 8.88815 24.0059 8.06205 23.3967 7.45276C22.7874 6.84347 21.9613 6.50076 21.0996 6.49982V6.49982ZM18.6875 16.2498C18.3661 16.2498 18.0519 16.1545 17.7847 15.976C17.5175 15.7974 17.3092 15.5436 17.1862 15.2467C17.0632 14.9497 17.031 14.623 17.0937 14.3078C17.1564 13.9926 17.3112 13.703 17.5384 13.4758C17.7657 13.2485 18.0553 13.0937 18.3705 13.031C18.6857 12.9683 19.0124 13.0005 19.3094 13.1235C19.6063 13.2465 19.8601 13.4548 20.0386 13.722C20.2172 13.9892 20.3125 14.3034 20.3125 14.6248C20.3125 15.0558 20.1413 15.4691 19.8365 15.7739C19.5318 16.0786 19.1185 16.2498 18.6875 16.2498Z"
                      fill="white"
                    />
                    <path
                      d="M1.625 13.1749V8.12219C1.625 7.02176 2.23437 5.17688 4.34941 4.77723C6.14453 4.44055 7.92187 4.44055 7.92187 4.44055C7.92187 4.44055 9.08984 5.25305 8.125 5.25305C7.16015 5.25305 7.18555 6.49719 8.125 6.49719C9.06445 6.49719 8.125 7.69055 8.125 7.69055L4.3418 11.9816L1.625 13.1749Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h3 class="text-lg !font-bold !m-0">
                    {{ $t("billing.salary") }}
                  </h3>
                  <p class="text-sm !text-[#A0AEC0] !m-0">
                    {{ $t("billing.salaryCompany") }}
                  </p>
                  <p class="text-2xl font-bold !m-0">+$2000</p>
                </div>
              </div>
            </a-card>
          </a-col>

          <!-- Paypal -->
          <a-col :xs="12" :lg="5" class="flex">
            <a-card
              :bordered="false"
              class="!rounded-[15px] w-full h-[200px] md:h-[200px] lg:h-[240px]"
            >
              <div
                class="flex flex-col items-center justify-center h-full gap-4"
              >
                <div
                  class="w-[56px] h-[56px] bg-[#4FD1C5] rounded-[15px] flex items-center justify-center"
                >
                  <!-- Paypal P icon -->
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1787 1.67818C15.1416 0.503314 13.2646 0 10.8634 0H3.89481C3.40401 0 2.9869 0.354545 2.90903 0.834223L0.00737232 19.0912C-0.0496329 19.4513 0.231222 19.7766 0.59828 19.7766H4.90009L5.98041 12.9777L5.94704 13.1918C6.02351 12.7122 6.43923 12.3576 6.93003 12.3576H8.97388C12.9907 12.3576 16.1343 10.7392 17.0533 6.05785C17.0811 5.91881 17.1242 5.65186 17.1242 5.65186C17.3856 3.91946 17.1228 2.74459 16.1787 1.67818Z"
                      fill="white"
                    />
                    <path
                      d="M18.2128 6.53894C17.2146 11.148 14.0292 13.5867 8.97383 13.5867H7.14132L5.77319 22.246H8.74581C9.17543 22.246 9.5411 21.9359 9.60784 21.5146L9.6426 21.3311L10.3267 17.0335L10.3712 16.7971C10.4379 16.3758 10.8036 16.0658 11.2318 16.0658H11.7754C15.2889 16.0658 18.0391 14.6504 18.8427 10.5557C19.1653 8.9123 19.0095 7.53445 18.2128 6.53894Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h3 class="text-lg !font-bold !m-0">
                    {{ $t("billing.paypal") }}
                  </h3>
                  <p class="text-sm !text-[#A0AEC0] !m-0">
                    {{ $t("billing.paypalCompany") }}
                  </p>
                  <p class="text-2xl font-bold !m-0">$455.00</p>
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>

        <!-- Payment Method -->
        <a-card :bordered="false" class="!rounded-[15px]">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4"
          >
            <h3 class="text-lg !font-bold !m-0">
              {{ $t("billing.paymentMethod") }}
            </h3>
            <a-button
              type="primary"
              class="!rounded-[10px] !h-10 !bg-[#1A202C] !border-[#1A202C] hover:!bg-[#2D3748]"
              :disabled="!canAddMoreCards"
              @click="openAddCardModal"
            >
              {{ $t("billing.addCard") }}
            </a-button>
          </div>
          <p v-if="!canAddMoreCards" class="text-xs text-[#A0AEC0] !m-0 mb-3">
            Maximum 4 cards reached
          </p>

          <a-row :gutter="[12, 12]">
            <a-col
              v-for="card in paymentCards"
              :key="card.id"
              :xs="24"
              :md="12"
            >
              <div
                class="border border-[#E2E8F0] rounded-[12px] p-4 flex items-center justify-between"
              >
                <div class="flex items-center gap-3 min-w-0">
                  <div
                    v-if="card.type === 'mastercard'"
                    class="relative w-[42px] h-[26px] flex-shrink-0"
                  >
                    <div
                      class="absolute left-0 w-[24px] h-[24px] rounded-full bg-[#EB5023]"
                    ></div>
                    <div
                      class="absolute left-[14px] w-[24px] h-[24px] rounded-full bg-[#F5A623] opacity-90"
                    ></div>
                  </div>
                  <div
                    v-else-if="card.type === 'visa'"
                    class="w-[42px] h-[26px] bg-[#1A1F71] rounded flex items-center justify-center flex-shrink-0"
                  >
                    <span
                      class="text-white text-[10px] font-black italic tracking-tight"
                      >VISA</span
                    >
                  </div>
                  <div
                    v-else
                    class="w-[42px] h-[26px] bg-[#0EA5A4] rounded flex items-center justify-center flex-shrink-0"
                  >
                    <span
                      class="text-white text-[9px] font-black tracking-tight"
                      >HUMO</span
                    >
                  </div>
                  <p
                    class="text-[13px] font-semibold !m-0 truncate text-[#4FD1C5]"
                  >
                    {{ card.number }}
                  </p>
                </div>
                <a-button
                  type="text"
                  class="!text-red-400 !font-semibold !flex !items-center !justify-center !p-0"
                  @click="removePaymentCard(card.id)"
                >
                  <template #icon>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M9 3h6l1 2h4v2H4V5h4l1-2zm-2 6h10l-1 10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 9z"
                      />
                    </svg>
                  </template>
                </a-button>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </div>

      <!-- Invoices -->
      <a-card :bordered="false" class="!rounded-[15px] h-fit">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg !font-bold !m-0">{{ $t("billing.invoices") }}</h3>
          <a-button
            type="dashed"
            class="!rounded-[20px] !h-8 !px-4 !text-[#4FD1C5] !border-[#4FD1C5] !font-semibold !text-xs hover:!border-[#4FD1C5] hover:!text-[#4FD1C5]"
          >
            {{ $t("billing.allInvoices") }}
          </a-button>
        </div>
        <a-list :data-source="invoices">
          <template #renderItem="{ item }">
            <a-list-item class="!px-0">
              <div class="w-full flex items-center justify-between gap-3">
                <div>
                  <p class="text-[13px] font-semibold text-[#1A202C] !m-0">
                    {{ item.month }}
                  </p>
                  <p class="text-[12px] text-[#4FD1C5] !m-0 mt-1">
                    {{ item.date }}
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <p class="text-[13px] font-semibold text-[#1A202C] !m-0">
                    {{ item.amount }}
                  </p>
                  <a-button
                    type="link"
                    class="!p-0 !text-[#1A202C] !font-semibold flex items-center gap-1"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="flex-shrink-0"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"
                      />
                    </svg>
                    {{ $t("billing.pdf") }}
                  </a-button>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </section>
    <!-- Billing information section -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Billing information div -->
      <a-card
        :bordered="false"
        class="lg:col-span-2 bg-white rounded-2xl overflow-hidden"
      >
        <h2 class="text-lg text-bold font-bold !m-0">
          {{ $t("billing.billingInformation") }}
        </h2>
        <div
          v-for="(info, index) in billingInfos"
          :key="`${info.email}-${info.vat}`"
          class="bg-[#F8F9FA] p-4 rounded-[15px] mt-4 flex flex-col gap-1"
        >
          <div class="flex justify-between items-center">
            <h5 class="text-[#7A889D] !mt-1 !mb-0">{{ info.name }}</h5>
            <div class="flex gap-3">
              <a-button
                type="text"
                danger
                class="cursor-pointer !text-[14px] !font-medium hover:!text-red-600"
              >
                {{ $t("billing.delete") }}
              </a-button>
              <a-button
                type="link"
                class="cursor-pointer !text-[14px]"
                @click="openEditBilling(index)"
              >
                {{ $t("billing.edit") }}
              </a-button>
            </div>
          </div>
          <div class="!m-0">
            <p class="text-[10px] font-semibold text-[#A0AEC0] !m-0">
              {{ $t("billing.companyName") }}:
              <span class="text-[#718096]">{{ info.company }}</span>
            </p>
            <p
              class="text-[10px] font-semibold text-[#A0AEC0] !m-0 !mt-[0.5px]"
            >
              {{ $t("billing.emailAddress") }}:
              <span class="text-[#718096]">{{ info.email }}</span>
            </p>
            <p
              class="text-[10px] font-semibold text-[#A0AEC0] !m-0 !mt-[0.5px]"
            >
              {{ $t("billing.vatNumber") }}:
              <span class="text-[#718096]">{{ info.vat }}</span>
            </p>
          </div>
        </div>
      </a-card>
      <!-- Your Transactions -->
      <a-card :bordered="false" class="bg-white rounded-[15px] h-fit">
        <div class="flex items-center justify-between gap-1 mb-4 !pb-5">
          <h2 class="text-lg !font-bold !m-0">
            {{ $t("billing.transactions") }}
          </h2>
          <div class="flex items-center gap-1 text-[12px] text-[#718096]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-[#A0AEC0]"
            >
              <path
                d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
              />
            </svg>
            <span>23 – 30 March 2020</span>
          </div>
        </div>

        <!-- NEWEST -->
        <p
          class="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest !m-0 mb-3"
        >
          NEWEST
        </p>
        <div class="flex flex-col gap-4 mb-5">
          <div
            v-for="tx in newestTransactions"
            :key="tx.name"
            class="flex items-center gap-3"
          >
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2"
              :class="
                tx.type === 'minus' ? 'border-red-400' : 'border-green-400'
              "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="tx.type === 'minus' ? '#FC8181' : '#68D391'"
                stroke-width="3"
                stroke-linecap="round"
              >
                <path v-if="tx.type === 'minus'" d="M5 12h14M12 5l7 7-7 7" />
                <path v-else d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold text-[#1A202C] !m-0">
                {{ tx.name }}
              </p>
              <p class="text-[11px] text-[#A0AEC0] !m-0">{{ tx.date }}</p>
            </div>
            <span
              class="text-[13px] font-bold"
              :class="tx.type === 'minus' ? 'text-red-400' : 'text-green-400'"
            >
              {{ tx.amount }}
            </span>
          </div>
        </div>

        <!-- YESTERDAY -->
        <p
          class="text-[10px] font-bold text-[#A0AEC0] uppercase tracking-widest !m-0 mb-3"
        >
          YESTERDAY
        </p>
        <div class="flex flex-col gap-4">
          <div
            v-for="tx in yesterdayTransactions"
            :key="tx.name"
            class="flex items-center gap-3"
          >
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2"
              :class="
                tx.type === 'minus'
                  ? 'border-red-400'
                  : tx.type === 'pending'
                    ? 'border-gray-300'
                    : 'border-green-400'
              "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="
                  tx.type === 'minus'
                    ? '#FC8181'
                    : tx.type === 'pending'
                      ? '#CBD5E0'
                      : '#68D391'
                "
                stroke-width="3"
                stroke-linecap="round"
              >
                <path v-if="tx.type === 'minus'" d="M5 12h14M12 5l7 7-7 7" />
                <path v-else-if="tx.type === 'pending'" d="M12 8v4l3 3" />
                <path v-else d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold text-[#1A202C] !m-0">
                {{ tx.name }}
              </p>
              <p class="text-[11px] text-[#A0AEC0] !m-0">{{ tx.date }}</p>
            </div>
            <span
              class="text-[13px] font-bold"
              :class="
                tx.type === 'minus'
                  ? 'text-red-400'
                  : tx.type === 'pending'
                    ? 'text-[#718096]'
                    : 'text-green-400'
              "
            >
              {{ tx.amount }}
            </span>
          </div>
        </div>
      </a-card>
    </section>
    <a-modal
      v-model:open="isAddCardOpen"
      title="Add Payment Card"
      ok-text="Add Card"
      cancel-text="Cancel"
      :ok-button-props="{ disabled: !canSubmitCard }"
      @ok="addPaymentCard"
      @cancel="resetCardForm"
    >
      <div class="flex flex-col gap-4">
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            Card Type
          </p>
          <a-select
            v-model:value="newCardForm.type"
            :options="cardTypeOptions"
            class="w-full"
          />
        </div>
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            Card Number
          </p>
          <a-input
            v-model:value="newCardForm.number"
            placeholder="e.g. 8600 1234 5678 9012"
            maxlength="16"
            @input="
              newCardForm.number = newCardForm.number
                .replace(/\D/g, '')
                .slice(0, 16)
            "
          />
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model:open="isEditBillingOpen"
      :title="$t('billing.editBillingInfo')"
      :ok-text="$t('tables.save')"
      :cancel-text="$t('tables.cancel')"
      @ok="saveBillingInfo"
    >
      <div class="flex flex-col gap-4">
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            {{ $t("auth.name") }}
          </p>
          <a-input v-model:value="editBillingForm.name" />
        </div>
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            {{ $t("billing.companyName") }}
          </p>
          <a-input v-model:value="editBillingForm.company" />
        </div>
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            {{ $t("billing.emailAddress") }}
          </p>
          <a-input v-model:value="editBillingForm.email" />
        </div>
        <div>
          <p
            class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
          >
            {{ $t("billing.vatNumber") }}
          </p>
          <a-input v-model:value="editBillingForm.vat" />
        </div>
      </div>
    </a-modal>
    <Footer />
  </main>
</template>

<script setup>
import Footer from "@/components/common/Footer.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const MAX_PAYMENT_CARDS = 4;

const invoices = computed(() => [
  {
    month: t("billing.invoiceMonths.march2020"),
    date: "#MS-415646",
    amount: "$180",
  },
  {
    month: t("billing.invoiceMonths.february2021"),
    date: "#RV-126749",
    amount: "$250",
  },
  {
    month: t("billing.invoiceMonths.april2020"),
    date: "#FB-212562",
    amount: "$560",
  },
  {
    month: t("billing.invoiceMonths.june2019"),
    date: "#QW-103578",
    amount: "$120",
  },
  {
    month: t("billing.invoiceMonths.march2019"),
    date: "#AR-803481",
    amount: "$300",
  },
]);

const billingInfos = ref([
  {
    name: "Olivier Laim",
    company: "Viking Burrito",
    email: "olivier.laim@example.com",
    vat: "FRB1235476",
  },
  {
    name: "Anne Muller",
    company: "Stone Tech Zone",
    email: "anne.muller@example.com",
    vat: "DEB9987211",
  },
  {
    name: "Ivan Petrov",
    company: "Northwind LLC",
    email: "ivan.petrov@example.com",
    vat: "RUB4432981",
  },
]);
const paymentCards = ref([
  { id: 1, type: "mastercard", number: "7812 2139 0823 XXXX" },
  { id: 2, type: "visa", number: "4891 7789 9901 XXXX" },
]);
const isAddCardOpen = ref(false);
const newCardForm = ref({
  type: "visa",
  number: "",
});
const cardTypeOptions = [
  { value: "visa", label: "Visa" },
  { value: "mastercard", label: "Mastercard" },
  { value: "humo", label: "Humo" },
];
const canAddMoreCards = computed(
  () => paymentCards.value.length < MAX_PAYMENT_CARDS,
);
const canSubmitCard = computed(
  () =>
    canAddMoreCards.value &&
    newCardForm.value.number.replace(/\D/g, "").length > 0,
);

function formatCardNumber(rawNumber) {
  const digits = rawNumber.replace(/\D/g, "");
  if (!digits) return "";
  const safeDigits = digits.slice(0, 12);
  const grouped = safeDigits.match(/.{1,4}/g)?.join(" ") ?? safeDigits;
  const trimmed = grouped;
  return `${trimmed} XXXX`;
}

function resetCardForm() {
  newCardForm.value = {
    type: "visa",
    number: "",
  };
}

function openAddCardModal() {
  if (!canAddMoreCards.value) return;
  isAddCardOpen.value = true;
}

function addPaymentCard() {
  if (!canSubmitCard.value) return;
  paymentCards.value.push({
    id: Date.now(),
    type: newCardForm.value.type,
    number: formatCardNumber(newCardForm.value.number),
  });
  isAddCardOpen.value = false;
  resetCardForm();
}

function removePaymentCard(cardId) {
  paymentCards.value = paymentCards.value.filter((card) => card.id !== cardId);
}

const newestTransactions = [
  {
    name: "Netflix",
    date: "28 February 2026, at 11:00",
    amount: "-$2500",
    type: "minus",
  },
  {
    name: "Apple",
    date: "1 March 2026, at 14:20",
    amount: "+$195.10",
    type: "plus",
  },
];

const yesterdayTransactions = [
  {
    name: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    amount: "+$800",
    type: "plus",
  },
  {
    name: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+$1700",
    type: "plus",
  },
  {
    name: "Google",
    date: "1 March 2026, at 16:00",
    amount: "Pending",
    type: "pending",
  },
  {
    name: "Microsoft",
    date: "25 March 2020, at 16:30 PM",
    amount: "-$987",
    type: "minus",
  },
  {
    name: "Samsung Electronics",
    date: "1 March 2026, at 10:00 AM",
    amount: "-$150.25",
    type: "minus",
  },
];
const isEditBillingOpen = ref(false);
const editingBillingIndex = ref(null);
const editBillingForm = ref({
  name: "",
  company: "",
  email: "",
  vat: "",
});

function openEditBilling(index) {
  const row = billingInfos.value[index];
  if (!row) return;
  editingBillingIndex.value = index;
  editBillingForm.value = {
    name: row.name,
    company: row.company,
    email: row.email,
    vat: row.vat,
  };
  isEditBillingOpen.value = true;
}

function saveBillingInfo() {
  if (editingBillingIndex.value === null) {
    isEditBillingOpen.value = false;
    return;
  }

  const index = editingBillingIndex.value;
  const current = billingInfos.value[index];
  if (!current) {
    isEditBillingOpen.value = false;
    editingBillingIndex.value = null;
    return;
  }

  billingInfos.value[index] = {
    ...current,
    ...editBillingForm.value,
  };

  isEditBillingOpen.value = false;
  editingBillingIndex.value = null;
}
</script>

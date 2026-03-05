<template>
  <main
    class="!pt-18 p-4 md:p-6 flex flex-col gap-6 md:pl-[270px]"
  >
    <!-- STATS CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <a-card
        v-for="card in statCards"
        :key="card.title"
        class="rounded-2xl hover:shadow-lg transition-all duration-300 border-none"
        :body-style="{ padding: '10px 20px' }"
      >
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <p
              class="text-[12px] font-['Helvetica'] font-semibold text-[#A0AEC0] uppercase tracking-wider m-0"
            >
              {{ card.title }}
            </p>

            <div class="flex items-center gap-2 mt-1">
              <span
                class="text-[22px] font-['Helvetica'] font-bold text-[#1A202C] leading-none"
              >
                {{ card.value }}
              </span>

              <span
                class="text-[14px] font-['Helvetica'] font-bold"
                :class="card.positive ? 'text-[#48BB78]' : 'text-[#E53E3E]'"
              >
                {{ card.changeText }}
              </span>
            </div>
          </div>

          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#4FD1C5] shadow-sm"
          >
            <div
              v-html="card.icon"
              class="w-6 h-6 flex items-center justify-center text-white fill-current"
            ></div>
          </div>
        </div>
      </a-card>
    </div>
    <!-- BANNER SECTION -->
    <div class="flex gap-4 flex-col lg:flex-row">
      <a-card class="rounded-2xl" :body-style="{ padding: '24px' }">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- LEFT -->
          <div class="flex-1 flex flex-col !justify-between h-[250px]">
            <div>
              <p
                class="text-[12px] font-semibold text-[#718096]  tracking-[0.5px] !m-0"
              >
                {{ $t("dashboard.builtByDevelopers") }}
              </p>
              <h2 class="text-[18px] !font-bold text-[#1A202C] mt-2 mb-3 !m-0">
                {{ $t("dashboard.purityTitle") }}
              </h2>
              <p class="text-[14px] text-[#718096] leading-relaxed mt-2">
                {{ $t("dashboard.docsDescription") }}
              </p>
            </div>
            <button
              type="link"
              class="!p-0 !h-auto !text-back hover:!text-[#4FD1C5] group transition-all"
            >
              <span class="flex items-center text-[14px] font-bold">
                {{ $t("dashboard.readMore") }}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          <!-- RIGHT - Chakra banner -->

          <!-- Content -->
          <div class="hidden lg:block">
            <img
              src="../../assets/Image (1).png"
              alt="#"
              class="w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </a-card>
      <!-- IMAGE CARD -->
      <div
        :body-style="{ padding: '24px' }"
        class="flex items-center !bg-white justify-center rounded-2xl !p-[24px] text-white"
      >
        <div
          class="flex-1 flex flex-col !justify-between h-[250px]"
          style="
            background-image: url(https://evalogical.com/images/protifolio/Skillestial/Mask_Group_203_11zon.webp);
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            padding: 24px;
          "
        >
          <div>
            <h2
              class="text-[18px] font-bold text-white tracking-[0.5px]"
            >
              {{ $t("dashboard.workWithRockets") }}
            </h2>
            <p class="text-[14px] text-white leading-relaxed">
              {{ $t("dashboard.rocketsDescription") }}
            </p>
          </div>
          <button
            type="link"
            class="!p-0 !h-auto !text-white hover:!text-[#4FD1C5] group transition-all"
          >
            <span class="flex items-center text-[14px] font-bold">
              {{ $t("dashboard.readMore") }}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    <!-- ACTIVE USERS AND SALES OVERVIEW -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Active Users Bar Chart -->
      <div class="bg-white rounded-2xl overflow-hidden">
        <!-- Dark bar chart area -->
        <div class="bg-[#1A202C] rounded-2xl m-3 p-5">
          <div class="flex items-end gap-[6px] h-[160px]">
            <!-- Y axis -->
            <div
              class="flex flex-col justify-between h-full text-right pr-2 shrink-0"
            >
              <span class="text-[10px] text-white/40">500</span>
              <span class="text-[10px] text-white/40">400</span>
              <span class="text-[10px] text-white/40">300</span>
              <span class="text-[10px] text-white/40">200</span>
              <span class="text-[10px] text-white/40">100</span>
              <span class="text-[10px] text-white/40">0</span>
            </div>

            <!-- Bars -->
            <div class="flex items-end gap-[5px] flex-1 h-full">
              <div
                v-for="(bar, i) in barData"
                :key="i"
                class="flex-1 rounded-t-[3px] bg-white/70 hover:bg-[#4FD1C5] transition-colors duration-200 cursor-pointer"
                :style="{ height: bar + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Bottom info - white bg -->
        <div class="px-5 pb-5 pt-2">
          <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
            {{ $t("dashboard.activeUsers") }}
          </h3>
          <p class="text-[13px] !m-0 mt-1">
            <span class="text-[#48BB78] font-bold">(+23)</span>
            <span class="text-[#A0AEC0]"> {{ $t("dashboard.lastWeek") }}</span>
          </p>

          <div class="grid grid-cols-4 gap-3 mt-4">
            <div v-for="stat in userStats" :key="stat.label">
              <div
                class="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                :style="{ background: stat.color }"
              >
                <component :is="stat.icon" class="!text-white text-[15px]" />
              </div>
              <p
                class="text-[10px] text-[#A0AEC0] !m-0 uppercase tracking-wider"
              >
                {{ stat.label }}
              </p>
              <p class="text-[16px] font-bold text-[#1A202C] !m-0 mt-0.5">
                {{ stat.value }}
              </p>
              <div
                class="h-[3px] rounded-full mt-2"
                :style="{ background: stat.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sales Overview Line Chart -->
      <div class="bg-white rounded-2xl p-6">
        <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
          {{ $t("dashboard.salesOverview") }}
        </h3>
        <p class="text-[13px] !m-0 mt-1">
          <span class="text-[#48BB78] font-bold"
            >(+5) {{ $t("dashboard.more") }}</span
          >
          <span class="text-[#A0AEC0]"> {{ $t("dashboard.moreInYear") }}</span>
        </p>

        <div class="mt-4">
          <svg viewBox="0 0 600 220" class="w-full" preserveAspectRatio="none">
            <!-- Grid lines -->
            <line
              v-for="i in 5"
              :key="i"
              :x1="0"
              :y1="i * 40"
              :x2="600"
              :y2="i * 40"
              stroke="#E2E8F0"
              stroke-width="1"
            />

            <!-- Teal area -->
            <path
              d="M0,60 C40,55 80,100 120,110 C160,120 200,100 240,115 C280,130 320,90 360,85 C400,80 440,95 480,88 C520,82 560,75 600,65 L600,220 L0,220 Z"
              fill="rgba(79,209,197,0.3)"
            />
            <!-- Teal line -->
            <path
              d="M0,60 C40,55 80,100 120,110 C160,120 200,100 240,115 C280,130 320,90 360,85 C400,80 440,95 480,88 C520,82 560,75 600,65"
              fill="none"
              stroke="#4FD1C5"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Gray area (below teal) -->
            <path
              d="M0,100 C40,110 80,140 120,145 C160,150 200,140 240,148 C280,155 320,140 360,138 C400,136 440,145 480,142 C520,139 560,135 600,130 L600,220 L0,220 Z"
              fill="rgba(160,174,192,0.2)"
            />
            <!-- Dark line -->
            <path
              d="M0,100 C40,110 80,140 120,145 C160,150 200,140 240,148 C280,155 320,140 360,138 C400,136 440,145 480,142 C520,139 560,135 600,130"
              fill="none"
              stroke="#2D3748"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Y axis labels -->
            <text x="8" y="45" fill="#A0AEC0" font-size="10">500</text>
            <text x="8" y="85" fill="#A0AEC0" font-size="10">400</text>
            <text x="8" y="125" fill="#A0AEC0" font-size="10">300</text>
            <text x="8" y="165" fill="#A0AEC0" font-size="10">200</text>
            <text x="8" y="205" fill="#A0AEC0" font-size="10">100</text>
          </svg>

          <!-- X axis -->
          <div class="flex justify-between mt-1 px-1">
            <span
              v-for="m in months"
              :key="m"
              class="text-[10px] text-[#A0AEC0]"
              >{{ m }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- PROJECTS AND ORDERS OVERVIEW SECTIONDS -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Projects table -->
      <div class="lg:col-span-2 bg-white rounded-2xl overflow-hidden">
        <div class="p-6 flex items-center justify-between">
          <div>
            <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
              {{ $t("dashboard.projects") }}
            </h3>
            <p class="text-[13px] !m-0 mt-1 flex items-center gap-1">
              <span
                class="w-2 h-2 rounded-full bg-[#48BB78] inline-block"
              ></span>
              <span class="!font-bold text-[#1A202C]"
                >30 {{ $t("dashboard.done") }}</span
              >
              <span class="text-[#A0AEC0]">{{
                $t("dashboard.thisMonth")
              }}</span>
            </p>
          </div>
          <a-button
            type="text"
            size="small"
            class="!w-8 !h-8 !p-0 !flex !items-center !justify-center hover:!bg-[#F7FAFC]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-[#A0AEC0]"
            >
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </a-button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th
                  class="text-left px-6 py-3 text-[11px] font-semibold text-[#A0AEC0] uppercase tracking-wider"
                >
                  {{ $t("dashboard.company") }}
                </th>
                <th
                  class="text-left px-6 py-3 text-[11px] font-semibold text-[#A0AEC0] uppercase tracking-wider"
                >
                  {{ $t("dashboard.members") }}
                </th>
                <th
                  class="text-left px-6 py-3 text-[11px] font-semibold text-[#A0AEC0] uppercase tracking-wider"
                >
                  {{ $t("dashboard.budget") }}
                </th>
                <th
                  class="text-left px-6 py-3 text-[11px] font-semibold text-[#A0AEC0] uppercase tracking-wider"
                >
                  {{ $t("dashboard.completion") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="project in projects"
                :key="project.name"
                class="border-b border-black/14 hover:bg-[#F7FAFC] transition-colors"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img
                      :src="project.icon"
                      :alt="project.name"
                      class="w-5 h-5 rounded-lg object-contain shrink-0"
                    />
                    <span class="text-[13px] font-semibold text-[#1A202C]">{{
                      project.name
                    }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex -space-x-2">
                    <img
                      v-for="(m, j) in project.members"
                      :key="j"
                      :src="avatars[j % avatars.length]"
                      class="w-7 h-7 rounded-full border-2 border-white object-cover shrink-0"
                    />
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-[13px] font-semibold text-[#1A202C]">{{
                    project.budget
                  }}</span>
                </td>
                <td class="px-6 py-4 min-w-[140px]">
                  <div class="flex items-center gap-2">
                    <div
                      class="flex-1 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full rounded-full bg-[#4FD1C5] transition-all duration-500"
                        :style="{ width: project.completion + '%' }"
                      ></div>
                    </div>
                    <span
                      class="text-[12px] font-semibold text-[#4FD1C5] whitespace-nowrap"
                    >
                      {{ project.completion }}%
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Orders overview -->
      <div class="bg-white rounded-2xl p-6">
        <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
          {{ $t("dashboard.ordersOverview") }}
        </h3>
        <p class="text-[13px] !m-0 mt-1">
          <span class="text-[#48BB78] font-bold">+30%</span>
          <span class="text-[#A0AEC0]"> {{ $t("dashboard.thisMonth") }}</span>
        </p>

        <div class="mt-5 flex flex-col">
          <div
            v-for="(order, i) in orders"
            :key="order.id"
            class="flex items-start gap-3"
          >
            <!-- Icon + line -->
            <div class="flex flex-col items-center shrink-0">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                :style="{ background: order.color + '20' }"
              >
                <div
                  class="w-3 h-3 rounded-full"
                  :style="{ background: order.color }"
                ></div>
              </div>
              <div
                v-if="i !== orders.length - 1"
                class="w-px h-6 bg-[#E2E8F0] mt-1"
              ></div>
            </div>

            <!-- Text -->
            <div class="pb-2">
              <p class="text-[13px] font-semibold text-[#1A202C] !m-0">
                {{ order.title }}
              </p>
              <p class="text-[11px] text-[#A0AEC0] !m-0 mt-0.5">
                {{ order.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="px-4 md:px-6 lg:px-[270px]">
    <Footer />
  </div>
</template>

<script setup>
import SvgIcon from "@/components/common/SvgIcon.vue";
import Footer from "@/components/common/Footer.vue";
import chakraIcon from "../../assets/Icon.svg";
import progressIcon from "../../assets/Group 3.svg";
import platformIcon from "../../assets/slack-new-logo 1.png";
import mobileIcon from "../../assets/Icon.png";
import pricingIcon from "../../assets/jira-3 1.png";
import shopIcon from "../../assets/Image (1).png";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  UserOutlined,
  RiseOutlined,
  DollarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

const { t } = useI18n();

const walletSvg = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.19668 4.56816H18.2592C18.4234 4.56809 18.5875 4.57851 18.7505 4.59937C18.6953 4.21167 18.5621 3.83917 18.359 3.50433C18.1559 3.16949 17.8871 2.87925 17.5688 2.6511C17.2506 2.42294 16.8894 2.26161 16.507 2.17683C16.1247 2.09204 15.7292 2.08556 15.3443 2.15776L3.7792 4.13223H3.76602C3.04007 4.27105 2.39451 4.68178 1.96118 5.28052C2.61403 4.81616 3.39553 4.56713 4.19668 4.56816V4.56816Z" fill="white"/>
<path d="M18.2593 5.62482H4.19678C3.45111 5.62563 2.73621 5.92221 2.20894 6.44948C1.68167 6.97675 1.38509 7.69164 1.38428 8.43732V16.8748C1.38509 17.6205 1.68167 18.3354 2.20894 18.8627C2.73621 19.3899 3.45111 19.6865 4.19678 19.6873H18.2593C19.0049 19.6865 19.7198 19.3899 20.2471 18.8627C20.7744 18.3354 21.071 17.6205 21.0718 16.8748V8.43732C21.071 7.69164 20.7744 6.97675 20.2471 6.44948C19.7198 5.92221 19.0049 5.62563 18.2593 5.62482V5.62482ZM16.1719 14.0623C15.8937 14.0623 15.6219 13.9798 15.3906 13.8253C15.1593 13.6708 14.9791 13.4512 14.8727 13.1942C14.7662 12.9373 14.7384 12.6545 14.7926 12.3817C14.8469 12.1089 14.9808 11.8584 15.1775 11.6617C15.3742 11.465 15.6247 11.3311 15.8975 11.2768C16.1703 11.2226 16.4531 11.2504 16.71 11.3569C16.967 11.4633 17.1866 11.6435 17.3411 11.8748C17.4956 12.1061 17.5781 12.3779 17.5781 12.6561C17.5781 13.029 17.43 13.3867 17.1662 13.6504C16.9025 13.9142 16.5448 14.0623 16.1719 14.0623Z" fill="white"/>
<path d="M1.40625 11.4014V7.02881C1.40625 6.07651 1.93359 4.47998 3.76392 4.13413C5.31738 3.84277 6.85547 3.84277 6.85547 3.84277C6.85547 3.84277 7.86621 4.5459 7.03125 4.5459C6.19629 4.5459 6.21826 5.62256 7.03125 5.62256C7.84424 5.62256 7.03125 6.65527 7.03125 6.65527L3.75732 10.3687L1.40625 11.4014Z" fill="white"/>
</svg>
`;
const statCards = computed(() => [
  {
    title: t("dashboard.todayMoney"),
    value: "$53,000",
    changeText: "+55%",
    positive: true,
    icon: walletSvg,
  },
  {
    title: t("dashboard.todayUsers"),
    value: "2,300",
    changeText: "+5%",
    positive: true,
    icon: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2501 2.10858C6.20212 2.10858 2.1095 6.20121 2.1095 11.2492C2.1095 16.2972 6.20212 20.3898 11.2501 20.3898C16.2981 20.3898 20.3907 16.2972 20.3907 11.2492C20.3907 6.20121 16.2981 2.10858 11.2501 2.10858Z" fill="white" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
<path d="M11.25 2.10858C8.69812 2.10858 6.29871 6.20121 6.29871 11.2492C6.29871 16.2972 8.69812 20.3898 11.25 20.3898C13.8019 20.3898 16.2013 16.2972 16.2013 11.2492C16.2013 6.20121 13.8019 2.10858 11.25 2.10858Z" fill="white" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
<path d="M5.15625 5.15552C6.83672 6.34863 8.95225 7.06011 11.2501 7.06011C13.548 7.06011 15.6636 6.34863 17.344 5.15552" fill="white"/>
<path d="M5.15625 5.15552C6.83672 6.34863 8.95225 7.06011 11.2501 7.06011C13.548 7.06011 15.6636 6.34863 17.344 5.15552" stroke="#4FD1C5" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.344 17.3444C15.6636 16.1513 13.548 15.4398 11.2501 15.4398C8.95225 15.4398 6.83672 16.1513 5.15625 17.3444" stroke="#4FD1C5" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2501 2.10858V20.3898" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
<path d="M20.3907 11.249H2.1095" stroke="#4FD1C5" stroke-width="0.75" stroke-miterlimit="10"/>
</svg>
`,
  },
  {
    title: t("dashboard.newClients"),
    value: "+3,052",
    changeText: "-14%",
    positive: false,
    icon: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.32812 1.41821H10.3711C10.4146 1.41821 10.4565 1.4353 10.4873 1.46606C10.5181 1.49683 10.5352 1.53876 10.5352 1.58228V7.73462C10.5352 8.29717 10.7585 8.83684 11.1562 9.23462C11.554 9.6324 12.0937 9.85571 12.6562 9.85571H18.8086C18.8521 9.85571 18.894 9.8728 18.9248 9.90356C18.9556 9.93433 18.9727 9.97626 18.9727 10.0198V18.2815C18.9727 19.0243 18.6776 19.7367 18.1523 20.262C17.6271 20.7872 16.9147 21.0823 16.1719 21.0823H6.32812C5.58531 21.0823 4.8729 20.7872 4.34766 20.262C3.82241 19.7367 3.52734 19.0243 3.52734 18.2815V4.21899C3.52734 3.47618 3.82241 2.76377 4.34766 2.23853C4.8729 1.71328 5.58531 1.41821 6.32812 1.41821ZM7.73438 15.4573C7.54479 15.4573 7.36258 15.5322 7.22852 15.6663C7.09446 15.8003 7.01953 15.9825 7.01953 16.1721C7.01953 16.3617 7.09446 16.5439 7.22852 16.678C7.36257 16.812 7.54479 16.887 7.73438 16.887H14.7656C14.9552 16.887 15.1374 16.812 15.2715 16.678C15.4055 16.5439 15.4805 16.3617 15.4805 16.1721C15.4805 15.9825 15.4055 15.8003 15.2715 15.6663C15.1374 15.5322 14.9552 15.4573 14.7656 15.4573H7.73438ZM7.73438 11.9417C7.54479 11.9417 7.36258 12.0166 7.22852 12.1506C7.09446 12.2847 7.01953 12.4669 7.01953 12.6565C7.01953 12.8461 7.09446 13.0283 7.22852 13.1624C7.36257 13.2964 7.54479 13.3713 7.73438 13.3713H14.7656C14.9552 13.3713 15.1374 13.2964 15.2715 13.1624C15.4055 13.0283 15.4805 12.8461 15.4805 12.6565C15.4805 12.4669 15.4055 12.2847 15.2715 12.1506C15.1374 12.0166 14.9552 11.9417 14.7656 11.9417H7.73438Z" fill="white" stroke="#4FD1C5" stroke-width="0.0234375"/>
<path d="M12.0555 1.95636C12.0703 1.95927 12.084 1.96726 12.0946 1.97784L18.4139 8.29718C18.4245 8.30783 18.4325 8.32151 18.4354 8.33624C18.4383 8.35094 18.4363 8.36635 18.4305 8.38019C18.4248 8.39392 18.4155 8.40603 18.4032 8.41437C18.3907 8.42274 18.3752 8.427 18.3602 8.42706H12.6561C12.4728 8.42706 12.2965 8.35458 12.1669 8.22491C12.0372 8.09525 11.9647 7.91901 11.9647 7.73566V2.03156C11.9648 2.01671 11.9692 2.00193 11.9774 1.98956C11.9858 1.97715 11.9978 1.96699 12.0116 1.96124C12.0254 1.95553 12.0409 1.9535 12.0555 1.95636Z" fill="white" stroke="#4FD1C5" stroke-width="0.0234375"/>
</svg>
`,
  },
  {
    title: t("dashboard.totalSales"),
    value: "$173,000",
    changeText: "+8%",
    positive: true,
    icon: `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.73425 19.6874C8.5109 19.6874 9.1405 19.0578 9.1405 18.2811C9.1405 17.5045 8.5109 16.8749 7.73425 16.8749C6.9576 16.8749 6.328 17.5045 6.328 18.2811C6.328 19.0578 6.9576 19.6874 7.73425 19.6874Z" fill="white"/>
<path d="M17.5781 19.6874C18.3547 19.6874 18.9843 19.0578 18.9843 18.2811C18.9843 17.5045 18.3547 16.8749 17.5781 16.8749C16.8014 16.8749 16.1718 17.5045 16.1718 18.2811C16.1718 19.0578 16.8014 19.6874 17.5781 19.6874Z" fill="white"/>
<path d="M20.0741 5.30796C19.9753 5.18713 19.8509 5.08981 19.7098 5.02308C19.5687 4.95634 19.4146 4.92185 19.2585 4.92212H5.88375L5.61436 3.3937C5.58564 3.2309 5.50046 3.08342 5.37381 2.97717C5.24715 2.87093 5.0871 2.81271 4.92178 2.81274H2.10928C1.9228 2.81274 1.74396 2.88682 1.6121 3.01868C1.48024 3.15055 1.40616 3.32939 1.40616 3.51587C1.40616 3.70235 1.48024 3.88119 1.6121 4.01305C1.74396 4.14491 1.9228 4.21899 2.10928 4.21899H4.33204L6.33858 15.5912C6.3673 15.754 6.45248 15.9014 6.57913 16.0077C6.70579 16.1139 6.86584 16.1721 7.03116 16.1721H18.2812C18.4676 16.1721 18.6465 16.098 18.7783 15.9662C18.9102 15.8343 18.9843 15.6555 18.9843 15.469C18.9843 15.2825 18.9102 15.1037 18.7783 14.9718C18.6465 14.8399 18.4676 14.7659 18.2812 14.7659H7.6209L7.37305 13.3596H17.9929C18.2367 13.3593 18.473 13.2748 18.6616 13.1203C18.8503 12.9658 18.9798 12.7509 19.0282 12.5119L20.2938 6.18379C20.3243 6.03064 20.3205 5.87263 20.2825 5.72117C20.2445 5.56971 20.1733 5.42857 20.0741 5.30796Z" fill="white"/>
</svg>
`,
  },
]);

const barData = [20, 40, 30, 60, 45, 75, 55, 80, 65, 90, 70, 85];

const userStats = computed(() => [
  {
    label: t("dashboard.users"),
    value: "32,984",
    color: "#3BCBBE",
    icon: UserOutlined,
  },
  {
    label: t("dashboard.clicks"),
    value: "2.42m",
    color: "#3BCBBE",
    icon: RiseOutlined,
  },
  {
    label: t("dashboard.sales"),
    value: "2,400$",
    color: "#3BCBBE",
    icon: DollarOutlined,
  },
  {
    label: t("dashboard.items"),
    value: "320",
    color: "#3BCBBE",
    icon: AppstoreOutlined,
  },
]);

const months = computed(() => [
  t("dashboard.months.jan"),
  t("dashboard.months.feb"),
  t("dashboard.months.mar"),
  t("dashboard.months.apr"),
  t("dashboard.months.may"),
  t("dashboard.months.jun"),
  t("dashboard.months.jul"),
  t("dashboard.months.aug"),
  t("dashboard.months.sep"),
  t("dashboard.months.oct"),
  t("dashboard.months.nov"),
  t("dashboard.months.dec"),
]);

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
];

const projects = [
  {
    name: "Chakra Soft UI Version",
    icon: chakraIcon,
    members: [0, 1, 2, 3],
    budget: "$14,000",
    completion: 60,
    color: "#4FD1C5",
  },
  {
    name: "Add Progress Track",
    icon: progressIcon,
    members: [0, 1],
    budget: "$3,000",
    completion: 10,
    color: "#667EEA",
  },
  {
    name: "Fix Platform Errors",
    icon: platformIcon,
    members: [0, 1],
    budget: "Not set",
    completion: 100,
    color: "#F6AD55",
  },
  {
    name: "Launch our Mobile App",
    icon: mobileIcon,
    members: [0, 1, 2, 3],
    budget: "$32,000",
    completion: 100,
    color: "#48BB78",
  },
  {
    name: "Add the New Pricing Page",
    icon: pricingIcon,
    members: [0, 1, 2, 3, 4],
    budget: "$400",
    completion: 25,
    color: "#667EEA",
  },
  {
    name: "Redesign New Online Shop",
    icon: shopIcon,
    members: [0, 1],
    budget: "$7,600",
    completion: 40,
    color: "#FC8181",
  },
];
const orders = [
  {
    id: 1,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "#4FD1C5",
  },
  {
    id: 2,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "#FC8181",
  },
  {
    id: 3,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "#667EEA",
  },
  {
    id: 4,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "#F6AD55",
  },
  {
    id: 5,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "#48BB78",
  },
  {
    id: 6,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    color: "#B794F4",
  },
];
</script>

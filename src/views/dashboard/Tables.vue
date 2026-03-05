<template>
  <main
    class="!pt-18 p-4 md:p-6 flex flex-col gap-6 md:pl-[270px]"
  >
    <div class="bg-white rounded-2xl max-w-full">
      <div class="p-6">
        <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
          {{ $t("tables.subtitle") }}
        </h3>
      </div>

      <div>
        <a-table
          :dataSource="authors"
          :columns="authorColumns"
          :pagination="false"
          row-key="email"
          :scroll="{ x: 800 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'author'">
              <div class="flex items-center gap-3">
                <img
                  :src="record.avatar"
                  :alt="record.name"
                  class="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p class="text-[13px] font-bold text-[#1A202C] !m-0">
                    {{ record.name }}
                  </p>
                  <p class="text-[12px] text-[#A0AEC0] !m-0">
                    {{ record.email }}
                  </p>
                </div>
              </div>
            </template>

            <template v-else-if="column.key === 'function'">
              <div>
                <p class="text-[13px] font-bold text-[#1A202C] !m-0">
                  {{ $t(`tables.roles.${record.roleKey}`) }}
                </p>
                <p class="text-[12px] text-[#A0AEC0] !m-0">
                  {{ $t(`tables.departments.${record.departmentKey}`) }}
                </p>
              </div>
            </template>

            <template v-else-if="column.key === 'status'">
              <a-tag
                :color="record.statusKey === 'online' ? 'success' : 'default'"
                class="rounded-full px-3 py-0.5 text-[12px] font-semibold"
              >
                {{ $t(`tables.statuses.${record.statusKey}`) }}
              </a-tag>
            </template>

            <template v-else-if="column.key === 'employed'">
              <span class="text-[13px] font-semibold text-[#1A202C]">{{
                record.employed
              }}</span>
            </template>

            <template v-else-if="column.key === 'action'">
              <a-button
                type="link"
                class="!text-[green] p-1 !text-[13px] font-semibold hover:!text-[#4FD1C5]"
                @click="openEditAuthor(record)"
              >
                {{ $t("tables.edit") }}
              </a-button>
            </template>
          </template>
        </a-table>
      </div>
    </div>

    <div class="bg-white rounded-2xl overflow-hidden max-w-full">
      <div class="p-6">
        <h3 class="text-[18px] !font-bold text-[#1A202C] !m-0">
          {{ $t("dashboard.projects") }}
        </h3>
        <p class="text-[13px] !m-0 mt-1 flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-[#48BB78] inline-block"></span>
          <span class="font-bold text-[#1A202C]">{{
            $t("tables.doneThisMonth")
          }}</span>
          <span class="text-[#A0AEC0]">{{ $t("dashboard.thisMonth") }}</span>
        </p>
      </div>

      <div class="overflow-x-auto">
        <a-table
          :dataSource="projects"
          :columns="projectColumns"
          :pagination="false"
          row-key="name"
          :scroll="{ x: 900 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <div class="flex items-center gap-3">
                <img
                  :src="record.icon"
                  :alt="record.name"
                  class="w-7 h-7 rounded-lg object-contain shrink-0"
                />
                <span class="text-[13px] font-semibold text-[#1A202C]">{{
                  record.name
                }}</span>
              </div>
            </template>

            <template v-else-if="column.key === 'budget'">
              <span class="text-[13px] font-semibold text-[#1A202C]">{{
                record.budget
              }}</span>
            </template>

            <template v-else-if="column.key === 'status'">
              <span class="text-[13px] text-[#1A202C]">{{
                $t(`tables.projectStatuses.${record.statusKey}`)
              }}</span>
            </template>

            <template v-else-if="column.key === 'completion'">
              <div class="flex items-center gap-2 min-w-[140px]">
                <a-progress
                  :percent="record.completion"
                  :show-info="false"
                  stroke-color="#4FD1C5"
                  trail-color="#E2E8F0"
                  :stroke-width="6"
                  class="flex-1"
                />
                <span
                  class="text-[12px] font-semibold text-[#4FD1C5] whitespace-nowrap"
                >
                  {{ record.completion }}%
                </span>
              </div>
            </template>

            <template v-else-if="column.key === 'action'">
              <a-button
                type="text"
                class="!p-0 !w-7 !h-7 !flex !items-center !justify-center hover:!bg-gray-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 text-[#A0AEC0] hover:!text-[#4FD1C5]"
                >
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                </svg>
              </a-button>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </main>

  <a-modal
    v-model:open="isEditAuthorOpen"
    :title="$t('tables.editAuthorFunction')"
    :ok-text="$t('tables.save')"
    :cancel-text="$t('tables.cancel')"
    @ok="saveAuthorFunction"
  >
    <div class="flex flex-col gap-4">
      <div>
        <p
          class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
        >
          {{ $t("tables.function") }}
        </p>
        <a-select
          v-model:value="editForm.roleKey"
          class="w-full"
          :options="roleOptions"
        />
      </div>

      <div>
        <p
          class="text-[12px] font-semibold text-[#A0AEC0] uppercase tracking-wider !m-0 mb-2"
        >
          {{ $t("tables.department") }}
        </p>
        <a-select
          v-model:value="editForm.departmentKey"
          class="w-full"
          :options="departmentOptions"
        />
      </div>
    </div>
  </a-modal>

  <div class="px-4 md:px-6 lg:px-[270px]">
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/common/Footer.vue";
import { computed, ref } from "vue";
import chakraIcon from "../../assets/Icon.svg";
import progressIcon from "../../assets/Group 3.svg";
import platformIcon from "../../assets/slack-new-logo 1.png";
import mobileIcon from "../../assets/Icon.png";
import pricingIcon from "../../assets/jira-3 1.png";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const isEditAuthorOpen = ref(false);
const editingAuthorEmail = ref(null);
const editForm = ref({
  roleKey: "manager",
  departmentKey: "organization",
});
const DEFAULT_OPTION = "__default__";

const authorColumns = computed(() => [
  {
    title: t("tables.author").toUpperCase(),
    key: "author",
    dataIndex: "name",
  },
  {
    title: t("tables.function").toUpperCase(),
    key: "function",
    dataIndex: "role",
    responsive: ["md"],
  },
  {
    title: t("tables.status").toUpperCase(),
    key: "status",
    dataIndex: "statusKey",
  },
  {
    title: t("tables.employed").toUpperCase(),
    key: "employed",
    dataIndex: "employed",
    responsive: ["lg"],
  },
  {
    title: "",
    key: "action",
  },
]);

const projectColumns = computed(() => [
  {
    title: t("dashboard.company").toUpperCase(),
    key: "name",
    dataIndex: "name",
  },
  {
    title: t("dashboard.budget").toUpperCase(),
    key: "budget",
    dataIndex: "budget",
    responsive: ["md"],
  },
  {
    title: t("tables.status").toUpperCase(),
    key: "status",
    dataIndex: "statusKey",
  },
  {
    title: t("dashboard.completion").toUpperCase(),
    key: "completion",
    dataIndex: "completion",
    responsive: ["md"],
  },
  {
    title: "",
    key: "action",
  },
]);

const authors = computed(() => [
  {
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    roleKey: "manager",
    departmentKey: "organization",
    defaultRoleKey: "manager",
    defaultDepartmentKey: "organization",
    statusKey: "online",
    employed: "14/06/21",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    roleKey: "programmer",
    departmentKey: "developer",
    defaultRoleKey: "programmer",
    defaultDepartmentKey: "developer",
    statusKey: "offline",
    employed: "14/06/21",
  },
  {
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    roleKey: "executive",
    departmentKey: "projects",
    defaultRoleKey: "executive",
    defaultDepartmentKey: "projects",
    statusKey: "online",
    employed: "14/06/21",
  },
  {
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    roleKey: "manager",
    departmentKey: "organization",
    defaultRoleKey: "manager",
    defaultDepartmentKey: "organization",
    statusKey: "online",
    employed: "14/06/21",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    roleKey: "programmer",
    departmentKey: "developer",
    defaultRoleKey: "programmer",
    defaultDepartmentKey: "developer",
    statusKey: "offline",
    employed: "14/06/21",
  },
  {
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    avatar: "https://i.pravatar.cc/150?img=6",
    roleKey: "designer",
    departmentKey: "uiuxDesign",
    defaultRoleKey: "designer",
    defaultDepartmentKey: "uiuxDesign",
    statusKey: "offline",
    employed: "14/06/21",
  },
]);

const projects = computed(() => [
  {
    name: t("dashboard.projectNames.chakraSoftUiVersion"),
    icon: chakraIcon,
    budget: "$14,000",
    statusKey: "working",
    completion: 60,
  },
  {
    name: t("dashboard.projectNames.addProgressTrack"),
    icon: progressIcon,
    budget: "$3,000",
    statusKey: "canceled",
    completion: 10,
  },
  {
    name: t("dashboard.projectNames.fixPlatformErrors"),
    icon: platformIcon,
    budget: t("dashboard.notSet"),
    statusKey: "done",
    completion: 100,
  },
  {
    name: t("dashboard.projectNames.launchOurMobileApp"),
    icon: mobileIcon,
    budget: "$32,000",
    statusKey: "done",
    completion: 100,
  },
  {
    name: t("dashboard.projectNames.addTheNewPricingPage"),
    icon: pricingIcon,
    budget: "$400",
    statusKey: "working",
    completion: 25,
  },
]);

const roleOptions = computed(() => [
  { value: DEFAULT_OPTION, label: t("tables.defaultRole") },
  { value: "manager", label: t("tables.roles.manager") },
  { value: "programmer", label: t("tables.roles.programmer") },
  { value: "executive", label: t("tables.roles.executive") },
  { value: "designer", label: t("tables.roles.designer") },
]);

const departmentOptions = computed(() => [
  { value: DEFAULT_OPTION, label: t("tables.defaultDepartment") },
  { value: "organization", label: t("tables.departments.organization") },
  { value: "developer", label: t("tables.departments.developer") },
  { value: "projects", label: t("tables.departments.projects") },
  { value: "uiuxDesign", label: t("tables.departments.uiuxDesign") },
]);

function openEditAuthor(author) {
  editingAuthorEmail.value = author.email;
  editForm.value.roleKey = author.roleKey;
  editForm.value.departmentKey = author.departmentKey;
  isEditAuthorOpen.value = true;
}

function saveAuthorFunction() {
  const row = authors.value.find((a) => a.email === editingAuthorEmail.value);
  if (!row) {
    isEditAuthorOpen.value = false;
    return;
  }

  row.roleKey =
    editForm.value.roleKey === DEFAULT_OPTION
      ? row.defaultRoleKey
      : editForm.value.roleKey;
  row.departmentKey =
    editForm.value.departmentKey === DEFAULT_OPTION
      ? row.defaultDepartmentKey
      : editForm.value.departmentKey;
  isEditAuthorOpen.value = false;
}
</script>

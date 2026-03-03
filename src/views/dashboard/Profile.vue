<template>
  <main
    class="profile-page !pt-18 p-4 md:p-6 flex flex-col gap-6 lg:pl-[270px] md:pl-[270px] pl-[80px] w-full max-w-full min-w-0 box-border"
  >
    <div class="profile-top-bg rounded-[15px] mx-2" aria-hidden="true"></div>

    <!-- Profile Header -->
<div
  class="relative mt-[240px] lg:ml-9 ml-4 w-[95%] z-10"
>
  <!-- Card -->
  <div class="backdrop-blur-lg rounded-2xl shadow-sm px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-white/20 backdrop-blur-sm">
    
    <!-- Avatar + name -->
    <div class="flex items-center gap-4 flex-1 min-w-0">
      <div class="relative flex-shrink-0">
        <img
          :src="profileHeader.avatar"
          :alt="$t('profile.avatarAlt')"
          class="w-[74px] h-[74px] rounded-xl object-cover shadow-md border-2 border-white"
        />
        <button
          @click="openEditProfile"
          :title="$t('profile.editProfile')"
          class="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-[7px] flex items-center justify-center text-white shadow transition-colors border-2 border-white p-0 cursor-pointer"
        >
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_67_309)">
<path d="M1.5 8.73003V10.25C1.5 10.39 1.61 10.5 1.75 10.5H3.27C3.335 10.5 3.4 10.475 3.445 10.425L8.905 4.97003L7.03 3.09503L1.575 8.55003C1.525 8.60003 1.5 8.66003 1.5 8.73003ZM10.355 3.52003C10.55 3.32503 10.55 3.01003 10.355 2.81503L9.185 1.64503C8.99 1.45003 8.675 1.45003 8.48 1.64503L7.565 2.56003L9.44 4.43503L10.355 3.52003Z" fill="#4FD1C5"/>
</g>
<defs>
<clipPath id="clip0_67_309">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

        </button>
      </div>
      <div class="min-w-0">
        <h2 class="text-base font-bold text-gray-800 leading-tight">{{ profileHeader.name }}</h2>
        <p class="text-sm text-gray-400 truncate">{{ profileHeader.email }}</p>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 flex-wrap p-1 bg-gray-100/60 rounded-2xl w-fit self-center sm:self-auto">
      <button
        v-for="tab in profileTabs"
        :key="tab.key"
        @click="setActiveTab(tab.key)"
        :class="[
          'flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border whitespace-nowrap',
          activeProfileTab === tab.key
            ? 'bg-white text-[#2D3748] border-white shadow-sm'
            : 'bg-transparent text-gray-400 border-transparent hover:text-gray-600',
        ]"
      >
        <span class="text-sm leading-none">{{ tab.icon }}</span>
        {{ $t(tab.label) }}
      </button>
    </div>
  </div>
</div>

    <!-- Edit Profile Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="editProfileOpen"
          class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
          @click.self="closeEditProfile"
        >
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div class="flex items-center justify-between mb-5">
              <h2 class="text-lg font-bold text-gray-800">{{ $t("profile.editProfile") }}</h2>
              <button @click="closeEditProfile" class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer border-none bg-transparent">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-col items-center gap-3 mb-5">
              <div class="relative">
                <img :src="editForm.avatar || profileHeader.avatar" class="w-20 h-20 rounded-xl object-cover border-2 border-gray-100" />
                <button
                  @click="$refs.editAvatarInput.click()"
                  class="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4FD1C5] rounded-full flex items-center justify-center text-white shadow hover:bg-[#38B2AC] transition-colors border-none cursor-pointer"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828a2 2 0 01-1.414.586H9v-2a2 2 0 01.586-1.414z" />
                  </svg>
                </button>
                <input ref="editAvatarInput" type="file" accept="image/*" class="hidden" @change="onEditAvatarChange" />
              </div>
              <p class="text-xs text-gray-400">{{ $t("profile.changePhotoHint") }}</p>
            </div>
            <div class="flex flex-col gap-4">
              <div>
                <label class="text-sm font-semibold text-gray-700 mb-1 block">{{ $t("profile.fullName") }}</label>
                <input v-model="editForm.name" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4FD1C5] transition-colors" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-700 mb-1 block">{{ $t("profile.email") }}</label>
                <input v-model="editForm.email" type="email" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4FD1C5] transition-colors" />
              </div>
            </div>
            <div class="flex gap-3 mt-6">
              <button @click="closeEditProfile" class="flex-1 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors bg-white cursor-pointer">
                {{ $t("profile.cancel") }}
              </button>
              <button @click="saveEditProfile" class="flex-1 bg-[#4FD1C5] rounded-xl py-2.5 text-sm font-medium !text-white hover:bg-[#38B2AC] transition-colors border-none cursor-pointer">
                {{ $t("profile.save") }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ═══════ OVERVIEW TAB — settings + projects hammasi ═══════ -->
    <div v-if="activeProfileTab === 'overview'">
      <!-- Profile Settings Cards -->
      <section class="relative z-10 bg-transparent p-6 w-full min-w-0 pl-0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full min-w-0">

          <!-- 1. Platform Settings -->
          <a-card class="rounded-2xl shadow-sm h-full">
            <template #title>
              <span class="text-lg font-bold text-gray-800">{{ $t("profile.platformSettings") }}</span>
            </template>
            <p class="text-[10px] font-bold tracking-widest text-gray-400 mb-3">{{ $t("profile.account") }}</p>
            <div class="flex flex-col gap-4 mb-6">
              <div v-for="item in accountSettings" :key="item.key" class="flex items-center gap-3">
                <a-switch v-model:checked="item.value" class="flex-shrink-0" />
                <span class="text-sm text-gray-500">{{ item.label }}</span>
              </div>
            </div>
            <p class="text-[10px] font-bold tracking-widest text-gray-400 mb-3">{{ $t("profile.application") }}</p>
            <div class="flex flex-col gap-4">
              <div v-for="item in appSettings" :key="item.key" class="flex items-center gap-3">
                <a-switch v-model:checked="item.value" class="flex-shrink-0" />
                <span class="text-sm text-gray-500">{{ item.label }}</span>
              </div>
            </div>
          </a-card>

          <!-- 2. Profile Information -->
          <a-card class="rounded-2xl shadow-sm h-full">
            <template #title>
              <span class="text-lg font-bold text-gray-800">{{ $t("profile.profileInfo") }}</span>
            </template>
            <a-typography-paragraph
              v-model:content="profile.bio"
              :editable="{ triggerType: ['text', 'icon'] }"
              class="!text-sm !text-gray-400 !leading-relaxed !mb-4"
            />
            <a-divider class="my-3" />
            <div class="flex flex-col gap-3">
              <div v-for="row in profileFields" :key="row.key" class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-semibold text-gray-700 min-w-[80px]">{{ row.label }}:</span>
                <a-typography-text
                  v-model:content="profile[row.key]"
                  :editable="row.key === 'mobile'
                    ? { triggerType: ['text', 'icon'], onChange: onMobileChange }
                    : { triggerType: ['text', 'icon'] }"
                  :class="row.muted ? '!text-gray-400' : '!text-gray-700'"
                  class="!text-sm flex-1"
                />
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-sm font-semibold text-gray-700 min-w-[80px]">{{ $t("profile.socialMedia") }}:</span>
                <div class="flex gap-2">
                  <a-tooltip title="Facebook">
                    <a href="#" class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </a-tooltip>
                  <a-tooltip title="Twitter">
                    <a href="#" class="w-7 h-7 rounded-full bg-sky-400 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </a-tooltip>
                  <a-tooltip title="Instagram">
                    <a href="#" class="w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity" style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </a-tooltip>
                </div>
              </div>
            </div>
          </a-card>

          <!-- 3. Conversations -->
          <a-card class="rounded-2xl shadow-sm h-full md:col-span-2 lg:col-span-1">
            <template #title>
              <span class="text-lg font-bold text-gray-800">{{ $t("profile.conversations") }}</span>
            </template>
            <div v-for="(conv, i) in conversations" :key="conv.id">
              <a-list-item class="!px-0" :class="i < conversations.length - 1 ? 'border-b border-gray-50' : ''">
                <div class="flex items-center gap-3 w-full">
                  <a-avatar :src="conv.avatar" :size="40" />
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-800 mb-0">{{ conv.name }}</p>
                    <p class="text-xs text-gray-400 truncate mb-0">{{ conv.message }}</p>
                  </div>
                  <a-button type="link" size="small" class="!font-bold !text-xs !tracking-wider !p-0" @click="conv.open = !conv.open">
                    {{ $t("profile.reply") }}
                  </a-button>
                </div>
                <div v-if="conv.open" class="flex gap-2 mt-2 pl-12 w-full">
                  <a-input
                    v-model:value="conv.reply"
                    size="small"
                    :placeholder="$t('profile.replyTo', { name: conv.name })"
                    class="flex-1 !rounded-lg !text-xs"
                    @pressEnter="sendReply(conv)"
                  />
                  <a-button size="small" type="primary" class="!rounded-lg !text-xs" @click="sendReply(conv)">
                    {{ $t("profile.send") }}
                  </a-button>
                </div>
                <div v-if="conv.replies.length" class="flex flex-col gap-1 mt-2 pl-12 w-full">
                  <div v-for="(r, ri) in conv.replies" :key="ri" class="text-xs bg-teal-50 text-teal-700 rounded-lg px-3 py-1.5">
                    {{ r }}
                  </div>
                </div>
              </a-list-item>
            </div>
            <Transition name="toast">
              <a-alert v-if="toast" :message="toast" type="success" show-icon class="mt-3 !rounded-xl !text-xs" />
            </Transition>
          </a-card>
        </div>
      </section>

      <!-- Projects section (overview da ham ko'rinadi) -->
      <section class="relative z-10 p-6 bg-white rounded-[15px] w-full min-w-0">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-2xl font-bold text-[#2D3748]">{{ $t("profile.projectsTitle") }}</h1>
            <p class="text-[#A0AEC0] text-sm">{{ $t("profile.projectsSubtitle") }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div
            v-for="(project, idx) in projects"
            :key="project.id"
            class="relative bg-white rounded-[15px] shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            <button
              type="button"
              class="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-red-500 border border-red-100 hover:bg-red-50 transition-colors"
              @click="removeProject(project.id)"
              :title="$t('profile.deleteProject')"
            >
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16" />
              </svg>
            </button>
            <img class="h-[160px] w-full object-cover" :src="project.image" :alt="project.title" />
            <div class="p-4 flex flex-col flex-1">
              <span class="text-xs text-[#A0AEC0] mb-1">{{ $t("profile.projectNumber", { number: idx + 1 }) }}</span>
              <h5 class="text-xl font-semibold text-[#2D3748] mb-2">{{ project.title }}</h5>
              <p class="text-sm text-[#A0AEC0] mb-4 flex-1">{{ project.description }}</p>
              <div class="flex items-center justify-between mt-auto">
                <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-[#4FD1C5] border border-[#4FD1C5] rounded-[10px] px-4 py-2 hover:bg-[#4FD1C5] hover:text-white transition-colors">
                  {{ $t("profile.viewAll") }}
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
                <div class="flex -space-x-2">
                  <img
                    v-for="av in project.avatars"
                    :key="av"
                    class="w-7 h-7 rounded-full border-2 border-white object-cover"
                    :src="`https://i.pravatar.cc/30?img=${av}`"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Add new project card -->
          <div
            class="rounded-[15px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[280px] cursor-pointer hover:border-[#4FD1C5] hover:bg-teal-50 transition-colors group"
            @click="openModal"
          >
            <div class="flex flex-col items-center gap-3 text-gray-300 group-hover:text-[#4FD1C5] transition-colors">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v14M5 12h14" />
              </svg>
              <span class="text-sm font-medium">{{ $t("profile.createNewProject") }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ═══════ TEAMS TAB — bo'sh ═══════ -->
    <div v-else-if="activeProfileTab === 'teams'">
      <!-- Hech narsa ko'rinmaydi -->
    </div>

    <!-- ═══════ PROJECTS TAB — faqat projects ═══════ -->
    <div v-else-if="activeProfileTab === 'projects'">
      <section class="relative z-10 p-6 bg-white rounded-[15px] w-full min-w-0">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-2xl font-bold text-[#2D3748]">{{ $t("profile.projectsTitle") }}</h1>
            <p class="text-[#A0AEC0] text-sm">{{ $t("profile.projectsSubtitle") }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div
            v-for="(project, idx) in projects"
            :key="project.id"
            class="relative bg-white rounded-[15px] shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            <button
              type="button"
              class="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-red-500 border border-red-100 hover:bg-red-50 transition-colors"
              @click="removeProject(project.id)"
              :title="$t('profile.deleteProject')"
            >
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16" />
              </svg>
            </button>
            <img class="h-[160px] w-full object-cover" :src="project.image" :alt="project.title" />
            <div class="p-4 flex flex-col flex-1">
              <span class="text-xs text-[#A0AEC0] mb-1">{{ $t("profile.projectNumber", { number: idx + 1 }) }}</span>
              <h5 class="text-xl font-semibold text-[#2D3748] mb-2">{{ project.title }}</h5>
              <p class="text-sm text-[#A0AEC0] mb-4 flex-1">{{ project.description }}</p>
              <div class="flex items-center justify-between mt-auto">
                <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-[#4FD1C5] border border-[#4FD1C5] rounded-[10px] px-4 py-2 hover:bg-[#4FD1C5] hover:text-white transition-colors">
                  {{ $t("profile.viewAll") }}
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
                <div class="flex -space-x-2">
                  <img
                    v-for="av in project.avatars"
                    :key="av"
                    class="w-7 h-7 rounded-full border-2 border-white object-cover"
                    :src="`https://i.pravatar.cc/30?img=${av}`"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Add new project card -->
          <div
            class="rounded-[15px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[280px] cursor-pointer hover:border-[#4FD1C5] hover:bg-teal-50 transition-colors group"
            @click="openModal"
          >
            <div class="flex flex-col items-center gap-3 text-gray-300 group-hover:text-[#4FD1C5] transition-colors">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v14M5 12h14" />
              </svg>
              <span class="text-sm font-medium">{{ $t("profile.createNewProject") }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Add Project Modal -->
    <a-modal
      v-model:open="modalOpen"
      :footer="null"
      :closable="false"
      :centered="true"
      :destroyOnClose="true"
      :width="450"
      :maskStyle="{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }"
      wrapClassName="custom-project-modal"
    >
      <div class="p-1">
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-xl font-bold text-[#2D3748] !m-0">{{ $t("profile.newProject") }}</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors border-none bg-transparent cursor-pointer flex items-center">
            <close-outlined class="text-lg" />
          </button>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <label class="text-sm font-semibold text-[#2D3748] mb-1 block">
              {{ $t("profile.projectTitle") }} <span class="text-red-400">*</span>
            </label>
            <a-input v-model:value="form.title" :placeholder="$t('profile.projectTitlePlaceholder')" class="custom-input" />
          </div>
          <div>
            <label class="text-sm font-semibold text-[#2D3748] mb-1 block">{{ $t("profile.description") }}</label>
            <a-textarea v-model:value="form.description" :rows="3" :placeholder="$t('profile.descriptionPlaceholder')" class="custom-input !resize-none" />
          </div>
          <div>
            <label class="text-sm font-semibold text-[#2D3748] mb-1 block">
              {{ $t("profile.image") }} <span class="text-gray-400 font-normal">({{ $t("profile.optional") }})</span>
            </label>
            <div
              class="relative border-2 border-dashed border-gray-200 rounded-[12px] overflow-hidden cursor-pointer hover:border-[#4FD1C5] transition-all group h-[120px] flex flex-col items-center justify-center"
              @click="$refs.fileInput.click()"
            >
              <img v-if="form.imagePreview" :src="form.imagePreview" class="w-full h-full object-cover" />
              <div v-else class="text-center text-gray-400 group-hover:text-[#4FD1C5]">
                <plus-outlined class="text-xl mb-1" />
                <p class="text-[11px] m-0">{{ $t("profile.imageDropHint") }}</p>
              </div>
            </div>
            <input ref="fileInput" type="file" class="hidden" @change="onFileChange" accept="image/*" />
          </div>
        </div>
        <div class="flex gap-3 mt-8">
          <button @click="closeModal" class="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-gray-500 font-bold text-sm bg-white hover:bg-gray-50 transition-colors cursor-pointer">
            {{ $t("profile.cancel") }}
          </button>
          <button
            @click="addProject"
            :disabled="!form.title.trim()"
            class="flex-1 px-4 py-2.5 bg-[#4FD1C5] text-white rounded-xl font-bold text-sm hover:bg-[#38B2AC] disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-none cursor-pointer"
          >
            {{ $t("profile.createProject") }}
          </button>
        </div>
      </div>
    </a-modal>
  </main>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

// ── Active Tab ──
const activeProfileTab = ref(route.query.tab || "overview");

const setActiveTab = (key) => {
  activeProfileTab.value = key;
  router.replace({ query: { ...route.query, tab: key } });
};

onMounted(() => {
  if (route.query.tab) {
    activeProfileTab.value = route.query.tab;
  }
});

// ── Tabs ──
const profileTabs = [
  { key: "overview",  label: "profile.tabs.overview",  icon: "👤" },
  { key: "teams",     label: "profile.tabs.teams",     icon: "👥" },
  { key: "projects",  label: "profile.tabs.projects",  icon: "📂" },
];

// ── Profile Header ──
const profileHeader = reactive({
  name:   "Esthera Jackson",
  email:  "esthera@simmmple.com",
  avatar: "https://i.pravatar.cc/80?img=47",
});

// ── Edit Modal ──
const editProfileOpen = ref(false);
const editForm = reactive({ name: "", email: "", avatar: "" });

const openEditProfile = () => {
  editForm.name   = profileHeader.name;
  editForm.email  = profileHeader.email;
  editForm.avatar = profileHeader.avatar;
  editProfileOpen.value = true;
  document.body.style.overflow = "hidden";
};
const closeEditProfile = () => {
  editProfileOpen.value = false;
  document.body.style.overflow = "";
};
const saveEditProfile = () => {
  if (editForm.name.trim())  profileHeader.name  = editForm.name.trim();
  if (editForm.email.trim()) profileHeader.email = editForm.email.trim();
  if (editForm.avatar)       profileHeader.avatar = editForm.avatar;
  closeEditProfile();
};
const onEditAvatarChange = (e) => {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = (ev) => { editForm.avatar = ev.target.result; };
  reader.readAsDataURL(file);
};

// ── Platform Settings ──
const accountSettings = reactive([
  { key: "follow",  label: t("profile.settings.follow"),  value: true  },
  { key: "answer",  label: t("profile.settings.answer"),  value: false },
  { key: "mention", label: t("profile.settings.mention"), value: true  },
]);
const appSettings = reactive([
  { key: "launches",   label: t("profile.settings.launches"),   value: false },
  { key: "monthly",    label: t("profile.settings.monthly"),    value: false },
  { key: "newsletter", label: t("profile.settings.newsletter"), value: true  },
]);

// ── Profile Info ──
const profile = reactive({
  bio:      "Hi, I'm Alec Thompson. Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term.",
  fullName: "Alec M. Thompson",
  mobile:   "(44) 123 1234 123",
  email:    "alecthompson@mail.com",
  location: "United States",
});

const profileFields = [
  { key: "fullName", label: t("profile.fullName"), muted: false },
  { key: "mobile",   label: t("profile.mobile"),   muted: true  },
  { key: "email",    label: t("profile.email"),     muted: true  },
  { key: "location", label: t("profile.location"),  muted: false },
];

// Mobile: faqat raqam, +, (, ), -, bo'shliq
const onMobileChange = (val) => {
  const cleaned = val.replace(/[^0-9+()\-\s]/g, "");
  profile.mobile = cleaned;
};

watch(
  () => profile.mobile,
  (val) => {
    const cleaned = val.replace(/[^0-9+()\-\s]/g, "");
    if (cleaned !== val) profile.mobile = cleaned;
  }
);

// ── Conversations ──
const conversations = reactive([
  { id: 1, name: "Esthera Jackson", message: t("profile.conversationMessages.moreInfo"),          avatar: "https://i.pravatar.cc/40?img=47", open: false, reply: "", replies: [] },
  { id: 2, name: "Esthera Jackson", message: t("profile.conversationMessages.awesomeWork"),        avatar: "https://i.pravatar.cc/40?img=32", open: false, reply: "", replies: [] },
  { id: 3, name: "Esthera Jackson", message: t("profile.conversationMessages.haveGreatAfternoon"), avatar: "https://i.pravatar.cc/40?img=44", open: false, reply: "", replies: [] },
  { id: 4, name: "Esthera Jackson", message: t("profile.conversationMessages.aboutFiles"),         avatar: "https://i.pravatar.cc/40?img=12", open: false, reply: "", replies: [] },
]);

const toast = ref("");
let toastTimer = null;
const sendReply = (conv) => {
  if (!conv.reply.trim()) return;
  conv.replies.push(conv.reply.trim());
  conv.reply = "";
  conv.open  = false;
  clearTimeout(toastTimer);
  toast.value = t("profile.replySent");
  toastTimer = setTimeout(() => { toast.value = ""; }, 2500);
};

// ── Projects ──
const PROJECTS_STORAGE_KEY   = "profile-projects";
const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=200&fit=crop";

const defaultProjects = [
  { id: 1, title: "Modern",       description: "As Uber works through a huge amount of internal management turmoil.",        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop", avatars: [1, 2, 3] },
  { id: 2, title: "Scandinavian", description: "Music is something that every person has his or her own specific opinion about.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop", avatars: [4, 5, 6] },
  { id: 3, title: "Minimalist",   description: "Different people have different taste, and various types of music.",            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=200&fit=crop", avatars: [7, 8, 9] },
];

const loadProjects = () => {
  try {
    const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) return [...defaultProjects];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...defaultProjects];
    return parsed.map((p) => ({
      id:          p.id ?? Date.now(),
      title:       p.title ?? t("profile.untitledProject"),
      description: p.description ?? t("profile.newlyCreatedProject"),
      image:       p.image ?? DEFAULT_FALLBACK_IMAGE,
      avatars:     Array.isArray(p.avatars) && p.avatars.length ? p.avatars : [1, 2, 3],
    }));
  } catch {
    return [...defaultProjects];
  }
};

const projects = ref(loadProjects());

watch(projects, (items) => {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(items));
}, { deep: true });

// ── Project Modal ──
const modalOpen = ref(false);
const form      = ref({ title: "", description: "", image: "", imagePreview: "" });

const openModal  = () => { modalOpen.value = true; };
const closeModal = () => {
  modalOpen.value = false;
  form.value = { title: "", description: "", image: "", imagePreview: "" };
  document.body.style.overflow = "";
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    form.value.imagePreview = ev.target.result;
    form.value.image        = ev.target.result;
  };
  reader.readAsDataURL(file);
};

const fallbackImages = [
  DEFAULT_FALLBACK_IMAGE,
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=200&fit=crop",
];

const addProject = () => {
  if (!form.value.title.trim()) return;
  projects.value.push({
    id:          Date.now(),
    title:       form.value.title.trim(),
    description: form.value.description.trim() || t("profile.newlyCreatedProject"),
    image:       form.value.image.trim() || fallbackImages[projects.value.length % fallbackImages.length],
    avatars:     Array.from({ length: 3 }, () => Math.floor(Math.random() * 40) + 1),
  });
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects.value));
  closeModal();
};

const removeProject = (id) => {
  projects.value = projects.value.filter((p) => p.id !== id);
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects.value));
};
</script>

<style scoped>
.profile-page {
  position: relative;
  isolation: isolate;
  max-width: 100%;
}
.profile-top-bg {
  position: absolute;
  top: 80px;
  left: 75px;
  right: 0;
  width: auto;
  height: 300px;
  z-index: 0;
  background-image: url("../../assets/Background.png");
  background-size: cover;
  background-position: center;
  transition: left 0.3s ease;
}
@media (min-width: 768px) {
  .profile-top-bg {
    left: 264px;
    max-width: 80.6%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="flex bg-[rgb(248,249,250)]">
    <div class="fixed top-0 left-0 h-screen w-20 md:w-64 z-40 hidden md:block">
      <SideBar />
    </div>
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="mobileSidebarOpen"
        class="fixed inset-0 bg-black/30 z-[59] md:hidden"
        @click="mobileSidebarOpen = false"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="mobileSidebarOpen"
        class="fixed top-0 left-0 h-screen w-64 z-[60] md:hidden"
      >
        <SideBar :mobile-expanded="true" />
      </div>
    </Transition>
    <div class="flex-1">
      <PublicNavbar @toggle-sidebar="mobileSidebarOpen = !mobileSidebarOpen" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import SideBar from '@/components/common/SideBar.vue'
import PublicNavbar from '@/components/common/PublicNavbar.vue'

const route = useRoute();
const mobileSidebarOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    mobileSidebarOpen.value = false;
  },
);
</script>

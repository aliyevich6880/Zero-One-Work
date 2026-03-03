<template>
  <div class="flex bg-[rgb(248,249,250)]">
    <div class="fixed top-0 left-0 h-screen w-20 md:w-64 z-40">
      <SideBar />
    </div>
    <div class="flex-1">
      <PublicNavbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/common/SideBar.vue'
import PublicNavbar from '@/components/common/PublicNavbar.vue'
</script>
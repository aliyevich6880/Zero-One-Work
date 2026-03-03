<template>
<footer
    class="left-0 right-0 mx-auto w-[calc(80%-0px)] sm:w-[calc(80%-0px)] auth-footer flex items-center justify-between px-10 py-[18px] text-[12px] text-[#718096]"
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
</template>

<script setup>
</script>

<style scoped>

</style>
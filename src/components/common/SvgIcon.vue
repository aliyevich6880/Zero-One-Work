<template>
  <span v-html="path" class="display-inline-block"></span>
</template>

<script setup>
defineProps({
  path: String
});
</script>
<template>
  <div class="menu">
    <pageContent :content-config="contentConfig"></pageContent>
  </div>
</template>

<script setup lang="ts" name="menu">
import pageContent from '@/components/page-content/page-content.vue'
import { contentConfig } from './config/contentConfig'
</script>

<style scoped>
.menu {
}
</style>

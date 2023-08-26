<template>
  <div class="bread">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">{{
        Breadcrumb[0]
      }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ Breadcrumb[1] }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useMainStore } from '@/store/module/main'
const mainStore = useMainStore()
const { Breadcrumb } = toRefs(mainStore)
</script>

<style scoped lang="less"></style>

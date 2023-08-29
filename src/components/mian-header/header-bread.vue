<template>
  <div class="bread">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="Breadcrumb[0].url">{{
        Breadcrumb[0].name
      }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ Breadcrumb[1].name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useMainStore } from '@/store/module/main'
const mainStore = useMainStore()
const { Breadcrumb } = toRefs(mainStore)
</script>

<style scoped lang="less"></style>

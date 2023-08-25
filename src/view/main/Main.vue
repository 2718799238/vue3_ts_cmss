<template>
  <div class="main">
    <el-container>
      <el-aside class="el-aside" :width="isCollapse ? '60px' : '200px'">
        <mainMenu :isCollapse="isCollapse"></mainMenu>
      </el-aside>
      <el-container>
        <el-header height="40px">
          <mainHeader @isFold="handlerFold"></mainHeader>
        </el-header>

        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/mian-header/main-header.vue'

import { ref } from 'vue'
const isCollapse = ref(false)
function handlerFold(e: boolean) {
  isCollapse.value = e
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .el-container {
    height: 100%;

    .el-aside {
      overflow: hidden;
      overflow-y: auto;
      line-height: 32px;
      text-align: left;
      cursor: pointer;
      background-color: #0c2135;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
      transition: width 0.3s linear;
    }
    .el-main {
    }
  }
}
</style>

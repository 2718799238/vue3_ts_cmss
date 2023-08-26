<template>
  <div class="main-menu">
    <div class="logo">
      <img src="../../assets/image/logo.svg" alt="" class="img" />
      <span v-show="!isCollapse" class="title">dongzai-cmss</span>
    </div>
    <div class="menu">
      <el-menu
        background-color="#0c2135"
        active-text-color="#fff"
        text-color="#b7bdc3"
        :default-active="firstMenu"
        :collapse="isCollapse"
      >
        <!-- <el-sub-menu class="sub" index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统信息</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品统计</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">菜单管理</el-menu-item>
          <el-menu-item index="2-4">角色管理</el-menu-item>
        </el-sub-menu> -->
        <template v-for="subMenu in userMenus" :key="subMenu?.id">
          <el-sub-menu :index="subMenu?.id + ''">
            <template #title>
              <el-icon
                ><component :is="subMenu.icon.split('-icon-')[1]"></component
              ></el-icon>
              <span>{{ subMenu?.name }}</span>
            </template>
            <template v-for="menu in subMenu?.children" :key="menu?.id">
              <el-menu-item @click="toPage(menu.url)" :index="menu?.id + ''">{{
                menu?.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/module/login'

import { useRouter, useRoute } from 'vue-router'
import { firstPage, mapPathToMenu } from '../../utils/mapMenusRouter'
import { ref } from 'vue'
import { useMainStore } from '@/store/module/main'

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
const router = useRouter()
const route = useRoute()
const loginStore = useLoginStore()
const { userMenus } = loginStore
const mainStore = useMainStore()
// console.log(userMenus)
function toPage(url: string) {
  router.push(url)
  mainStore.mapPathToBread(url, userMenus)
}
// 第一次加载打开的menu
const path = route.path
const firstPath = mapPathToMenu(path, userMenus)
const firstMenu = ref<string>(firstPath.id + '')
mainStore.mapPathToBread(path, userMenus)

// 面包些数据
</script>

<style scoped lang="less">
.main-menu {
  padding-top: 10px;
  background-color: #0c2135;

  .menu {
    .el-menu {
      border-right: none;
    }
    .is-active {
      background-color: rgb(15, 71, 93);
    }
  }
}
.logo {
  height: 32px;
  padding-left: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  .img {
    width: 24px;
    height: 24px;
  }
  .title {
    height: 100%;
    font-size: 16px;
    margin-left: 12px;
    color: #fff;
  }
}
</style>

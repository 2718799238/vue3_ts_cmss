<template>
  <div class="user-info">
    <div class="left">
      <el-icon><Message /></el-icon>
      <el-icon><ChatLineRound /></el-icon>
      <el-icon><Search /></el-icon>
    </div>
    <div class="right">
      <el-dropdown size="large">
        <span class="info">
          <el-avatar
            :size="30"
            src="https://i1.hdslb.com/bfs/face/7ffc32b2b774d86d9625aca3ef9f20d918bc4e6d.jpg@150w_150h.jpg"
          />
          <span class="name">coderwhy</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handlEexit">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Lock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
const router = useRouter()
function handlEexit() {
  localCache.removeCache('cmssToken')
  router.push('/login')
}
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  justify-content: left;
  align-items: center;
  .left {
    // width: ;
    .el-icon {
      margin: 0 8px;
    }
  }
  .right {
    width: 100px;
    .info {
      margin-left: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .name {
        margin-left: 4px;
        font-size: 14px;
      }
      :global(.el-dropdown-menu__item) {
        line-height: 36px !important;
        padding: 6px 22px !important;
      }
    }
  }
}
.el-dropdown:deep(:focus-visible) {
  outline: none;
}
</style>

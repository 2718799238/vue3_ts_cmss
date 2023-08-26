<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFolf">
      <el-icon size="24px"
        ><component :is="isFold ? 'fold' : 'expand'"
      /></el-icon>
    </div>
    <div class="content">
      <headerBread></headerBread>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import userInfo from './user-info.vue'
import headerBread from './header-bread.vue'
import { ref } from 'vue'

const emit = defineEmits(['isFold'])
const isFold = ref(false)
function handleFolf() {
  isFold.value = !isFold.value
  emit('isFold', isFold.value)
}
</script>

<style scoped lang="less">
.main-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  .menu-icon {
    padding-top: 3px;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
}
</style>

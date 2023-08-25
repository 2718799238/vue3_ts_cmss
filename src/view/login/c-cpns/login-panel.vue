<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" type="border-card" :stretch="true">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <el-icon><UserFilled /></el-icon>
            <span>帐号登录</span>
          </template>
          <LoginAccount :isKeepPwd="isKeepPwd" ref="accountRef"></LoginAccount>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
          <LoginPhone ref="phoneRef"></LoginPhone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="controls">
      <el-checkbox v-model="isKeepPwd" label="记住密码" size="large" />
      <el-link href="#" type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button
      @click="handleLoginBtnClick"
      class="login-btn"
      size="large"
      type="primary"
      >立即登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { localCache } from '@/utils/cache'
import { ref } from 'vue'
const isKeepPwd = ref(localCache.getCache('account')?.isKeepPwd ? true : false)
const activeName = ref<string>('account')

const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value!.loginAction()
  } else {
    console.log('phone')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 130px;
  .title {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
  }
  .tabs {
    margin-top: 20px;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn {
    margin-top: 10px;

    width: 100%;
  }
}
</style>

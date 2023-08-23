<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/image/login-bg.svg');

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="login-phone">
    <el-form
      ref="formRef"
      label-width="80px"
      :rules="phoneRules"
      :model="formAccount"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="formAccount.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verify-code">
          <el-input v-model="formAccount.code" />
          <el-button class="f" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules, ElForm } from 'element-plus'

const formAccount = reactive<{ phone: string; code: number }>({
  phone: '',
  code: 1
})
const phoneRules: FormRules = {
  phone: [
    { required: true, message: '请填写手机号', trigger: 'blur' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^[0-9]{4}$/, message: 'www', trigger: 'blur' }
  ]
}
</script>

<style scoped lang="less">
.verify-code {
  display: flex;
  justify-content: center;
  .f {
    margin-left: 20px;
  }
}
</style>

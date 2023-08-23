<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      label-width="60px"
      :rules="accountRules"
      :model="formAccount"
    >
      <el-form-item label="帐号" prop="account">
        <el-input v-model="formAccount.account" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input show-password v-model="formAccount.pwd" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'

import { useLoginStore } from '@/store/module/login'
import { type IAccount } from './types/login_type'
import { localCache } from '@/utils/cache'
const props = defineProps({
  isKeepPwd: {
    type: Boolean,
    default: false
  }
})

const formAccount = reactive({
  account: '',
  pwd: ''
})
// 获取放在location的账号信息
const localAccount = localCache.getCache('account')
formAccount.account = localAccount?.name
formAccount.pwd = localAccount?.password

// 定义校验规则
const accountRules: FormRules = {
  account: [
    { required: true, message: '必须输入帐号', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,20}$/,
      message: '必须是6~20位',
      trigger: 'blur'
    }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: '必须是3位以上',
      trigger: 'blur'
    }
  ]
}
const formRef = ref<InstanceType<typeof ElForm>>()

// 登录逻辑
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const { account, pwd } = formAccount
      const accounts: IAccount = {
        name: account,
        password: pwd
      }
      loginStore.loginAccountAction(accounts)
      if (props.isKeepPwd) {
        localCache.setCache('account', { ...accounts, isKeepPwd: true })
      } else {
        localCache.setCache('account', {
          name: accounts.name,
          isKeepPwd: false
        })
      }
    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
}
defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>

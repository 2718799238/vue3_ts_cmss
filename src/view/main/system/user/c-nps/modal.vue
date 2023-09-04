<template>
  <div class="user-modal">
    <el-dialog v-model="isShowModal" title="新建用户" width="30%" center>
      <el-form label-width="100px" v-model="newUserForm">
        <el-form-item label="用户名">
          <el-input
            v-model="newUserForm.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input
            v-model="newUserForm.realname"
            placeholder="请输入真实姓名"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="!isEdit" label="密码">
          <el-input
            v-model="newUserForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input
            v-model="newUserForm.cellphone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select v-model="newUserForm.roleId" placeholder="请选择角色">
            <template v-for="item in roleList?.list" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select
            v-model="newUserForm.departmentId"
            placeholder="请选择部门"
          >
            <template v-for="item in department?.list" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onClickNew">取消</el-button>
          <el-button type="primary" @click="onNewUserClick"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/module/main'
import { useUserStore } from '@/store/module/main/user'
import { ref, reactive, h } from 'vue'
import { ElNotification } from 'element-plus'
const isShowModal = ref(false)

let newUserForm = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: 1,
  departmentId: 1
})
// 控制新件窗口
defineExpose({ onClickNew })
const isEdit = ref(false)
function onClickNew(form: any) {
  isShowModal.value = !isShowModal.value
  isEdit.value = form.isEdit
  if (form.isEdit && form.form) {
    for (const key in newUserForm) {
      newUserForm[key] = form.form[key]
    }
    newUserForm.id = form.form.id
  } else {
    for (const key in newUserForm) {
      newUserForm[key] = ''
    }
  }
}
// 部门列表
const mainStore = useMainStore()
const { department, roleList } = mainStore
// 新建用户确定的点击
const userStore = useUserStore()
function onNewUserClick() {
  isShowModal.value = false
  // console.log(newUserForm)
  // 编辑
  if (isEdit.value) {
    userStore.fetchEditUser(newUserForm).then((res: any) => {
      ElNotification({
        title: '提示',
        message: h('i', { style: 'color: teal' }, res),
        duration: 2000
      })
    })
  } else {
    // 新添
    userStore.fetchNewUser(newUserForm).then((res: any) => {
      ElNotification({
        title: '提示',
        message: h('i', { style: 'color: teal' }, res),
        duration: 2000
      })
    })
  }
}
</script>

<style scoped lang="less">
.el-form {
  padding-right: 20px !important;
}
</style>

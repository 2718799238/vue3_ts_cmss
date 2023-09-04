<template>
  <div class="user-modal">
    <el-dialog
      v-model="isShowModal"
      :title="isEdit ? '编辑部门' : '新建部门'"
      width="30%"
      center
    >
      <el-form label-width="100px" v-model="newPageForm">
        <el-form-item label="部门名称">
          <el-input
            v-model="newPageForm.name"
            placeholder="请输入部门名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门领导">
          <el-input
            v-model="newPageForm.leader"
            placeholder="请输入部门领导"
          ></el-input>
        </el-form-item>
        <el-form-item label="上级部门">
          <el-select
            v-model="newPageForm.parentId"
            placeholder="请选择上级部门"
            style="width: 100%"
          >
            <template v-for="item in department?.list" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShowModal = !isShowModal">取消</el-button>
          <el-button type="primary" @click="onNewPageClick"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/module/main'
import { usePageStore } from '@/store/module/main/page'
import { ref, reactive, h } from 'vue'
import { ElNotification } from 'element-plus'
const isShowModal = ref(false)

let newPageForm = reactive<any>({
  name: '',
  leader: '',
  parentId: 1
})
// 控制新件窗口
let pageName = ''
defineExpose({ onClickNew })
const isEdit = ref(false)
function onClickNew(pageNames: string, form: any) {
  pageName = pageNames
  isShowModal.value = !isShowModal.value
  isEdit.value = form.isEdit
  if (form.isEdit && form.form) {
    for (const key in newPageForm) {
      newPageForm[key] = form.form[key]
    }
    newPageForm.id = form.form.id
  } else {
    console.log('新添')

    for (const key in newPageForm) {
      newPageForm[key] = ''
    }
  }
}
// 部门列表
const mainStore = useMainStore()
const { department } = mainStore
// 新建用户确定的点击
const pageStore = usePageStore()
function onNewPageClick() {
  isShowModal.value = false
  // console.log(newPageForm)
  // 编辑
  if (isEdit.value) {
    pageStore.fetchEditPage('department', newPageForm).then((res: any) => {
      ElNotification({
        title: '提示',
        message: h('i', { style: 'color: teal' }, res),
        duration: 2000
      })
    })
  } else {
    // 新添
    console.log(newPageForm)

    pageStore.fetchNewPage('department', newPageForm).then((res: any) => {
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

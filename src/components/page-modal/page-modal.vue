<template>
  <div class="user-modal">
    <el-dialog
      v-model="isShowModal"
      :title="isEdit ? '编辑部门' : '新建部门'"
      width="30%"
      center
    >
      <el-form label-width="100px" v-model="newPageForm">
        <template v-for="item in modalConfig.formList" :key="item.prop">
          <template v-if="item.type === 'input'">
            <el-form-item :prop="item.prop" :label="item.label">
              <el-input
                v-model="newPageForm[item.prop]"
                :placeholder="item.placeholder"
              ></el-input>
            </el-form-item>
          </template>
          <template v-if="item.type === 'select'">
            <el-select
              v-model="newPageForm.parentId"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
              <template v-for="value in item.options" :key="value.id">
                <el-option :value="value.id" :label="value.name" />
              </template>
            </el-select>
          </template>
          <template v-if="item.type === 'password'">
            <el-input
              show-password
              v-model="newPageForm[item.prop]"
              :placeholder="item.placeholder"
            />
          </template>
          <template v-if="item.type === 'date-picker'">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="newPageForm[item.prop]"
            />
          </template>
          <template v-if="item.type === 'custom'">
            <slot :name="item.slotName"></slot>
          </template>
        </template>
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
interface IProps {
  modalConfig: {
    pageName: string
    newTitle: string
    editTitle: string
    formList: any[]
  }
  otherInfo: any
}
const props = defineProps<IProps>()
let newPageForm = reactive<any>({})
for (let i = 0; i < props.modalConfig.formList.length - 1; i++) {
  const key = props.modalConfig.formList[i].prop
  newPageForm[key] = ''
}
const pageName = props.modalConfig.pageName

// 控制新件窗口
defineExpose({ onClickNew })
const isEdit = ref(false)
function onClickNew(pageNames: string, form: any) {
  isShowModal.value = !isShowModal.value
  isEdit.value = form.isEdit
  if (form.isEdit && form.form) {
    // console.log('编辑')
    for (const key in newPageForm) {
      newPageForm[key] = form.form[key]
    }
    newPageForm.id = form.form.id
  } else {
    // console.log('新增')

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
  let form = {}
  if (props.otherInfo) {
    form = { ...newPageForm, ...props.otherInfo }
  }
  if (isEdit.value) {
    pageStore.fetchEditPage(pageName, form).then((res: any) => {
      ElNotification({
        title: '提示',
        message: h('i', { style: 'color: teal' }, res),
        duration: 2000
      })
    })
  } else {
    // 新添
    // console.log(newPageForm)
    pageStore.fetchNewPage(pageName, form).then((res: any) => {
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

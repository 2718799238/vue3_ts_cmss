<template>
  <div class="search" v-if="isQuery">
    <el-form ref="elFormRef" :model="searchForm" class="demo-form-inline">
      <el-row :gutter="30">
        <template v-for="(item, index) in searchConfig.formItem" :key="index">
          <el-col :span="8" :prop="item.prop" :label="item.label">
            <template v-if="item.type === 'input'">
              <el-form-item
                :prop="item.prop"
                label-width="80px"
                :label="item.label"
              >
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                />
              </el-form-item>
            </template>
            <template v-if="item.type === 'date-picker'">
              <el-form-item
                :prop="item.prop"
                label-width="80px"
                :label="item.label"
              >
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </el-form-item>
            </template>
          </el-col>
        </template>
        <el-col :offset="19">
          <el-button @click="resetForm" type="default">
            <el-icon><Refresh /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button @click="onSearch()" type="primary">
            <el-icon><Search /></el-icon>
            <span>查询</span>
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import usePermission from '@/hooks/userPermission'
interface IProps {
  searchConfig: {
    pageName: string
    formItem: any[]
  }
}
const props = defineProps<IProps>()
const pageName = props.searchConfig.pageName
// 创建表单初始数据
const searchForm = reactive<any>({})
for (let key = 0; key < props.searchConfig.formItem.length; key++) {
  const keys = props.searchConfig.formItem[key].prop
  searchForm[keys] = ''
}
// 权限const isCreate = usePermission(pageName, 'create')
const isQuery = usePermission(pageName, 'query')
// 表单重置
const elFormRef = ref()
const emit = defineEmits(['onSearch', 'resetForm'])
function resetForm() {
  // searchForm.userName = ''
  elFormRef.value?.resetFields()
  const searchForms = { ...searchForm }
  emit('resetForm', pageName, searchForms)
}

// 搜索功能
function onSearch() {
  const searchForms = { ...searchForm }
  emit('onSearch', pageName, searchForms)
}
</script>

<style scoped lang="less">
.el-col {
  padding-left: 20px !important;
  align-items: center;
}
.search {
  background-color: #fff;
  padding-top: 20px;
  padding: 20px;
}
</style>

<template>
  <div class="search">
    <el-form ref="elFormRef" :model="searchForm" class="demo-form-inline">
      <el-row :gutter="30">
        <el-col :span="8">
          <el-form-item prop="name" label-width="80px" label="部门名称">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入查询的部门名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="leader" label-width="80px" label="部门领导">
            <el-input
              v-model="searchForm.leader"
              placeholder="请输入查询的部门领导"
              clearable
            />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item prop="date" label-width="80px" label="创建时间">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="19">
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

const searchForm = reactive({
  name: '',
  parentId: '',
  createAt: '',
  leader: ''
})

// 表单重置
const elFormRef = ref()
const emit = defineEmits(['onSearch', 'resetForm'])
function resetForm() {
  // searchForm.userName = ''
  elFormRef.value?.resetFields()
  const searchForms = { ...searchForm }
  emit('resetForm', 'department', searchForms)
}

// 搜索功能
function onSearch() {
  const searchForms = { ...searchForm }
  emit('onSearch', 'department', searchForms)
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

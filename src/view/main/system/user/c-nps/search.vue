<template>
  <div class="search" v-if="isQuery">
    <el-form ref="elFormRef" :model="searchForm" class="demo-form-inline">
      <el-row :gutter="30">
        <el-col :span="8">
          <el-form-item prop="userName" label-width="80px" label="用户名">
            <el-input
              v-model="searchForm.userName"
              placeholder="请输入查询的用户名"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realName" label-width="80px" label="真实姓名">
            <el-input
              v-model="searchForm.realName"
              placeholder="请输入查询的真实姓名"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="phone" label-width="80px" label="手机号码">
            <el-input
              v-model="searchForm.phone"
              placeholder="请输入查询的手机号码"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="state" label-width="80px" label="状态">
            <el-select
              v-model="searchForm.state"
              placeholder="启用"
              style="width: 100%"
            >
              <el-option label="启用" value="1" />
              <el-option label="封禁" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="date" label-width="80px" label="创建时间">
            <el-date-picker
              v-model="searchForm.date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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
const isQuery = usePermission('users', 'query')
const searchForm = reactive({
  userName: '',
  realName: '',
  phone: '',
  state: '1',
  date: ''
})

// 表单重置
const elFormRef = ref()
const emit = defineEmits(['onSearch', 'resetForm'])
function resetForm() {
  // searchForm.userName = ''
  elFormRef.value?.resetFields()
  const searchForms = {
    name: searchForm.userName,
    realname: searchForm.realName,
    cellphone: searchForm.phone,
    enable: searchForm.state,
    createAt: searchForm.date
  }
  emit('resetForm', searchForms)
}

// 搜索功能
function onSearch() {
  const searchForms = {
    name: searchForm.userName,
    realname: searchForm.realName,
    cellphone: searchForm.phone,
    enable: searchForm.state,
    createAt: searchForm.date
  }
  emit('onSearch', searchForms)
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

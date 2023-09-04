<template>
  <div class="user-content">
    <div class="header">
      <div class="title">部门列表</div>
      <div class="add-user">
        <el-button @click="onNewPage" type="primary">新建部门</el-button>
      </div>
    </div>
    <div class="body">
      <el-table :data="pageList" border style="width: 100%; text-align: center">
        <el-table-column align="center" type="selection" width="52" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <el-table-column align="center" prop="name" label="部门名称" />
        <el-table-column align="center" prop="leader" label="部门领导" />
        <el-table-column align="center" prop="parentId" label="上级部门" />
        <el-table-column
          align="center"
          prop="createAt"
          label="创建时间"
          width="250"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateAt"
          label="更新时间"
          width="250"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" width="150" label="操作">
          <template #default="scope">
            <el-button
              @click="onEditPage(scope.row)"
              style="padding: 0"
              text
              type="primary"
            >
              <el-icon><Edit /></el-icon>
              <span>编辑</span>
            </el-button>
            <el-button
              @click="onRemoving(scope.row.id)"
              style="padding: 0"
              text
              type="danger"
            >
              <el-icon><Delete /></el-icon>
              <span>删除</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 30]"
        small
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/store/module/main/page'
import { formatUTC } from '@/utils/format'
import { toRefs, ref, h } from 'vue'
import { ElNotification } from 'element-plus'

const emit = defineEmits(['onNewPage', 'onEditPage'])
const pageStore = usePageStore()

const currentPage = ref(1)
const pageSize = ref(10)
handlePageList('department')
const { pageList, total } = toRefs(pageStore)

//查询
defineExpose({ handlePageList, handelOnclick })

function handlePageList(pageName: string, form: object = {}) {
  pageStore.fetchGetPageList(pageName, {
    offset: pageSize.value * (currentPage.value - 1),
    size: pageSize.value,
    ...form
  })
}
function handelOnclick(pageName: string, form: object = {}) {
  pageStore.fetchGetPageList(pageName, {
    offset: 0,
    size: pageSize.value,
    ...form
  })
}

function handleCurrentChange() {
  handlePageList('department', {})
}
function handleSizeChange() {
  handlePageList('department', {})
}

// 删除
function onRemoving(id: number) {
  pageStore.fetchDelPage('department', { id }).then((res) => {
    ElNotification({
      title: '提示',
      message: h('i', { style: 'color: teal' }, res),
      duration: 2000
    })
  })
}

// 新建

function onNewPage() {
  // console.log('新建')
  emit('onNewPage', 'department', { isEdit: false })
}

// 编辑
function onEditPage(form: object) {
  console.log(form)
  emit('onEditPage', 'department', { isEdit: true, form })
}
</script>

<style scoped lang="less">
.user-content {
  margin-top: 20px;
  padding: 10px 10px 0 10px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 22px;
      font-weight: 800;
    }
  }
  .body {
    margin-top: 20px;
  }
  .pagination {
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 15px 20px;
  }
}
</style>

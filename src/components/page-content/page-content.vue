<template>
  <div class="user-content">
    <div class="header">
      <div class="title">{{ contentConfig.title }}</div>
      <div class="add-user">
        <el-button @click="onNewPage" type="primary">{{
          contentConfig.newPage
        }}</el-button>
      </div>
    </div>
    <div class="body">
      <el-table :data="pageList" border style="width: 100%; text-align: center">
        <el-table-column align="center" type="selection" width="52" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <template v-for="item in contentConfig.formList" :key="item.prop">
          <template v-if="item.type === 'default'">
            <el-table-column
              align="center"
              :prop="item.prop"
              :label="item.label"
            />
          </template>
          <template v-if="item.type === 'time'">
            <el-table-column
              align="center"
              :prop="item.prop"
              :label="item.label"
              width="250"
            >
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
        </template>
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

interface IProps {
  contentConfig: {
    pageName: string
    title: string
    newPage: string
    formList: any[]
  }
}
const props = defineProps<IProps>()
const pageName = props.contentConfig.pageName
const emit = defineEmits(['onNewPage', 'onEditPage'])
const pageStore = usePageStore()

const currentPage = ref(1)
const pageSize = ref(10)
handlePageList(pageName)
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
  handlePageList(pageName, {})
}
function handleSizeChange() {
  handlePageList(pageName, {})
}

// 删除
function onRemoving(id: number) {
  pageStore.fetchDelPage(pageName, { id }).then((res) => {
    ElNotification({
      title: '提示',
      message: h('i', { style: 'color: teal' }, res),
      duration: 2000
    })
  })
}

// 新建

function onNewPage(form: object) {
  // console.log('新建')
  emit('onNewPage', pageName, { isEdit: false, form })
}

// 编辑
function onEditPage(form: object) {
  console.log(form)
  emit('onEditPage', pageName, { isEdit: true, form })
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

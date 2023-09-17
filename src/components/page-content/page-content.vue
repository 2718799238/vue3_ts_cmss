<template>
  <div class="user-content">
    <div class="header">
      <div class="title">{{ contentConfig.title }}</div>
      <div class="add-user" v-if="isCreate">
        <el-button @click="onNewPage" type="primary">{{
          contentConfig.newPage
        }}</el-button>
      </div>
    </div>
    <div class="body">
      <el-table
        :data="pageList"
        table-layout="fixed"
        border
        style="width: 100%; text-align: center"
        row-key="id"
        :fit="false"
      >
        <template v-for="item in contentConfig.formList" :key="item.prop">
          <template v-if="item.type === 'default'">
            <el-table-column
              min-width="100"
              :show-overflow-tooltip="true"
              align="center"
              :prop="item.prop"
              :label="item.label"
              :width="item.size ? item.size : ''"
            />
          </template>
          <template v-if="item.type === 'selection'">
            <el-table-column
              align="center"
              :type="item.type"
              :label="item.label"
              :width="item.size ? item.size : ''"
            />
          </template>
          <template v-if="item.type === 'index'">
            <el-table-column
              align="center"
              :type="item.type"
              :label="item.label"
              :width="item.size ? item.size : ''"
            />
          </template>
          <template v-if="item.type === 'time'">
            <el-table-column
              align="center"
              :prop="item.prop"
              :label="item.label"
              :width="item.size ? item.size : 250"
            >
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-if="item.type === 'buttom'">
            <el-table-column
              v-if="isUpdate || isDelete"
              align="center"
              :width="item.size ? item.size : '150'"
              :label="item.label"
            >
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  @click="onEditPage(scope.row)"
                  style="padding: 0"
                  text
                  type="primary"
                >
                  <el-icon><Edit /></el-icon>
                  <span>编辑</span>
                </el-button>
                <el-button
                  v-if="isDelete"
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
          </template>
          <template v-if="item.type === 'pic'">
            <el-table-column
              align="center"
              :type="item.type"
              :label="item.label"
              :width="item.size ? item.size : ''"
            >
              <template #default="scope">
                <el-image
                  style="width: 50px; height: 50px"
                  :src="scope.row[item.prop]"
                  :zoom-rate="1.2"
                  fit="cover"
                />
              </template>
            </el-table-column>
          </template>
          <template v-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>
        </template>
      </el-table>
    </div>
    <div class="pagination" v-if="!(pageName === 'menu')">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
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
import usePermission from '@/hooks/userPermission'

interface IProps {
  contentConfig: {
    pageName: string
    title: string
    newPage?: string
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
pageStore.$onAction(({ name, after }) => {
  after(() => {
    if (
      name === 'fetchDelPage' ||
      name === 'fetchNewPage' ||
      name === 'fetchEditPage'
    ) {
      currentPage.value = 1
    }
  })
})

const isCreate = usePermission(pageName, 'create')
const isDelete = usePermission(pageName, 'delete')
const isUpdate = usePermission(pageName, 'update')

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
  // console.log(form)
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

<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <div class="add-user">
        <el-button v-if="isCreate" @click="handlerNewUser" type="primary"
          >添加用户</el-button
        >
      </div>
    </div>
    <div class="body">
      <el-table :data="userList" border style="width: 100%; text-align: center">
        <el-table-column align="center" type="selection" width="52" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <el-table-column
          align="center"
          prop="name"
          label="用户名"
          width="110"
        />
        <el-table-column
          align="center"
          prop="realname"
          label="真实姓名"
          width="110"
        />
        <el-table-column
          align="center"
          prop="cellphone"
          label="手机号码"
          width="155"
        />
        <el-table-column align="center" prop="enable" label="状态" width="75">
          <template #default="scope">
            <el-button
              size="small"
              plain
              v-if="scope.row.enable == 1"
              type="primary"
              @click="handleUse(scope.row)"
              >启用</el-button
            >
            <el-button
              @click="handleUse(scope.row)"
              plain
              size="small"
              v-else
              type="danger"
              >禁用</el-button
            >
          </template>
        </el-table-column>
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
              v-if="isUpdate"
              @click="onEdit(scope.row)"
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
import { useUserStore } from '@/store/module/main/user'
import { formatUTC } from '@/utils/format'
import { toRefs, ref, h } from 'vue'
import { ElNotification } from 'element-plus'
import usePermission from '@/hooks/userPermission'

const emit = defineEmits(['handlerNewUser', 'onEdit'])
const userStore = useUserStore()
const currentPage = ref(1)
const pageSize = ref(10)
handleUserList({})
const { userList, total } = toRefs(userStore)

userStore.$onAction(({ name, after }) => {
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

const isCreate = usePermission('users', 'create')
const isDelete = usePermission('users', 'delete')
const isUpdate = usePermission('users', 'update')
//查询
defineExpose({ handleUserList })
function handleUserList(form: object) {
  userStore.fetchGetUserList({
    offset: pageSize.value * (currentPage.value - 1),
    size: pageSize.value,
    ...form
  })
}

function handleCurrentChange() {
  handleUserList({})
}
function handleSizeChange() {
  handleUserList({})
}

// 删除
function onRemoving(id: number) {
  userStore.fetchDelUser(id).then((res: string) => {
    ElNotification({
      title: '提示',
      message: h('i', { style: 'color: teal' }, res),
      duration: 2000
    })
  })
}

// 新建

function handlerNewUser() {
  // console.log('新建')
  emit('handlerNewUser', { isEdit: false })
}

// 编辑
function onEdit(form: object) {
  console.log(form)
  emit('onEdit', { isEdit: true, form })
}

//启用与禁用
function handleUse(form: any) {
  const f = form
  delete f.createAt
  delete f.updateAt

  if (f.enable === 1) {
    f.enable = 0
  } else {
    f.enable = 1
  }

  userStore.fetchEditUser(f)
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
    float: right;
    margin-top: 20px;
  }
}
</style>

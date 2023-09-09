<template>
  <div class="role">
    <pageSearch
      :searchConfig="roleSearch"
      @onSearch="onSearch"
      @resetForm="onReset"
    ></pageSearch>
    <pageContent
      ref="contentRef"
      :contentConfig="contentConfig"
      @on-edit-page="onEdit"
      @on-new-page="onNew"
    >
    </pageContent>
    <pageModal
      ref="modalRef"
      :other-info="otherInfo"
      :modalConfig="modalConfig"
    >
      <template #menulist>
        <el-tree
          ref="treeRef"
          class="tree"
          :props="{ children: 'children', label: 'name' }"
          :data="subMenu"
          show-checkbox
          @check="handleTreeCheck"
          node-key="id"
        />
      </template>
    </pageModal>
  </div>
</template>

<script setup lang="ts" name="role">
import { roleSearch } from './config/searchConfig'
import pageSearch from '@/components/page-search/page-search.vue'

import pageContent from '@/components/page-content/page-content.vue'
import { contentConfig } from './config/contentConfig'

import pageModal from '@/components/page-modal/page-modal.vue'
import { modalConfig } from './config/modalConfig'

import type { ElTree } from 'element-plus'
import { useMainStore } from '@/store/module/main'

import { usePageContent } from '@/hooks/page-content'
import { usePageModal } from '@/hooks/page-modal'

import { storeToRefs } from 'pinia'
import { mapMenusIds } from '@/utils/mapMenusRouter'
import { nextTick, ref } from 'vue'
const { contentRef, onReset, onSearch } = usePageContent()
const { modalRef, onEdit, onNew } = usePageModal(editCallBack, editCallBack2)
// 菜单权限
// interface ITree {
//   id: number
//   label: string
//   isLeaf: boolean
//   children?: ITree[]
// }
const mainStore = useMainStore()
const { subMenu } = storeToRefs(mainStore)
const otherInfo: any = { menuList: [] }
function handleTreeCheck(e1: any, e2: any) {
  otherInfo.menuList = [...e2.halfCheckedKeys, ...e2.checkedKeys]
}
const treeRef = ref<InstanceType<typeof ElTree>>()
// 获取角色菜单树选项
function editCallBack(itemDate: any) {
  nextTick(() => {
    const menuIds = mapMenusIds(itemDate.form.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
// 新建角色菜单树清零
function editCallBack2(itemDate: any) {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
</script>

<style scoped>
.tree {
  margin-left: 100px;
}
</style>

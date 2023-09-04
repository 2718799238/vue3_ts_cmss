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
    ></pageContent>
    <pageModal ref="modalRef" :modalConfig="modalConfig">
      <template #menulist>
        <el-tree :data="tree" show-checkbox node-key="id" />
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
import { ref, toRefs } from 'vue'

import type { ElTree } from 'element-plus'
import { usePageStore } from '@/store/module/main/page'
import { localCache } from '@/utils/cache'
const contentRef = ref<InstanceType<typeof pageContent>>()

function onSearch(pageName: string, queryInfo: any) {
  contentRef.value?.handlePageList(pageName, queryInfo)
}

function onReset(pageName: string, queryInfo: any) {
  let forms: any = {}
  if (queryInfo.parentId === '') {
    const { parentId, ...form } = queryInfo
    forms = form
  }
  contentRef.value?.handelOnclick(pageName, forms)
}

const modalRef = ref<InstanceType<typeof pageModal>>()

function onEdit(pageName: string, form: any) {
  modalRef.value?.onClickNew(pageName, form)
}
function onNew(pageName: string, form: any) {
  modalRef.value?.onClickNew(pageName, form)
}

// 菜单权限
interface ITree {
  id: number
  label: string
  isLeaf: boolean
  children?: ITree[]
}
const pageStore = usePageStore()
pageStore.fetchSubMenus()
const { subMenus } = toRefs(pageStore)
const userMenus = localCache.getCache('userMenus')
const tree: any[] = []
if (subMenus.value) {
  for (const menus of subMenus.value) {
    const id = menus.id
    const label = menus.name
    const isLeaf = false
    const header: ITree = {
      id,
      label,
      isLeaf,
      children: []
    }
    for (const menuChildren of menus.children) {
      const id = menuChildren.id
      const label = menuChildren.name
      const isLeaf = false
      const children: ITree = {
        id,
        label,
        isLeaf,
        children: []
      }
      header.children!.push(children)
    }
    tree.push(header)
    console.log(tree)
  }
}
</script>

<style scoped>
.role {
}
</style>

<template>
  <div class="department">
    <pageSearch @on-search="onSearch" @reset-form="onReset"></pageSearch>
    <pageContent
      ref="contentRef"
      @on-edit-page="onEdit"
      @on-new-page="onNew"
    ></pageContent>
    <pageModal ref="modalRef"></pageModal>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from './page-cnps/page-search.vue'
import pageContent from './page-cnps/page-content.vue'
import pageModal from './page-cnps/page-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof pageContent>>()

function onSearch(pageName: string, queryInfo: any) {
  let forms: any = {}
  if (queryInfo.parentId === '') {
    const { parentId, ...form } = queryInfo
    forms = form
  }
  contentRef.value?.handlePageList(pageName, forms)
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
</script>

<style scoped>
.department {
}
</style>

<template>
  <div class="user">
    <search @on-search="onSearch" @reset-form="onReset"></search>
    <content
      @on-edit="onEdit"
      @handler-new-user="onNewUser"
      ref="contentRef"
    ></content>
    <modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import search from './c-nps/search.vue'
import content from './c-nps/content.vue'
import modal from './c-nps/modal.vue'
import { ref } from 'vue'

// 搜索
const contentRef = ref<InstanceType<typeof content>>()
function onSearch(form: any) {
  contentRef.value!.handleUserList(form)
}
function onReset(form: any) {
  contentRef.value!.handleUserList(form)
}

// 新建
const modalRef = ref<InstanceType<typeof modal>>()
function onNewUser(form: any) {
  modalRef.value?.onClickNew(form)
}

// 编辑
function onEdit(form: any) {
  modalRef.value?.onClickNew(form)
}
</script>

<style scoped>
.user {
  overflow: hidden;
  border-radius: 12px;
}
</style>

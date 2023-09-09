<template>
  <div class="goods">
    <pageSearch
      :search-config="searchConfig"
      @onSearch="onSearch"
      @resetForm="onReset"
    ></pageSearch>
    <pageContent
      ref="contentRef"
      :content-config="contentConfig"
      @on-edit-page="onEdit"
      @on-new-page="onNew"
    ></pageContent>
    <pageModal ref="modalRef" :modal-config="modalConfig"></pageModal>
  </div>
</template>

<script setup lang="ts" name="goods">
import pageContent from '@/components/page-content/page-content.vue'
import { contentConfig } from './config/content'

import pageModal from '@/components/page-modal/page-modal.vue'
import { searchConfig } from './config/search'

import pageSearch from '@/components/page-search/page-search.vue'
import { modalConfig } from './config/modal'
import { usePageContent } from '@/hooks/page-content'
import { usePageModal } from '@/hooks/page-modal'

const { contentRef, onReset, onSearch } = usePageContent()
const { modalRef, onEdit, onNew } = usePageModal()
</script>

<style scoped>
.goods {
}
</style>

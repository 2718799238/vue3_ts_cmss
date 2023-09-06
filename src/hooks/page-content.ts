import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'

export function usePageContent() {
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
  return { contentRef, onReset, onSearch }
}

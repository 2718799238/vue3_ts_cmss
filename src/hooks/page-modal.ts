import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'

type EditFnType = (data: any) => void
export function usePageModal(editCallback?: EditFnType) {
  const modalRef = ref<InstanceType<typeof pageModal>>()

  function onEdit(pageName: string, form: any) {
    modalRef.value?.onClickNew(pageName, form)
    if (editCallback) editCallback(form)
  }
  function onNew(pageName: string, form: any) {
    modalRef.value?.onClickNew(pageName, form)
  }
  return { modalRef, onEdit, onNew }
}

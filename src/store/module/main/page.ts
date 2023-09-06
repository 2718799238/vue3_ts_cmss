import {
  delPage,
  editPage,
  getPageList,
  newPage
} from '@/server/module/main/page'
import { defineStore } from 'pinia'

interface IPage {
  pageList: any[]
  total: number
  subMenus: any[]
}
export const usePageStore = defineStore('page', {
  state: (): IPage => ({
    pageList: [],
    total: 10,
    subMenus: []
  }),
  actions: {
    async fetchGetPageList(pageName: string, queryInfo: any) {
      const res = await getPageList(pageName, queryInfo)
      this.pageList = res.data.data.list
      this.total = res.data.data.totalCount
    },
    async fetchNewPage(pageName: string, queryInfo: any) {
      const res = await newPage(pageName, queryInfo)
      this.fetchGetPageList(pageName, {})
      return res.data?.data
    },
    async fetchDelPage(pageName: string, queryInfo: any) {
      const res = await delPage(pageName, queryInfo)
      this.fetchGetPageList(pageName, {})
      return res.data?.data
    },
    async fetchEditPage(pageName: string, queryInfo: any) {
      const res = await editPage(pageName, queryInfo)
      this.fetchGetPageList(pageName, {})
      return res.data?.data
    }
  }
})

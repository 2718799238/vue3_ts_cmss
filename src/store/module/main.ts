import { getDepartList, getRoleList } from '@/server/module/main/main'
import { defineStore } from 'pinia'

interface IMain {
  Breadcrumb: any[]
  department: {
    list: any[]
    totalCount: number
  }
  roleList: {
    list: any[]
    totalCount: number
  }
}
const useMainStore = defineStore('mainStore', {
  state: (): IMain => {
    return {
      Breadcrumb: [],
      department: { list: [], totalCount: 6 },
      roleList: { list: [], totalCount: 6 }
    }
  },
  actions: {
    // 处理面包屑函数
    mapPathToBread(path: string, userMenus: any[]) {
      for (const subMenu of userMenus) {
        for (const menu of subMenu.children) {
          if (menu.url === path) {
            if (subMenu.name && menu.name) {
              this.Breadcrumb = [
                { name: subMenu.name, url: subMenu.url },
                { name: menu.name, url: menu.url }
              ]
            }
          }
        }
      }
    },
    async fetchgetDorR() {
      const departments = await getDepartList()
      this.department.list = departments.data?.data?.list
      this.department.totalCount = departments.data?.data?.totalCount
      const roles = await getRoleList()
      this.roleList.list = roles.data?.data?.list
      this.roleList.totalCount = roles.data.data.totalCount
    }
  }
})

export { useMainStore }

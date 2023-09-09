import {
  getDepartList,
  getRoleList,
  getSubMenus
} from '@/server/module/main/main'
import { useLoginStore } from './login'
import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { getUserMenuByRoleId } from '@/server/module/login'
const loginStore = useLoginStore()
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
  subMenu: any[]
}
export const useMainStore = defineStore('mainStore', {
  state: (): IMain => {
    return {
      Breadcrumb: [],
      department: { list: [], totalCount: 6 },
      roleList: { list: [], totalCount: 6 },
      subMenu: []
    }
  },
  actions: {
    // 处理面包屑函数
    async mapPathToBread(path: string, userMenus: any[]) {
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
      this.roleList.list = roles.data.data?.list
      this.roleList.totalCount = roles.data.data?.totalCount

      const subMenu = await getSubMenus()
      this.subMenu = subMenu.data.data.list

      // 方便每次刷新重新获取一下用户信息
      const roleId = localCache.getCache('userInfo')?.role.id
      const userMenus = await getUserMenuByRoleId(roleId)
      localCache.setCache('userMenus', userMenus.data.data)
    }
  }
})

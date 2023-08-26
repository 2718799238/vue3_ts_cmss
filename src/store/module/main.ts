import { defineStore } from 'pinia'

interface IMain {
  Breadcrumb: any[]
}
const useMainStore = defineStore('mainStore', {
  state: (): IMain => {
    return {
      Breadcrumb: []
    }
  },
  actions: {
    // 处理面包屑函数
    mapPathToBread(path: string, userMenus: any[]) {
      for (const subMenu of userMenus) {
        for (const menu of subMenu.children) {
          if (menu.url === path) {
            if (subMenu.name && menu.name) {
              this.Breadcrumb = [subMenu.name, menu.name]
            }
          }
        }
      }
    }
  }
})

export { useMainStore }

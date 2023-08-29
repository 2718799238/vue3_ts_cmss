import router from '@/router'
import { type RouteRecordRaw } from 'vue-router'

// 第一次打开main的路由路径
export let firstPage: any | null = null
const mapRouter: RouteRecordRaw[] = []
export function mapMenusRouter(userMenus: any[]) {
  // 动态添加路由

  // 將动态路由添加到localRouter
  const localRouter: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../view/main/**/*.ts', {
    eager: true
  })
  // console.log(files)
  for (const f in files) {
    const module = files[f]
    localRouter.push(module.default)
  }
  for (const submenu of userMenus) {
    // 第一层路由
    if (!localRouter.find((item) => item.path === submenu.url)) {
      router.addRoute('main', {
        path: submenu.url,
        redirect: submenu.children[0].url
      })
    }

    for (const menu of submenu.children) {
      const route = localRouter.find((item) => item.path === menu.url)
      // 第二层路由
      if (route) {
        mapRouter.push(route)
        if (!firstPage) {
          firstPage = menu
        }
      }
    }
  }
  return mapRouter
}
/**
 *
 * @param path 需要匹配的路由
 * @param userMenus 所有的路由菜单
 * @returns 第一次加载的路由
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const subMenu of userMenus) {
    for (const menu of subMenu.children) {
      if (menu.url === path) return menu
    }
  }
}

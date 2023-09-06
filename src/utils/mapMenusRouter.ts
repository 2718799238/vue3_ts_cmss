import router from '@/router'

import { type RouteRecordRaw } from 'vue-router'

// 第一次打开main的路由路径
export let firstPage: any | null = null
const mapRouter: RouteRecordRaw[] = []
const localRouter: RouteRecordRaw[] = []
const files: Record<string, any> = import.meta.glob('../view/main/**/*.ts', {
  eager: true
})

// console.log(files)
for (const f in files) {
  const module = files[f]
  localRouter.push(module.default)
}
export function mapMenusRouter(userMenus: any[]) {
  // 动态添加路由

  // 將动态路由添加到localRouter

  for (let i = 0; i <= userMenus.length - 1; i++) {
    // 第一层路由
    if (!localRouter.find((item) => item?.path === userMenus[i].url)) {
      router.addRoute('main', {
        path: userMenus[i].url,
        redirect: userMenus[i].children[0].url
      })
    }

    for (const menu of userMenus[i].children) {
      const route = localRouter.find((item) => item?.path === menu.url)
      // 第二层路由
      if (route) {
        mapRouter.push(route)
        if (!firstPage) {
          firstPage = menu
        }
      }
    }
  }
  console.log(mapRouter)
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
      if (menu.url === path) {
        return menu
      }
    }
  }
}

export function mapMenusIds(userMenus: any) {
  const ids: number[] = []
  // 回调函数
  function recursion(userMenus: any) {
    for (const item of userMenus) {
      if (item.children) {
        recursion(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recursion(userMenus)
  return ids
}

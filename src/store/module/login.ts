import { defineStore } from 'pinia'
import {
  accountLogin,
  getUserInfo,
  getUserMenuByRoleId
} from '@/server/module/login'
import { type IAccount } from '@/view/login/c-cpns/types/login_type'
import { localCache } from '@/utils/cache'
import { mapMenusRouter, mapPermission } from '../../utils/mapMenusRouter'
import router from '@/router'

interface IState {
  token: string
  userInfo: any
  userMenus: any
  userPermission: string[]
}
export const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    userPermission: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 获取token
      const res = await accountLogin(account)
      const id = res.data.data.id
      this.token = res.data.data.token
      localCache.setCache('cmssToken', res.data.data.token)
      // 获取用户详细信息
      const userInfo = await getUserInfo(id)
      this.userInfo = userInfo.data.data

      // 获取用户菜单树
      const userMenusRes = await getUserMenuByRoleId(
        userInfo.data?.data.role?.id
      )
      // console.log(userMenusRes.data.data)
      this.userMenus = userMenusRes.data.data

      // 获取用户权限信息
      const userPermission = mapPermission(this.userMenus)
      localCache.setCache('permisson', userPermission)

      // 把信息本地保存

      localCache.setCache('userInfo', this.userInfo)
      localCache.setCache('userMenus', this.userMenus)

      // 映射动态路由，并添加
      const mapRouter = mapMenusRouter(this.userMenus)
      mapRouter.forEach((item) => {
        router.addRoute('main', item)
      })
    },
    async localRouterAction() {
      const token: string = localCache.getCache('cmssToken')
      const userInfo: any = localCache.getCache('userInfo')
      const userMenus: any = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        // 映射动态路由，并添加
        const mapRouter = mapMenusRouter(this.userMenus)
        mapRouter.forEach((item) => {
          router.addRoute('main', item)
        })
      }
    }
  }
})

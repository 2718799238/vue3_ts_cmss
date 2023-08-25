import { defineStore } from 'pinia'
import {
  accountLogin,
  getUserInfo,
  getUserMenuByRoleId
} from '@/server/module/login'
import { type IAccount } from '@/view/login/c-cpns/types/login_type'
import { localCache } from '@/utils/cache'

interface IState {
  token: string
  userInfo: any
  userMenus: any
}
export const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: localCache.getCache('cmssToken') ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
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
      const userMenusRes = await getUserMenuByRoleId(id)
      // console.log(userMenusRes.data.data)
      this.userMenus = userMenusRes.data.data

      // 把信息本地保存

      localCache.setCache('userInfo', this.userInfo)
      localCache.setCache('userMenus', this.userMenus)
    }
  }
})

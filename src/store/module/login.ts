import { defineStore } from 'pinia'
import { accountLogin, getUserInfo } from '@/server/module/login'
import { type IAccount } from '@/view/login/c-cpns/types/login_type'
import { localCache } from '@/utils/cache'
export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache('cmssToken') ?? '',
    userInfo: {}
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLogin(account)
      const id = res.data.data.id
      this.token = res.data.data.token
      localCache.setCache('cmssToken', res.data.data.token)

      // 获取用户详细信息
      const userInfo = await getUserInfo(id)
      this.userInfo = userInfo.data.data
    }
  }
})

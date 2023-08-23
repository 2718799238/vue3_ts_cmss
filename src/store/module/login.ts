import { defineStore } from 'pinia'
import { accountLogin } from '@/server/module/login'
import { type IAccount } from '@/view/login/c-cpns/types/login_type'
import { localCache } from '@/utils/cache'
export const useLoginStore = defineStore('login', {
  state: () => ({
    id: 1,
    token: localCache.getCache('cmssToken') ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLogin(account)
      this.id = res.data.data.id
      this.token = res.data.data.token
      this.name = res.data.data.name
      localCache.setCache('cmssToken', res.data.data.token)
    }
  }
})

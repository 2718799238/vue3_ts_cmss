import {
  getUserList,
  delUser,
  newUser,
  editUser
} from '@/server/module/main/user'

import { defineStore } from 'pinia'

interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
type TUser = any
export const useUserStore = defineStore('user', {
  state: (): TUser => ({
    userList: [],
    total: 10
  }),
  actions: {
    async fetchGetUserList(data: any) {
      const res = await getUserList(data)
      // console.log(res.data.data)
      ;(this.userList = [...res.data.data.list]),
        (this.total = res.data.data.totalCount)
    },
    async fetchDelUser(id: number): Promise<string> {
      const res = await delUser(id)
      this.fetchGetUserList()
      return res.data.data
    },
    async fetchNewUser(form: object) {
      const res = await newUser(form)
      // 添加完毕后，重新加载一下列表
      // console.log(res.data)

      this.fetchGetUserList()
      return res.data.data
    },
    async fetchEditUser(form: any) {
      const res = await editUser(form)

      this.fetchGetUserList()
      return res.data.data
    }
  }
})

import { dongRequest } from '@/server'

export function getUserList(data: any) {
  return dongRequest.post({
    url: '/users/list',
    data
  })
}

// 删除
export function delUser(id: number) {
  return dongRequest.delete({
    url: `/users/${id}`
  })
}

// 添加
export function newUser(form: object) {
  return dongRequest.post({
    url: '/users',
    data: form
  })
}

// 编辑

export function editUser(form: any) {
  return dongRequest.patch({
    url: `/users/${form.id}`,
    data: form
  })
}

import { dongRequest } from '..'

export const accountLogin = function (account: any) {
  return dongRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfo(id: number) {
  return dongRequest.get({
    url: `/users/${id}`
  })
}

export function getUserMenuByRoleId(id: number) {
  return dongRequest.get({
    url: `/role/${id}/menu`
  })
}

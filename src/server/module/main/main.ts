import { dongRequest } from '@/server'

export function getDepartList() {
  return dongRequest.post({
    url: '/department/list'
  })
}

export function getRoleList() {
  return dongRequest.post({
    url: '/role/list'
  })
}

export function getSubMenus() {
  return dongRequest.post({
    url: '/menu/list'
  })
}

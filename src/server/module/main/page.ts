import { dongRequest } from '@/server'

export function getPageList(pageName: string, queryInfo: any) {
  return dongRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function newPage(pageName: string, queryInfo: any) {
  return dongRequest.post({
    url: `/${pageName}`,
    data: queryInfo
  })
}

export function delPage(pageName: string, queryInfo: any) {
  return dongRequest.delete({
    url: `/${pageName}/${queryInfo.id}`,
    data: queryInfo
  })
}

export function editPage(pageName: string, queryInfo: any) {
  return dongRequest.patch({
    url: `/${pageName}/${queryInfo.id}`,
    data: queryInfo
  })
}

export function subMenu() {
  return dongRequest.post({
    url: '/menu/list'
  })
}

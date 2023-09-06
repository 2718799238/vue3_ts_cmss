import { dongRequest } from '@/server'

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
  const { id, ...info } = queryInfo
  return dongRequest.patch({
    url: `/${pageName}/${id}`,
    data: info
  })
}
export function getPageList(pageName: string, queryInfo: any) {
  return dongRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

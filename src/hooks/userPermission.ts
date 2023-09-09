import { localCache } from '@/utils/cache'
function userPermission(pageName: string, handleName: string) {
  const queryPermission = `${pageName}:${handleName}`
  const permisson = localCache.getCache('permisson')

  return !!permisson.find((item: string) => {
    // console.log(item + '----' + queryPermission)
    // console.log(item.includes(queryPermission))
    return item.includes(queryPermission)
  })
}

export default userPermission

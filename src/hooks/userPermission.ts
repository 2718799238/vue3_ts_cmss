import { useLoginStore } from '@/store/module/login'
import { localCache } from '@/utils/cache'
function userPermission(pageName: string, handleName: string) {
  const queryPermission = `${pageName}:${handleName}`
  const permisson = localCache.getCache('permisson')
  // console.log(permisson)

  // console.log(
  //   !!permisson.find((item: string) => {
  //     return item.includes(queryPermission)
  //   })
  // )

  return !!permisson.find((item: string) => {
    // console.log(item + '----' + queryPermission)
    // console.log(item.includes(queryPermission))
    return item.includes(queryPermission)
  })
}

export default userPermission

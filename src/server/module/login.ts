import { dongRequest } from '..'

export const accountLogin = function (account: any) {
  return dongRequest.post({
    url: '/login',
    data: account
  })
}

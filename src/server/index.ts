import DongRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { localCache } from '@/utils/cache'

const dongRequest = new DongRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    onRequestSuccess(config) {
      const token = localCache.getCache('cmssToken')
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + token
      }

      return config
    }
  }
})

export { dongRequest }

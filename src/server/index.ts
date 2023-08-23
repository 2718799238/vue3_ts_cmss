import DongRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const dongRequest = new DongRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    onRequestSuccess(config) {
      // console.log(config)

      return config
    }
  }
})

export { dongRequest }

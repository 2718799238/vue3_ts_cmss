import { createPinia } from 'pinia'
import type { App } from 'vue'
import { useLoginStore } from './module/login'
const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.localRouterAction()
}
export default registerStore

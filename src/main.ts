import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'
import router from '@/router'

import registerIcons from './assets/global/register-icon'
import registerStore from './store'
// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(registerIcons)
app.use(registerStore)

app.use(router)
app.mount('#app')

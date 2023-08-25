import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/view/login/Login.vue')
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('@/view/main/Main.vue'),
      children: [
        {
          path: '/main/analysis/overview',
          component: () => import('@/view/main/analysis/cor-technology.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () =>
            import('@/view/main/analysis/merchandise-statistics.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../view/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to, from) => {
  // 登陆的守卫
  const token = localCache.getCache('cmssToken')
  if (to.path !== '/login' && !token) {
    return '/login'
  }
})
export default router

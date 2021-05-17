import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
      },
      {
        path: 'template',
        name: 'Template',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/template/index.vue'),
        children: [
          {
            path: 'leven1',
            name: 'Leven1',
            component: () =>
              import(/* webpackChunkName: "dashboard" */ '@/views/template/leven1.vue')
          },
          {
            path: 'leven1/leven2',
            name: 'Leven2',
            meta: {
              activeMenu: '/template/leven1'
            },
            component: () =>
              import(/* webpackChunkName: "dashboard" */ '@/views/template/leven2.vue')
          },
          {
            path: 'leven1/leven3',
            name: 'Leven3',
            meta: {
              activeMenu: '/template/leven1'
            },
            component: () =>
              import(/* webpackChunkName: "dashboard" */ '@/views/template/leven3.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  console.log(to)
  return true
})

export default router

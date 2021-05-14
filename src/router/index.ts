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
        path: 'home',
        name: 'Home',
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
              //list/son是list页面下触发的下级页面，需要填activeMenu，也就是list的页面的实际path，用来激活菜单的选中状态
              activeMenu: '/home/leven1'
            },
            component: () =>
              import(/* webpackChunkName: "dashboard" */ '@/views/template/leven2.vue')
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
  console.log(`to:${to.path} -> from:${from.meta}`)
  return true
})

export default router

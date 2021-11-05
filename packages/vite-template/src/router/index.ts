import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router';
import DefaultLayout from '@/layout/DefaultLayout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard/workplace',
  },
  {
    name: 'menu.dashboard',
    path: '/dashboard',
    component: DefaultLayout,
    meta: {
      icon: 'IconDashboard',
    },
    children: [
      {
        name: 'menu.dashboard.workplace',
        path: 'workplace',
        component: () => import('@/pages/workplace/index.vue'),
      },
      {
        path: 'monitor',
        name: 'menu.dashboard.monitor',
        component: () => import('@/pages/monitor/index.vue'),
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;

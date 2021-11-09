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
      icon: 'dashboard',
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
  {
    name: 'menu.list',
    path: '/list',
    component: DefaultLayout,
    meta: {
      icon: 'list',
    },
    children: [
      {
        name: 'menu.list.search-table',
        path: 'search-table',
        component: () => import('@/pages/search-table/index.vue'),
      },
      {
        name: 'menu.list.card',
        path: 'card',
        component: () => import('@/pages/card/index.vue'),
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

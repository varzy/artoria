import { RouteRecordRaw } from 'vue-router';
import HomeLayout from '@/views/layouts/HomeLayout.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/index/IndexView.vue'),
        meta: { title: 'Dashboard' },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginView.vue'),
    meta: { title: 'Login' },
  },
];

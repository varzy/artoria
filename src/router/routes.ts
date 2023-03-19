import { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/layouts/HomeView.vue';
import LoginView from '../views/login/LoginView.vue';
import NotFoundView from '../views/errors/NotFoundView.vue';

export const navigationRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Index',
    alias: ['dashboard'],
    component: () => import('@/views/IndexView.vue'),
    meta: { title: 'Dashboard' },
  },
];

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children: [...navigationRoutes],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound' },
  },
];

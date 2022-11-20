import HomeView from '../views/layouts/HomeView.vue';

export const navigationRoutes = [
  {
    path: '',
    name: 'Index',
    component: () => import('@/views/IndexView.vue'),
  },
];

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children: [...navigationRoutes],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
  },
];

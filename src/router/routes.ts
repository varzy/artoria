import IndexView from '../views/IndexView.vue';

export const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
  },
];

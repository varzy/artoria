import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { Permission } from '@/utils/Permission';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!Permission.isLogin() && to.name !== 'Login') {
    next({ name: 'Login' });
    return;
  }

  if (Permission.isLogin() && to.name === 'Login') {
    next({ name: 'Index' });
    return;
  }

  next();
});

export default router;

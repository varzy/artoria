import { Permission } from '@/utils/Permission';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!Permission.isLogin()) {
    if (from.name !== 'Login' && to.name === 'Login') {
      next();
      return;
    }
  }

  next();
});

export default router;

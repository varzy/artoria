import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { Permission } from '@/utils/Permission';
import { useUserStore } from '@/store/root';

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

  const userStore = useUserStore();
  const userInfo = Permission.getUserInfo();
  userInfo && userStore.saveUserInfo(userInfo);

  next();
});

export default router;

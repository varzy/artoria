import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
    },
  ],
});

export default router;

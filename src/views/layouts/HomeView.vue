<script lang="ts" setup>
import { navigationRoutes } from '@/router/routes';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const calcMenuActive = computed(() => (route.name as string) || 'Index');

const handleMenuOpened = (key: string) => {
  router.push({ name: key });
};
</script>

<template>
  <ElContainer class="home">
    <ElAside class="home-aside">
      <ElMenu
        class="menu"
        :default-active="calcMenuActive"
        active-text-color="#EFF5F5"
        background-color="#393E46"
        @open="handleMenuOpened"
      >
        <ElMenuItem v-for="route in navigationRoutes" :key="route.name" :index="route.name">
          {{ route?.meta?.title || 'Unknown' }}
        </ElMenuItem>
      </ElMenu>
    </ElAside>
    <ElContainer class="home-body">
      <ElHeader class="home-body-header">ARTORIA</ElHeader>
      <ElMain class="home-body-main">
        <RouterView />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  &-aside {
    width: 176px;
    .menu {
      height: 100%;
    }
  }
  &-body {
    &-header {
      z-index: 1001;
      box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
      height: 48px;
      display: flex;
      align-items: center;
    }
    &-main {
      padding: 16px;
      background-color: #eff5f5;
    }
  }
}
</style>

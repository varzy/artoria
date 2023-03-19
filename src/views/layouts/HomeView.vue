<script lang="ts" setup>
import { navigationRoutes } from '@/router/routes';
import { useUserStore } from '@/store/root';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Permission } from '@/utils/Permission';
import { SwitchButton } from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const calcMenuActive = computed(() => (route.name as string) || 'Index');

const handleAvatarMenuTriggered = (command: string) => {
  if (command === 'logout') {
    Permission.logout();
    router.push({ name: 'Login' });
  }
};

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
      <ElHeader class="home-body-header">
        <div class="left">ARTORIA</div>
        <div class="right">
          <ElDropdown @command="handleAvatarMenuTriggered">
            <div class="avatar">
              <ElAvatar
                :size="32"
                shape="square"
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              />
              <span style="margin-left: 8px">{{ userStore.userInfo.username }}</span>
            </div>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem command="logout" :icon="SwitchButton">退出登录</ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
        </div>
      </ElHeader>
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
      justify-content: space-between;
      .right {
        display: flex;
        align-items: center;
        .avatar {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    &-main {
      padding: 16px;
      background-color: #eff5f5;
    }
  }
}
</style>

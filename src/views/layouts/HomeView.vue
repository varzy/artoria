<script lang="ts" setup></script>

<template>
  <ElContainer class="home">
    <ElAside class="home-aside">Aside</ElAside>
    <ElContainer class="home-body">
      <ElHeader class="home-body-header">Header</ElHeader>
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
  }
  &-body {
    &-hedaer {
    }
    &-main {
      padding: 16px;
    }
  }
}
</style>

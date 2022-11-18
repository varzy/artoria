<script setup lang="ts">
import { reactive, ref } from 'vue';
import { LoginReq } from '@/types/altria';

const form = reactive<LoginReq>({
  username: '',
  password: '',
});
</script>

<template>
  <div class="login">
    <div class="form-wrapper"></div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  .form-wrapper {
    width: 600px;
  }
}
</style>

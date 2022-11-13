<script setup lang="ts">
import { Permission } from '@/utils/Permission';
import { reactive, toRaw } from 'vue';
import { message as AMessage } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive<LoginReq>({
  username: '',
  password: '',
});

const onLogin = async () => {
  try {
    await Permission.login(toRaw(form));
    AMessage.success('登录成功');
    router.push({ name: 'Index' });
  } catch (e) {
    AMessage.error('登录失败，请检查用户名和密码');
    form.password = '';
  }
};
</script>

<template>
  <div class="login">
    <ACard class="form_wrapper">
      <AForm :model="form" :label-col="{ span: 4 }">
        <AFormItem label="用户名">
          <AInput v-model:value="form.username" />
        </AFormItem>
        <AFormItem label="密码">
          <AInput type="password" v-model:value="form.password" />
        </AFormItem>
        <AFormItem label="">
          <AButton type="primary" @click="onLogin">登录</AButton>
        </AFormItem>
      </AForm>
    </ACard>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background-color: #eaeaea;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form_wrapper {
    width: 480px;
  }
}
</style>

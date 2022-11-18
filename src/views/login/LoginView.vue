<script setup lang="ts">
import { reactive } from 'vue';
import { LoginReq } from '@/types/artoria';
import { Check } from '@element-plus/icons-vue';

const form = reactive<LoginReq>({
  username: '',
  password: '',
});

const onSubmit = () => {
  console.log(form);
};
</script>

<template>
  <div class="login">
    <ElCard class="form-wrapper" header="ALTORIA">
      <ElForm :model="form" size="default" label-position="top">
        <ElFormItem label="用户名">
          <ElInput v-model="form.username" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem label="密码">
          <ElInput v-model="form.password" type="password" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" :icon="Check" @click="onSubmit">提交</ElButton>
        </ElFormItem>
      </ElForm>
    </ElCard>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  .form-wrapper {
    width: 600px;
  }
}
</style>

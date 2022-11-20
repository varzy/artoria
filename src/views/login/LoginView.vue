<script setup lang="ts">
import { reactive, ref } from 'vue';
import { LoginPayload } from '@/types/artoria';
import { Check } from '@element-plus/icons-vue';
import { Permission } from '@/utils/Permission';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const isSubmitting = ref(false);
const form = reactive<LoginPayload>({
  username: '',
  password: '',
});

const onSubmit = async () => {
  try {
    isSubmitting.value = true;
    await Permission.login(form);
    ElMessage.success('Welcome! My Master.');
    router.push({ name: 'Index' });
  } catch (e) {
    ElMessage.error(`Can not check your Command Spell. Are you really my Master?`);
    form.password = '';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="login">
    <ElCard class="form-wrapper" header="ARTORIA">
      <ElForm :model="form" size="default" label-width="64">
        <ElFormItem label="用户名">
          <ElInput v-model="form.username" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem label="密码">
          <ElInput v-model="form.password" type="password" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" :icon="Check" :loading="isSubmitting" @click="onSubmit">提交</ElButton>
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
  background-color: #eff5f5;
  .form-wrapper {
    width: 480px;
  }
}
</style>

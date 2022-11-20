<script setup lang="ts">
import { reactive, ref } from 'vue';
import { LoginPayload } from '@/types/artoria';
import { Check } from '@element-plus/icons-vue';
import { Permission } from '@/utils/Permission';
import { ElMessage, FormRules } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const formRef = ref();
const isSubmitting = ref(false);
const form = reactive<LoginPayload>({
  username: '',
  password: '',
});
const formRules = reactive<FormRules>({
  username: [{ required: true, message: 'You must tell me your name.', trigger: 'blur' }],
  password: [{ required: true, message: 'You must show me your command spell.', trigger: 'blur' }],
});

const onSubmit = async () => {
  try {
    await formRef.value.validate();
  } catch {
    return;
  }

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
      <ElForm ref="formRef" :model="form" :rules="formRules" size="default" label-width="132">
        <ElFormItem label="Name" prop="username">
          <ElInput v-model="form.username" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem label="Command Spell" prop="password">
          <ElInput v-model="form.password" type="password" @keydown.enter="onSubmit"></ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton style="margin-top: 8px" type="primary" :icon="Check" :loading="isSubmitting" @click="onSubmit">
            Join the Holy Grail War
          </ElButton>
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
    width: 560px;
  }
}
</style>

<script setup lang="ts">
import { reqPublishChannel } from '@/api/channel';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const isChannelPublishing = ref(false);

const onPublishChannel = async () => {
  try {
    isChannelPublishing.value = true;
    await reqPublishChannel();
    ElMessage.success('发布成功');
  } finally {
    isChannelPublishing.value = false;
  }
};
</script>

<template>
  <div class="index">
    <ElCard header="快捷操作">
      <ElButton type="primary" :loading="isChannelPublishing" @click="onPublishChannel">Publish Channel</ElButton>
    </ElCard>
  </div>
</template>

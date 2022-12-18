<script setup lang="ts">
import { reqPublishChannel } from '@/api/channel';
import { reqGenerateNewsletter, reqPublishNewsletter } from '@/api/newsletter';
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

const isNewsletterGenerating = ref(false);
const onGenerateNewsletter = async () => {
  try {
    isNewsletterGenerating.value = true;
    await reqGenerateNewsletter();
    ElMessage.success('生成成功');
  } finally {
    isNewsletterGenerating.value = false;
  }
};

const isNewsletterPublishing = ref(false);
const onPublishNewsletter = async () => {
  try {
    isNewsletterPublishing.value = true;
    await reqPublishNewsletter();
    ElMessage.success('生成成功');
  } finally {
    isNewsletterPublishing.value = false;
  }
};
</script>

<template>
  <div class="index">
    <ElCard header="快捷操作">
      <ElButton type="primary" :loading="isChannelPublishing" @click="onPublishChannel"> Channel: Publish </ElButton>
      <ElButton type="primary" :loading="isNewsletterGenerating" @click="onGenerateNewsletter">
        Newsletter: Generate
      </ElButton>
      <ElButton type="primary" :loading="isNewsletterPublishing" @click="onPublishNewsletter">
        Newsletter: Publish
      </ElButton>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue';

const onPublishChannelPost = () => {
  console.log(1);
};
</script>

<template>
  <div class="index">
    <a-button type="primary" @click="onPublishChannelPost">Publish Channel Post</a-button>
  </div>
</template>

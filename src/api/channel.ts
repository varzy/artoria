import { request } from '@/utils/request';
import { PublishChannelRes } from '@/types/artoria';

export const reqPublishChannel = () =>
  request<PublishChannelRes>({
    url: '/api/channel/publish',
    method: 'POST',
  });

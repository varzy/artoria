import { request } from '@/utils/request';
import { GenerateNewsletterRes, PublishNewsletterRes } from '@/types/artoria';

export const reqGenerateNewsletter = () =>
  request<GenerateNewsletterRes>({
    url: '/api/newsletter/generate',
    method: 'POST',
  });

export const reqPublishNewsletter = () =>
  request<PublishNewsletterRes>({
    url: '/api/newsletter/publish',
    method: 'POST',
  });

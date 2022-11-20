import { LoginPayload, LoginRes } from '@/types/artoria';
import { request } from '@/utils/request';

export const reqLogin = (data: LoginPayload) =>
  request<LoginRes>({
    url: `/api/users/login`,
    method: 'POST',
    data,
  });

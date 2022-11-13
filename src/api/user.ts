import { http } from '@/utils/http';

export const reqLogin = (data: LoginReq) =>
  http<LoginRes>({
    url: `/api/user/login`,
    method: 'POST',
    data,
  });

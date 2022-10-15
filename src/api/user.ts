import { http } from '@/utils/http';

export const reqLogin = (data: LoginDto): Promise<LoginRes> =>
  http({
    url: `/api/user/login`,
    method: 'POST',
    data,
  });

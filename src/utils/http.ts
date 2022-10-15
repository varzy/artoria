import Axios from 'axios';
import { Permission } from '@/utils/Permission';

const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

instance.interceptors.request.use((config) => {
  if (!config) config = {};
  const token = Permission.getToken();
  if (token) config = { headers: { Authorization: `Bearer ${token}` } };

  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const res = err.response;
    if (res?.config?.showError) {
      if (res.config.customErrMsg) {
        console.error({ content: res.config.customErrMsg });
      } else {
        // http: 404
        if (+res.status === 404) {
          console.error({ content: '未找到资源' });
        }
        // http: 504
        else if (+res.status === 504) {
          console.error({ content: '网络连接超时' });
        } else if (res.data.message) {
          console.error({ content: res.data.message });
        }
        // 其他情况
        else {
          console.error({ content: '网络异常，请稍候重试' });
        }
      }
    }

    return Promise.reject(err.response);
  }
);

export { instance as http };

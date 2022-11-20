import Axios from 'axios';
import { Permission } from '@/utils/Permission';

const request = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

request.interceptors.request.use((config) => {
  if (config) {
    if (!config.headers) config.headers = {};
    if (config.hasOwnProperty.call(config, 'withToken')) config.headers['Authorization'] = Permission.getToken();
  }
  return config;
});

export { request };

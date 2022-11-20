import { ref } from 'vue';

export const useHttpRequest = async (requestFn: <T>() => Promise<T>) => {
  const isRequesting = ref(false);
  const res = await requestFn();
  return { isRequesting, res };
};

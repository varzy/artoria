import { UserInfo } from '@/types/artoria';
import { defineStore } from 'pinia';

interface State {
  userInfo: UserInfo;
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    userInfo: { id: 0, username: '' },
  }),
  actions: {
    saveUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
  },
});

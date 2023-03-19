import { LoginPayload, UserInfo } from '@/types/artoria';
import { reqLogin } from '@/api/auth';

export class Permission {
  static lsTokenKey = 'permission:access_token';
  static lsLastLoginTime = 'permission:last_login_time';
  static lsUserInfo = 'permission:user_info';

  static isLogin() {
    const token = localStorage.getItem(Permission.lsTokenKey);
    const lastLoginTime = localStorage.getItem(Permission.lsLastLoginTime);
    if (!(token && lastLoginTime)) return false;

    const isExpired = +new Date() - +lastLoginTime > 1000 * 60 * 60 * 24 * 3;
    return !isExpired;
  }

  static async login(loginPayload: LoginPayload) {
    const res = await reqLogin(loginPayload);
    const userInfo: UserInfo = { id: res.data.id, username: res.data.username };
    localStorage.setItem(Permission.lsUserInfo, JSON.stringify(userInfo));
    localStorage.setItem(Permission.lsTokenKey, res.data.access_token);
    localStorage.setItem(Permission.lsLastLoginTime, +new Date() + '');
  }

  static logout() {
    [Permission.lsTokenKey, Permission.lsLastLoginTime, Permission.lsUserInfo].forEach((lsKey) => {
      localStorage.removeItem(lsKey);
    });
  }

  static getToken() {
    return localStorage.getItem(Permission.lsTokenKey);
  }

  static getUserInfo(): UserInfo | null {
    const rawUserInfo = localStorage.getItem(Permission.lsUserInfo);
    return rawUserInfo ? JSON.parse(rawUserInfo) : null;
  }
}

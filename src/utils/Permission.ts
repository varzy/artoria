import { LoginPayload } from '@/types/artoria';
import { reqLogin } from '@/api/auth';

export class Permission {
  static lsTokenKey = 'permission:access_token';
  static lsLastLoginTime = 'permission:last_login_time';

  static isLogin() {
    const token = localStorage.getItem(Permission.lsTokenKey);
    const lastLoginTime = localStorage.getItem(Permission.lsLastLoginTime);
    if (!(token && lastLoginTime)) return false;

    const isExpired = +new Date() - +lastLoginTime > 1000 * 60 * 60 * 24 * 3;
    return !isExpired;
  }

  static async login(loginPayload: LoginPayload) {
    const res = await reqLogin(loginPayload);
    localStorage.setItem(Permission.lsTokenKey, res.data.access_token);
    localStorage.setItem(Permission.lsLastLoginTime, +new Date() + '');
  }

  static getToken() {
    return localStorage.getItem(Permission.lsTokenKey);
  }
}

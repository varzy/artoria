export class Permission {
  static lsKeyToken = 'access_token';
  static lsKeyLatestLogin = 'last_login';

  static isLogin(): boolean {
    const latestLoginTime = localStorage.getItem(Permission.lsKeyLatestLogin);
    const token = localStorage.getItem(Permission.lsKeyToken);

    return !!(
      token &&
      latestLoginTime &&
      +new Date() - +latestLoginTime <= 1000 * 60 * 60 * 24 * 6
    );
  }

  static getToken() {
    return localStorage.getItem(Permission.lsKeyToken);
  }
}

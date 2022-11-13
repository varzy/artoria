import { App } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

export default (app: App) => {
  app.use(Antd);
};

import { App } from 'vue';
import ElementPlus from 'element-plus';

export default (app: App) => {
  app.use(ElementPlus, { size: 'small' });
};

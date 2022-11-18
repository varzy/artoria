import { createApp } from 'vue';
import App from './App.vue';
import router from './router/';
import { createPinia } from 'pinia';
import ElementPlus from './plugins/element-plus';
import './styles/main.scss';

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app');

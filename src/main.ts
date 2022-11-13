import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Antd from './plugins/antd/';
import './styles/main.scss';

createApp(App).use(createPinia()).use(Antd).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';

const messages = {
  'en-US': enUS,
  'zh-CN': zhCN,
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('arco-lang') || 'zh-CN',
  fallbackLocale: 'en-US',
  messages: messages,
});

createApp(App).use(router).use(i18n).mount('#app');

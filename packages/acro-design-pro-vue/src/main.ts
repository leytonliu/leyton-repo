import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createI18n, useI18n } from 'vue-i18n';
import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';
import './mock';
import './style/index.less';

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

const app = createApp(App);

// app.config.globalProperties.$t = t;

app.use(router).use(i18n).use(ArcoVueIcon).mount('#app');

console.log(app);

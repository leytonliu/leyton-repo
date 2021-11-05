<template>
  <ConfigProvider :locale="getLocale()">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ConfigProvider } from '@arco-design/web-vue';

import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
  },
  setup() {
    const localeName = localStorage.getItem('arco-lang') || 'zh-CN';

    if (!localStorage.getItem('arco-lang')) {
      localStorage.setItem('arco-lang', localeName);
    }

    // const [locale, setLocale] = useState();

    // function fetchLocale(ln?: string) {
    //   const localePath = `./locale/${ln || localeName}`;
    //   console.log('localePath', localePath);

    //   // const locale = (await import(`./locale/${ln || localeName}`)).default; // webpack
    //   const locale = import.meta.glob(`./locale/${ln || localeName}`); // vite
    //   console.log('locale', locale);

    //   setLocale(locale);
    // }

    // fetchLocale();
    // onMounted(async () => {
    //   console.log(await fetchLocale());
    //   console.log(locale.value);
    // });

    const getLocale = () => {
      switch (localeName) {
        case 'zh-CN':
          return zhCN;
        case 'en-US':
          return enUS;
        default:
          return zhCN;
      }
    };

    console.log(getLocale());

    return {
      // locale,
      getLocale,
    };
  },
});
</script>

<style>
#app {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, PingFang SC, Roboto,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, Myriad Pro, Hiragino Sans GB,
    Lucida Grande, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

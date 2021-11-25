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

import groupBy from 'lodash/groupBy';

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

    return {
      // locale,
      getLocale,
    };
  },
});
</script>

<style>
#app {
  /* font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, PingFang SC, Roboto,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, Myriad Pro, Hiragino Sans GB,
    Lucida Grande, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: Inter, -apple-system, BlinkMacSystemFont, PingFang SC,
    Hiragino Sans GB, noto sans, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif;
}
</style>

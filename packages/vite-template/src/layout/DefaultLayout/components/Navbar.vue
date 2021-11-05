<template>
  <div class="navbar">
    <div class="left">
      <Space :size="8">
        <Logo />
        <Title style="margin: 0" :heading="5"> Arco Design Pro </Title>
      </Space>
    </div>

    <ul class="right">
      <li>
        <a href="https://arco.design/vue/docs/start" target="_blank">文档中心</a>
      </li>

      <li>
        <Select :options="localeOptions" :default-value="defaultLocale" @change="onLocaleChange" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Space, Select, Typography } from '@arco-design/web-vue';
import Logo from '../../../components/Logo.vue';
const { Title } = Typography;
const { Option } = Select;

export default defineComponent({
  components: {
    Space,
    Title,
    Select,
    Option,
    Logo,
  },
  setup() {
    const defaultLocale = localStorage.getItem('arco-lang') || 'zh-CN';
    const localeOptions = [
      { value: 'zh-CN', label: '中文' },
      { value: 'en-US', label: 'English' },
    ];
    const onLocaleChange = (lang: string) => {
      console.log(lang);
      localStorage.setItem('arco-lang', lang);
      window.location.reload();
    };

    return {
      defaultLocale,
      localeOptions,
      onLocaleChange,
    };
  },
});
</script>

<style lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  box-sizing: border-box;
  background-color: var(--color-bg-2);
  height: 100%;
  .left {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .right {
    display: flex;
    list-style: none;
    padding-right: 20px;
    li {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: var(--color-text-1);
      cursor: pointer;
    }
  }
}
</style>

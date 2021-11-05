<template>
  <Layout>
    <LoadingBar ref="loadingBarRef" />
    <Navbar />
    <Layout>
      <Sider class="sider" :width="menuWidth">
        <Menu
          class="menu"
          :default-open-keys="['/dashboard']"
          :default-selected-keys="['workplace']"
          showCollapseButton
          @collapse="onCollapse"
        >
          <SubMenu v-for="route in menuRoutes" :key="route.path">
            <template #title><IconApps /> {{ t(route.name) }}</template>
            <Item
              v-for="subRoute in route.children"
              :key="subRoute.path"
              @click="onMenuClick(subRoute)"
            >
              {{ t(subRoute.name) }}
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content />
        <Footer />
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { Layout, Menu } from '@arco-design/web-vue';
import { IconApps } from '@arco-design/web-vue/es/icon';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Content from './components/Content.vue';
import LoadingBar, { LoadingBarInstance } from '../../components/LoadingBar';
import { routes } from '../../router/index';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { Sider } = Layout;
const { ItemGroup, Item, SubMenu } = Menu;

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Layout,
    Navbar,
    Content,
    Footer,
    LoadingBar,
    Sider,
    Menu,
    SubMenu,
    ItemGroup,
    Item,
    IconApps,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();

    const menuWidth = ref(200);
    const loadingBarRef: Ref<LoadingBarInstance | null> = ref(null);

    const menuRoutes: Ref<any> = ref([]);
    menuRoutes.value = routes.filter((i) => i.component);

    const onMenuClick = (route: RouteRecordRaw) => {
      console.log(route);
      loadingBarRef.value?.loading();
      router.push(route.path);
      setTimeout(() => {
        loadingBarRef.value?.success();
      }, 300);
    };

    const onCollapse = (collapse: boolean) => {
      menuWidth.value = collapse ? 48 : 200;
    };

    return {
      menuRoutes,
      menuWidth,
      loadingBarRef,
      onMenuClick,
      onCollapse,
      t,
    };
  },
});
</script>

<style lang="less" scoped>
.sider {
  height: calc(100vh - 61px);
  width: auto;
  .menu {
    width: 200;
    height: 100%;
  }
}
</style>

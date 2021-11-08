<template>
  <Layout class="layout">
    <LoadingBar ref="loadingBarRef" />
    <Navbar class="layout-navbar" />
    <Layout>
      <Sider class="layout-sider" :width="menuWidth">
        <Menu
          class="menu"
          :default-open-keys="['/dashboard']"
          :default-selected-keys="['workplace']"
          showCollapseButton
          @collapse="onCollapse"
        >
          <SubMenu v-for="route in menuRoutes" :key="route.path">
            <template #title>
              <component :is="`icon-${route.meta.icon}`" />
              {{ t(route.name) }}</template
            >
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

    const menuWidth = ref(220);
    const loadingBarRef: Ref<LoadingBarInstance | null> = ref(null);

    const menuRoutes: Ref<any> = ref([]);
    menuRoutes.value = routes.filter((i) => i.component);

    const onMenuClick = (route: RouteRecordRaw) => {
      console.log(route);
      loadingBarRef.value?.loading();
      router.push({ name: route.name }).then(() => {
        loadingBarRef.value?.success();
      });
    };

    const onCollapse = (collapse: boolean) => {
      menuWidth.value = collapse ? 48 : 220;
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
.layout {
  width: 100%;
  height: 100%;
  // .layout-navbar {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  // }
  .layout-sider {
    height: calc(100vh - 61px);
    width: auto;
    overflow-y: auto;
    .menu {
      height: 100%;
    }
  }
}
</style>

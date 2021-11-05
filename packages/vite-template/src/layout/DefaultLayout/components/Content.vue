<template>
  <Content class="content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </Content>
</template>
<script lang="ts">
import { Layout } from '@arco-design/web-vue';
import { defineComponent } from 'vue';
const { Content } = Layout;

export default defineComponent({
  components: {
    Content,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
.content {
  // padding: 20px;
}
</style>

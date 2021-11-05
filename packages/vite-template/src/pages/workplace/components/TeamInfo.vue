<template>
  <Card title="团队动态" :bordered="false" class="team-info">
    <div v-for="(item, index) in data" :key="index" class="item">
      {{ item.title }}
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Card, Avatar, Button } from '@arco-design/web-vue';

export default defineComponent({
  components: {
    Card,
    Avatar,
    Button,
  },
  setup() {
    const data = ref([
      {
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
      },
      {
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
      },
      {
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
      },
    ]);

    return {
      data,
    };
  },
});
</script>

<style lang="less" scoped>
.team-info {
  .item {
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e6eb;
  }
}
</style>

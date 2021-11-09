<template>
  <Card title="项目进度" :bordered="false">
    <Paragraph bold>Arco Design System</Paragraph>
    <Progress :percent="0.7" :show-text="false" />
    <Group :size="32" style="margin-top: 10px">
      <Avatar style="background-color: #ffc72e">A</Avatar>
      <Avatar style="background-color: #7bc616">P</Avatar>
      <Avatar style="background-color: #14c9c9">Y</Avatar>
      <Avatar style="background-color: #168cff">Z</Avatar>
      <Avatar style="background-color: #ff7d00">D</Avatar>
      <Avatar style="background-color: #14c9c9">KK</Avatar>
    </Group>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Card, Avatar, Typography, Progress } from '@arco-design/web-vue';

const { Paragraph } = Typography;
const { Group } = Avatar;
export default defineComponent({
  components: {
    Card,
    Avatar,
    Paragraph,
    Progress,
    Group,
  },
  setup() {},
});
</script>

<style lang="less" scoped></style>

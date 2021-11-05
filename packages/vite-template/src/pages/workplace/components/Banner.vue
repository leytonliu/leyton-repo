<template>
  <div class="banner">
    <Row>
      <Col :span="8">
        <Title :heading="5" style="margin-top: 0"> 欢迎！ </Title>
        <Text type="secondary"> 刘立东，lidong.liu@hand-china.com</Text>
      </Col>
      <Col :span="16" style="text-align: right">
        <Space :size="30">
          <Statistic title="余额（元）" :value="392.52" :precision="2">
            <template #prefix><icon-home /></template>
          </Statistic>
          <Statistic title="待支付" :value="0" :precision="2">
            <template #prefix><icon-home /></template>
          </Statistic>
          <Statistic title="待续费订单" :value="1">
            <template #prefix><icon-home /></template>
          </Statistic>
        </Space>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Grid, Space, Typography, Statistic } from '@arco-design/web-vue';
const { Row, Col } = Grid;
const { Title, Text } = Typography;
export default defineComponent({
  components: {
    Row,
    Col,
    Space,
    Title,
    Text,
    Statistic,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
.banner {
  background-color: var(--color-bg-2);
  padding: 20px;
}
</style>

<template>
  <Card :title="t('workplace.quick.operation')" :bordered="false" class="quick-operation">
    <Row :gutter="4">
      <Col :span="8" v-for="(link, index) in links" :key="index" class="wrapper">
        <div class="icon">
          <IconRobot />
        </div>
        <Paragraph class="text">{{ t(link) }}</Paragraph>
      </Col>
    </Row>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Card, Grid, Typography } from '@arco-design/web-vue';
import { IconRobot } from '@arco-design/web-vue/es/icon';
const { Row, Col } = Grid;
const { Paragraph } = Typography;
import { useI18n } from 'vue-i18n';
export default defineComponent({
  components: {
    Card,
    Row,
    Col,
    IconRobot,
    Paragraph,
  },
  setup() {
    const { t } = useI18n();
    const links = [
      'workplace.test.performance',
      'workplace.test.stability',
      'workplace.test.unit',
      'workplace.test.release',
      'workplace.test.security',
      'workplace.test.memory',
      'workplace.crontab',
      'workplace.dataManagement',
      'workplace.log',
    ];
    return {
      t,
      links,
    };
  },
});
</script>

<style lang="less" scoped>
.quick-operation {
  .wrapper {
    text-align: center;
    cursor: pointer;

    &:last-child {
      .text {
        margin-bottom: 0;
      }
    }
    .icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      background-color: rgb(var(--cyan-6));
      color: #fff;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    .text {
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>

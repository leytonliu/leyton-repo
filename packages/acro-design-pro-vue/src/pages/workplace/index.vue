<template>
  <div class="container">
    <Banner />
    <div class="content">
      <div class="left">
        <Row>
          <Col :span="24" class="panel">
            <Row>
              <Col :span="6">
                <Statistic :title="t('workplace.encodeTime')" :value="3735">
                  <template #suffix>{{ t('workplace.minute') }}</template>
                </Statistic>
              </Col>
              <Col :span="6">
                <Statistic :title="t('workplace.upstream')" :value="124567" suffix="GB">
                  <template #suffix>GB</template>
                </Statistic>
              </Col>
              <Col :span="6">
                <Statistic :title="t('workplace.downstream')" :value="24335" suffix="GB">
                  <template #suffix>GB</template>
                </Statistic>
              </Col>
              <Col :span="6">
                <Statistic :title="t('workplace.overview')" :value="145652" suffix="GB">
                  <template #suffix>GB</template>
                </Statistic>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col :span="12" style="padding-right: 12px">
            <TeamInfo />
            <ProjectProgress />
            <RecentlyVisited />
          </Col>
          <Col :span="12">
            <RecentlyProjects />
            <Record />
          </Col>
        </Row>
      </div>
      <div class="right">
        <Space style="width: 100%" direction="vertical" :size="12">
          <QuickOperation />
          <Carousel />
          <Docs />
        </Space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { Grid, Statistic, Space } from '@arco-design/web-vue';
import Banner from './components/Banner.vue';
import TeamInfo from './components/TeamInfo.vue';
import ProjectProgress from './components/ProjectProgress.vue';
import RecentlyVisited from './components/RecentlyVisited.vue';
import RecentlyProjects from './components/RecentlyProjects.vue';
import Record from './components/Record.vue';
import QuickOperation from './components/QuickOperation.vue';
import Carousel from './components/Carousel.vue';
import Docs from './components/Docs.vue';
const { Row, Col } = Grid;
import axios from 'axios';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    axios.get('/api/user/userInfo').then((res) => {
      console.log(res);
    });
    return {
      t,
    };
  },
  components: {
    Banner,
    Row,
    Col,
    Statistic,
    Space,
    TeamInfo,
    ProjectProgress,
    RecentlyVisited,
    RecentlyProjects,
    Record,
    QuickOperation,
    Carousel,
    Docs,
  },
});
</script>

<style lang="less" scoped>
.container {
  background: var(--color-fill-2);
  height: 100%;
  .content {
    padding: 20px;
    display: flex;
    .left {
      flex: 1;
      .panel {
        background-color: var(--color-bg-2);
        margin-bottom: 12px;
        border-radius: 2px;
        padding: 16px;
      }
    }

    .right {
      width: 280px;
      margin-left: 12px;
    }
  }
}
</style>

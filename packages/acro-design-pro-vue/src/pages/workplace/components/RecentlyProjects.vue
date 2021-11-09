<template>
  <Card :title="t('workplace.recently.projects')" :bordered="false">
    <template #extra>
      <Link>{{ t('workplace.allProject') }}</Link>
    </template>
    <Card :bordered="false">
      <Grid hoverable style="width: 50%" v-for="(item, index) in [1, 2, 3, 4]" :key="index">
        <Card title="Arco Design" :bordered="false"> Arco Design Team </Card>
      </Grid>
    </Card>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Card, Link } from '@arco-design/web-vue';
import { useI18n } from 'vue-i18n';
const { Grid } = Card;
export default defineComponent({
  components: {
    Card,
    Link,
    Grid,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="less" scoped></style>

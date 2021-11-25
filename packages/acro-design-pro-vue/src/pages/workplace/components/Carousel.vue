<template>
  <Card :bordered="false">
    <Button @click="toggleShow(!show)">toggle</Button>
    <img :src="url" v-if="show" />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Card, Button } from '@arco-design/web-vue'
import useState from '../../../utils/hooks/useState'
export default defineComponent({
  components: {
    Card,
    Button
  },
  setup() {
    const url = 'https://csg-prod-public.s3.cn-south-1.jdcloud-oss.com/pcm/images/10001/K/XCSGP00006459/T/0/主图 (1)20210913180826'

    const [show, toggleShow] = useState(true)
    return {
      url,
      show, toggleShow
    }
  },
})
</script>

<style lang="less" scoped>
</style>


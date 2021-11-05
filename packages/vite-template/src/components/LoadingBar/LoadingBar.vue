<template>
  <Progress v-if="!hide" :show-text="false" :percent="percent / 100" animation class="progress" />
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { Progress } from '@arco-design/web-vue';
import useState from '../../utils/hooks/useState';
export default defineComponent({
  name: 'LoadingBar',
  components: {
    Progress,
  },
  setup() {
    const [hide, setHide] = useState<boolean>(true);
    const [percent, setPercent] = useState<number>(20);

    let loadingTimer: Ref<any> = ref(null);

    const loading = () => {
      setHide(false);
      setPercent(20);
      loadingTimer.value = setInterval(() => {
        if (percent.value <= 98) {
          setPercent(percent.value > 80 ? percent.value + 1 : percent.value + 10);
        }
      }, 1000);
    };

    const success = () => {
      clearInterval(loadingTimer.value);
      setPercent(100);

      setTimeout(() => {
        setHide(true);
      }, 300);
    };

    return {
      hide,
      setHide,
      percent,
      setPercent,
      loading,
      success,
    };
  },
});
</script>

<style lang="less" scoped>
.progress {
  position: absolute;
  height: 2;
  top: -1;
  z-index: 9999;
}
</style>

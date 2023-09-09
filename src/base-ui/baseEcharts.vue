<template>
  <div class="base-Echart" ref="divRef"></div>
</template>

<script setup lang="ts">
import { useEchart } from '@/hooks/useEcharts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
interface IProp {
  option: EChartsOption
}
const props = defineProps<IProp>()
const divRef = ref<HTMLElement>()
onMounted(() => {
  if (divRef.value) {
    const { echartInstance, setOption } = useEchart(divRef.value)
    watchEffect(() => setOption(props.option))
  }
})
</script>

<style scoped lang="less">
.base-Echart {
  height: 280px;
  margin-top: 20px;
}
</style>

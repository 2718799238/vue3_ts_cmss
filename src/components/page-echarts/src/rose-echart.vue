<template>
  <div class="rose-chart">
    <div class="title">分类商品数量</div>
    <div class="chart"><baseEcharts :option="options"></baseEcharts></div>
  </div>
</template>

<script setup lang="ts">
import baseEcharts from '@/base-ui/baseEcharts.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
interface IProp {
  data: any[]
}

const props = defineProps<IProp>()

let options = computed<EChartsOption>(() => {
  return {
    series: [
      {
        type: 'pie',
        data: props.data,
        roseType: 'area'
      }
    ]
  }
})
</script>

<style scoped lang="less">
.rose-chart {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  .title {
    font-size: 16px;
    color: #666;
    padding: 8px;
    border-bottom: 1px solid #666;
  }
}
</style>

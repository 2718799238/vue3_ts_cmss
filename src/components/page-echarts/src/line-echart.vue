<template>
  <div class="line-chart">
    <div class="title">分类商品销量</div>
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

const xName = props.data.map((item) => {
  return item.name
})
let options = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xName
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data,
        type: 'line',
        areaStyle: {
          color: 'skyblue'
        }
      }
    ]
  }
})
</script>

<style scoped lang="less">
.line-chart {
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

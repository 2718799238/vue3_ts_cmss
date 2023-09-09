<template>
  <div class="pie-chart">
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
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      top: 'top',
      itemStyle: {}
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [...props.data],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less">
.pie-chart {
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

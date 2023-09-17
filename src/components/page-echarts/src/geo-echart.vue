<template>
  <div class="pie-chart">
    <div class="title">分类商品数量</div>
    <div class="chart"><baseEcharts :option="options" /></div>
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
    visualMap: {
      min: 800,
      max: 80000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      left: '5%',
      bottom: '8%',
      textStyle: {
        color: '#fff'
      },

      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },

    series: [
      {
        type: 'map',
        map: 'china',
        data: props.data
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

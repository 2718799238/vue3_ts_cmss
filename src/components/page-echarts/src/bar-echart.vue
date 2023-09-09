<template>
  <div class="bar-chart">
    <div class="title">分类商品收藏</div>
    <div class="chart"><baseEcharts :option="options"></baseEcharts></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import baseEcharts from '@/base-ui/baseEcharts.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
interface IProp {
  data: any[]
}

const props = defineProps<IProp>()
const xName = computed(() => {
  return props.data.map((item) => {
    return item.name
  })
})
let options = computed<EChartsOption>(() => {
  return {
    title: {
      text: '支持缩放',
      textStyle: {
        fontSize: '16px'
      }
    },
    xAxis: {
      data: xName.value,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.data
      }
    ]
  }
})
</script>

<style scoped lang="less">
.bar-chart {
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

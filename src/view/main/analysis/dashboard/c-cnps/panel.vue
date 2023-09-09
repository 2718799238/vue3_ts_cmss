<template>
  <div class="panel">
    <div class="title">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="bottom" effect="light">
        <el-icon class="icon"><InfoFilled /></el-icon
      ></el-tooltip>
    </div>
    <div class="total" ref="totalRef" id="total"></div>
    <div class="small-total">
      {{ title }}<span ref="total2Ref" class="counter"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { ref, onMounted } from 'vue'

interface IProp {
  amount: string
  title: string
  tips: string
  subtitle: string
  number1: number
  number2: number
}
const props = defineProps<IProp>()
const totalRef = ref<HTMLElement>()
const total2Ref = ref<HTMLElement>()
onMounted(() => {
  const countUp = new CountUp(totalRef.value!, props.number1)
  const countUp2 = new CountUp(total2Ref.value!, props.number2)
  countUp.start()
  countUp2.start()
})
</script>

<style scoped lang="less">
.panel {
  background-color: #fff;
  border-radius: 10px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 10px;
  .title {
    font-size: 12px;
    color: #666;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .icon {
      margin-right: 30px;
    }
  }
  .total {
    font-size: 22px;
    flex: 1;
  }
  .small-total {
    font-size: 12px;
    color: #333;
    border-top: 1px solid rgba(102, 102, 102, 0.5);
    padding-top: 10px;
  }
}
</style>

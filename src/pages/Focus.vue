<script setup>
import { ref, onMounted } from 'vue'

const color = 'skyblue'
const currentRate = ref(0)

const rate = ref(50)

const rateChange = () => {
  const timeId = setInterval(() => {
    console.log('test', rate.value, currentRate.value)
    rate.value >= 100 ? clearInterval(timeId) : ''

    rate.value += 10

    // currentRate.value += 10

  }, 1000)
}

onMounted(rateChange)
</script>

<template>
  <div class="focus">
    <van-progress
      :percentage="50"
      pivot-text="紫色"
      pivot-color="#7232dd"
      track-color="#f00"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </div>
</template>

<style lang="stylus">
  
</style>

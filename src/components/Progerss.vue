<script setup>
import { ref } from 'vue'

const props = defineProps({
  percentage: String
});
</script>

<template>
  <div class="progressWrap">
    <!-- 当前进度条 -->
    <span class="percentage" :style="{ width: percentage }"></span>
    <!-- <span class="tips">{{ width }}</span> -->
  </div>
</template>

<style lang="stylus">
.progressWrap
  position relative
  top 0
  left 50%
  transform translateX(-50%) scaleY(0.5)
  width 300px
  height 1px
  background #fff
  .percentage
    position absolute
    top 0
    left 0
    height 1px
    background #000
    transition width 1s
  .percentage::after
    position absolute
    top 50%
    left 100%
    transform translateY( -50% )
    content ''
    width 3px
    height 3px
    border-radius 3px
    background #000

</style>

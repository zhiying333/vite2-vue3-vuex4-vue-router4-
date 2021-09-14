<script setup>

</script>

<template>
  <div class="commend">
    <div class="top">
      <div class="title">
        <slot name="title">推荐歌单</slot>
      </div>
      <div class="more">
        <slot name="more"></slot>
      </div>
    </div>
    <div class="bottom">
      <slot name="context"></slot>
    </div>
  </div>
</template>

<style lang="stylus">
.commend
  padding 15px
  margin-top 10px
  background #fff
  .top
    height 30px
    margin-bottom 10px
    .title
      float left
      line-height 30px
      font-size 18px
      font-weight bold
    .more
      float right
      padding 5px 8px
      border 1px solid #ddd
      border-radius 15px
</style>

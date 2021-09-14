<script setup>
</script>

<template>
  <div class="search">
    <!-- 搜索表单 -->
    <div class="search-ipt">
      <i class="iconfont icon-zuojiantou"></i>
      <input type="text" class="ipt" placeholder="宝宝巴士 最近很火哦">
    </div>
    <!-- 搜索榜单 -->
    <div class="search-list"></div>
    <!-- 音乐专区 -->
    <div class="music-zone"></div>
    <!-- 推荐活动 -->
    <div class="recActivities"></div>
  </div>
</template>

<style lang="stylus">
@import '../common/stylus/mixins.styl'
.search
  .search-ipt
    display flex
    align-items center
    padding 15px
    .iconfont
      flex 1
      font-size 18px
    .ipt
      flex 7
      height 30px
      outline none
      font-size 16px
      color #999
      border-bottom 1px solid #ddd
</style>

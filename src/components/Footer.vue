<script setup>
import AudioMini from '../components/AudioMini.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const skip = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="footer">
    <AudioMini />
    <div class="tabbar">
      <div class="tabbar-item" @click="skip('/msite')">
        <span class="iconfont icon-wangyiyun" :class="{ on: $route.path == '/msite'}"></span>
        <span class="text">发现</span>
      </div>
      <div class="tabbar-item" @click="skip('/blog')">
        <span class="iconfont icon-guanzhu" :class="{ on: $route.path == '/blog'}"></span>
        <span class="text">播客</span>
      </div>
      <div class="tabbar-item" @click="skip('/profile')">
        <span class="iconfont icon-yinyue" :class="{ on: $route.path == '/profile'}"></span>
        <span class="text">我的</span>
      </div>
      <div class="tabbar-item" @click="skip('/focus')">
        <span class="iconfont icon-guanzhu1" :class="{ on: $route.path == '/focus'}"></span>
        <span class="text">关注</span>
      </div>
      <div class="tabbar-item" @click="skip('/square')">
        <span class="iconfont icon-guangchang" :class="{ on: $route.path == '/square'}"></span>
        <span class="text">云村</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../common/stylus/mixins.styl'
.footer
  top-border-1px(#eee)
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  background #fff
  z-index 99
  .tabbar
    display flex
    .tabbar-item
      display flex
      flex 1
      flex-direction column
      align-items center
      .iconfont
        width 28px
        height 28px
        line-height 28px
        border-radius 50%
        font-size 22px
        color #999
        text-align center
        &.on
          color #fff
          font-size 20px
          background  linear-gradient(45deg, #ed4e3d 40%, #fc4642 30%, #f88b88 30%)
      span
        margin-top 6px
</style>

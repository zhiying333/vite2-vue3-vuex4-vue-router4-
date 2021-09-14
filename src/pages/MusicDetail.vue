<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import { getMusicDetail, getMusic, getMusicWords } from '../api'
import Progress from '../components/Progerss.vue'

import Record from '../components/Record.vue'

const router = useRouter()
const route = useRoute()

const store = useStore()

// let { currentMusic } = msiteState

// console.log(route.params)

// const music = await getMusicDetail(route.params.id)
// console.log('mu', music)

// const musicUrl = await getMusic(route.params.id)
// console.log('url', musicUrl)

// const words = await getMusicWords(route.params.id)
// console.log('words', words)

const quit = () => {
  router.go(-1)
}

// const musicUrl = ref('')
const getMusicUrl = async () => {
  const urlData = await getMusic(route.params.id)
  console.log('url', urlData.data[0].url)
  store.commit('getCurrentMusic',urlData.data[0])
  // musicUrl.value = urlData.data[0].url
}

const init = () => {
  getMusicUrl()
}

onMounted(init)
</script>

<template>
  <div class="music">
    <div class="bg"></div>
    <div class="header">
      <div class="quit" @click="quit">
        <i class="iconfont icon-xiangxiajiantou"></i>
      </div>
      <div class="musicName">
        <van-notice-bar class="notice" scrollable text="错位时空"
          speed="30"
          color="#fff"
        />
        <div class="singerName">艾 辰</div>
      </div>
      <div class="singUser">
        <img class="userImg" src="https://img0.baidu.com/it/u=3858656132,1246399595&fm=26&fmt=auto&gp=0.jpg" />
      </div>
    </div>
    <Record />
    <div class="controls">
      <div class="selector">
        <div class="love">
          <i class="iconfont icon-xihuan"></i>
        </div>
        <div class="download">
          <i class="iconfont icon-tubiaozhizuomoban"></i>
        </div>
        <div class="vip">
          <i class="iconfont icon-vip"></i>
        </div>
        <div class="comment">
          <van-icon name="clock-o" />  
        </div>
        <div class="info">
          <i class="iconfont icon-a-sangedian2"></i>
        </div>
      </div>
      <div class="progress">
        <Progress
          percentage="80%"
        />
      </div>
      <div class="controlsBtn">
        <div class="rules">
          <i class="iconfont icon-shunxubofang"></i>
        </div>
        <div class="pre">
          <i class="iconfont icon-shangyiqu-wangyiicon"></i>
        </div>
        <div class="play">
          <!-- icon-yinlebofangzanting -->
          <i class="iconfont icon-yinlebofang playbtn"></i>
        </div>
        <div class="next">
          <i class="iconfont icon-shangyiqu"></i>
        </div>
        <div class="menu">
          <i class="iconfont icon-gedan1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.music
  .bg
    position fixed
    top 0
    left 0
    width 100%
    height 666px
    background repeating-linear-gradient(#e5e5e5, #101012, #d3d3d3)
    z-index -9999
  .header
    display flex
    align-items center
    padding 10px
    .quit
      flex 1
      .iconfont
        font-size 20px
        font-weight bold
        color #fff
    .musicName
      flex 2
      margin 0 15px
      overflow hidden
      .notice
        font-size 18px
      .singerName
        float right
        color #e5e5e5
    .singUser
      flex 1
      .userImg
        width 36px
        height 36px
        border-radius 50%
  .controls
    position absolute
    left 0
    bottom 0
    width 100%
    .selector
      display flex
      align-items center
      div
        display flex
        justify-content center
        flex 1
        color #fff
        padding 10px
        .iconfont
          font-size 25px
    .controlsBtn
      display flex
      align-items center
      color #fff
      width 100%
      div
        display flex
        justify-content center
        flex 1
        padding 15px
        .iconfont
          font-size 26px
        .playbtn
          font-size 50px
</style>

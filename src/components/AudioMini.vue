<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

let musicUrl = computed(() => store.state.msite.currentMusic)
//环形进度条实时进度
const currentRate = ref(0)
//环形进度条目标进度
const rate = ref(30)
//是否播放图标切换
const iconTaggle = ref(false)
//音频对象引用
const audioEle = ref(null)
//音频是否播放
const isPlayer = ref(false)
//音频地址
const src = computed(() => musicUrl.value.url)

const playChange = () => {
  iconTaggle.value = !iconTaggle.value;
  if (iconTaggle.value) {
    audioEle.value.play()
    isPlayer.value = true
    // ended = audioEle.value.ended
  } else {
    audioEle.value.pause()
    isPlayer.value = false
  }
}

</script>

<template>
  <div class="audio-box">
    <div class="img">
      <div class="img-box">
        <img class="music-img" :class="{ on: isPlayer}" src="https://img0.baidu.com/it/u=3858656132,1246399595&fm=26&fmt=auto&gp=0.jpg" alt="">
      </div>
    </div>
    <div class="music-name">还是会想你<span>-林达浪/h3R3</span></div>
    <div class="miniAudio"
      @click="playChange"
    >
      <div class="mask">
        <i class="iconfont" :class="{ 'icon-bofang1': !iconTaggle, 'icon-zantingbofang': iconTaggle}"></i>
      </div>
      <van-circle
        class="circle"
        v-model:current-rate="currentRate"
        :rate="rate"
        layer-color="#ededed"
        color="#f00"
        size="40px"
        :stroke-width="60"
      />
      <audio ref="audioEle" :src="src" class="audio"></audio>
    </div>
    <div class="select">
      <i class="iconfont icon-gedan1"></i>
    </div>
  </div>
</template>

<style lang="stylus">
.audio-box
  display flex
  margin 5px 0 0 0
  .img
    flex 1
    .img-box
      margin-left 5px
      width 32px
      height 32px
      border 5px solid #000
      border-radius 50%
      background skyblue
      .music-img
        width 100%
        height 100%
        border-radius 50%
        overflow hidden
        &.on
          animation imgR 10s linear infinite
  .music-name
    flex 5
    font-size 14px
    line-height 41px
    span
      font-size 12px
  .miniAudio
    display flex
    flex-direction column
    justify-content center
    align-items center
    position relative
    flex 1
    .mask
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      display flex
      justify-content center
      align-items center
      width 36px
      height 36px
      border-radius 50%
      background #fff
  .select
    display flex
    justify-content center
    align-items center
    flex 1
    .iconfont
      font-size 30px
      text-align center
  
  @keyframes imgR {
    to {}
    from {
      transform rotate(-360deg)
    }
  }
</style>

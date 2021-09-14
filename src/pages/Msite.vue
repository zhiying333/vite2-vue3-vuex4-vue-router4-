<script setup>
import { ref,onBeforeMount, onMounted } from 'vue'
import { Swiper, SwiperSlide } from  'swiper/vue'
import 'swiper/css';
import { useRouter } from 'vue-router'

import { getBanner, getMsite, getIcons, getCommendMusics } from '../api'

import MsiteCommend from '../components/MsiteCommend.vue'

//路由
const router = useRouter()

let banners = ref([])

const getBannerData = async () => {
  let bannerData = await getBanner(2)
  banners.value = bannerData.banners
}
onBeforeMount(getBannerData)

const onSwiper = swiper => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const icons = ref([])

const getIconList = async () => {
  const res = await getIcons()
  icons.value = res.data
}
onMounted(getIconList)

//跳转至歌曲详情页
const skipSong = (id) => {
  console.log('id',id )
  router.push({
    path: `/musicDetail/${id}`
  })
}

//获取推荐歌单
const commendMusics = ref([])
const getCommend = async () => {
  const data = await getCommendMusics(6)
  commendMusics.value = data.result
}
onMounted(getCommend)

function search () {
  router.push('/search')
}
</script>

<template>
  <div class="msite">
    <div class="search">
      <div class="menu">
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="search-box">
        <i class="iconfont icon-sousuo_huaban1"
          @click="search"
        ></i>
        <span class="search-p"
          @click="search"
        >
          大家都在搜 大悲咒
        </span>
        <i class="speech iconfont icon-yuyin"></i>
      </div>
      <div class="mineBtn">
        <i class="iconfont icon-yonghu"></i>
      </div>
    </div>
    <div class="banner">
      <div class="bannerBox">
        <van-swipe id="swiper" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            class="swiper-item"
            v-for="(banner, index) in banners"
            :key="index"
            @click="skipSong(banner.encodeId)"
          >
            <img v-lazy="banner.pic" class="img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <swiper
          class="swiper-box"
          :slides-per-view="5"
          :space-between="15"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            class="slide"
            v-for="icon in icons"
            :key="icon.id"
          >
            <div class="iconsBox">
              <img class="icon" :src="icon.iconUrl" alt="">
              <span class="name">{{icon.name}}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="commend-music">
      <MsiteCommend>
        <template #title>推荐歌单</template>
        <template #more>
          <span class=".more">更多</span>
          <i class="iconfont icon-right-arrow"></i>
        </template>
        <template #context>
          <swiper
            class="commend-swp"
            :slidesPerView="3"
            :spaceBetween="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              class="slide"
              v-for="music in commendMusics"
              :key="music.id"
              @click="skipSong(music.id)"
            >
              <div class="iconsBox">
                <img class="icon-img" :src="music.picUrl" alt="">
                <span class="name">{{music.name}}</span>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </MsiteCommend>
    </div>
    <div class="commend-music">
      <MsiteCommend>
        <template #title>推荐歌单</template>
        <template #more>
          <span class=".more">更多</span>
          <i class="iconfont icon-right-arrow"></i>
        </template>
        <template #context>
          <swiper
            class="commend-swp"
            :slidesPerView="3"
            :spaceBetween="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              class="slide"
              v-for="music in commendMusics"
              :key="music.id"
              @click="skipSong(music.id)"
            >
              <div class="iconsBox">
                <img class="icon-img" :src="music.picUrl" alt="">
                <span class="name">{{music.name}}</span>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </MsiteCommend>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../common/stylus/mixins.styl'

.msite
  background #f5f5f5
  padding-bottom 100px
  .search
    display flex
    height 44px
    line-height 44px
    .menu
      flex 1
      display flex
      justify-content center
    .search-box
      display flex
      align-items center
      flex 6
      height 30px
      padding 0 5px 0 10px
      margin 7px 10px 0
      color #999
      border-radius 15px
      background #fff
      .iconfont
        flex 1
      .search-p
        flex 6
    .mineBtn
      flex 1
      .iconfont
        font-size 24px
        color #666
  .banner
    bottom-border-1px(#ddd)
    margin-top 10px
    .bannerBox
      width 100%
      height 150px
      #swiper
        height 100%
        overflow hidden
        .swiper-item
          display flex
          justify-content center
          align-items center
          float left
          .img
            width 90%
            height 150px
            border-radius 10px
    .nav
      padding 10px
      background #fff
      .swiper-box
        .slide
          .iconsBox
            display flex
            flex-direction column
            align-items center
            .icon
              width 45px
              height 45px
              border-radius 50%
              margin-bottom 10px
              background radial-gradient(#ff6764 20%, #fff1f1 80%)
  .commend-music
    .commend-swp
      .slide
        .iconsBox
          .icon-img
            width 96px
            height auto
            border-radius 10px
          .name
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
            margin-top 5px
            line-height 16px

</style>

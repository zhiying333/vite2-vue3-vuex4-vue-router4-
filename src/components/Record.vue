<script setup>
const props = defineProps({
  isPlay: Boolean
})
</script>

<template>
  <div class="record">
    <!-- 唱针 -->
    <div class="stylus">
      <div class="circle1">
        <div class="circle2"></div>
        <!-- 下面针 -->
        <div class="needle"
          :class="{ rotate: isPlay}"
        >
          <div class="box1"></div>
          <div class="box2">
            <div class="box3"></div>
            <div class="box4">
              <div class="box5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 唱片 -->
    <div class="recordBox">
      <div class="rBox1"
        :class="{ on: isPlay}"
      >
        <div class="rBox2">
          <div class="rBox3">
            <div class="rBox4">
              <div class="rBox5">
                <div class="rBox6">
                  <div class="rBox7">
                    <div class="rBox8">
                          <img class="recordImg" src="https://p1.music.126.net/aYvWeJUjjJC8jai4uWiNAg==/109951166357637893.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.record
  position relative
  .stylus
    position absolute
    top 0px
    left 50%
    transform translateX(-50%)
    .circle1
      width 22px
      height 22px
      border-radius 50%
      background rgba(0, 0, 0, .1)
      .circle2
        position absolute
        top 50%
        left 50%
        transform translate( -50%, -50%)
        width 5px
        height 5px
        border 5px solid #fff
        border-radius 50%
        background #e5e5e5
      .needle
        position absolute
        top 50%
        left 50%
        width 100%
        height 100%
        transform translate( -50%, -50%) rotate(-45deg)
        transition all 1s
        &.rotate
          transform translate( -50%, -50%)
        .box1
          position absolute
          left 50%
          top 50%
          transform translateY(-50%) rotate(85deg)
          transform-origin left
          width 60px
          height 1px
          border 3px solid #fff
          border-right none
          border-radius 1px
          background #e5e5e5
        .box2
          position absolute
          top 67px
          left 71%
          transform-origin left
          transform rotate(65deg)
          width 30px
          height 1px
          border 3px solid #FFF
          border-radius 3px
          border-left none
          background #e5e5e5
          z-index -999
          .box3
            display flex
            width 15px
            height 8px
            margin-left 25px
            transform translateY(-45%)
            border-radius 2px
            background linear-gradient(to top, #d3d3d3, #e5e5e5, #d3d3d3)
          .box4
            display flex
            justify-content center
            align-items center
            width 6px
            height 6px
            margin-left 37px
            border 3px solid #fff
            background #b1b1b1
            border-radius 2px
            transform translateY(-115%)
            .box5
              width 8px
              height 4px
              border-radius 1px
              background #e5e5e5
  .recordBox
    position absolute
    top 75px
    left 50%
    transform translateX(-50%)
    z-index -1
    .rBox1
      display flex
      justify-content center
      align-items center
      width 255px
      height 255px
      border 5px solid #e5e5e5
      border-radius 50%
      background linear-gradient( #101012 40%, #272729d1, #101012 60%)
      &.on
        animation recordRotate 15s linear infinite
      .rBox2,
      .rBox3,
      .rBox4,
      .rBox5,
      .rBox6,
      .rBox7,
      .rBox8,
      .rBox9,
      .rBox10
        display flex
        justify-content center
        align-items center
        width 95%
        height 95%
        border-radius 50%
      .rBox2
        border 1px solid #131315
        .rBox3,
        .rBox4,
        .rBox5,
        .rBox6,
        .rBox7,
        .rBox8,
        .rBox9,
        .rBox10
          border 1px solid #0b0708
          .recordImg
            width 100%
            height 100%
            border-radius 50%
            border 5px solid #000
    
    @keyframes recordRotate {
      to {}
      from {
        transform rotate(-360deg)
      }
    }

</style>

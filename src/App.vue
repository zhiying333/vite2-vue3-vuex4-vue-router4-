<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
    <router-view/>
    <Footer v-show="$route.meta.isShowTabbar"/>
  </div>
</template>

<style lang="stylus">

</style>

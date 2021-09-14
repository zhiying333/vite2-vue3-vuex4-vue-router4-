import { GET_CURRENTMUSIC } from '../mutation-types'

export default {
  state: {
    currentMusic: {},//当前播放音乐

  },

  mutations: {
    [GET_CURRENTMUSIC] (state, currentMusic) {
      state.currentMusic = currentMusic
    }
  },

  actions: {

  },

  getters: {
    
  }
}
import ajax from './ajax'

//首页banner
export const getBanner = type => ajax('/banner',{
  params: {
    type
  }
})

//首页发现接口
export const getMsite = (refresh) => ajax('/homepage/block/page', {
  params: {
    refresh
  }
})

//首页圆形图标入口列表
export const getIcons = () => ajax('/homepage/dragon/ball')

//获取歌曲详情
export const getMusicDetail = (ids) => ajax('/song/detail', {
  params: {
    ids
  }
})

//获取音乐url
export const getMusic = (id) => ajax('/song/url', {
  params: {
    id
  }
})

//获取歌词
export const getMusicWords = (id) => ajax('/lyric', {
  params: {
    id
  }
})

//推荐歌单
export const getCommendMusics = (limit) => ajax('/personalized', {
  params: {
    limit
  }
})
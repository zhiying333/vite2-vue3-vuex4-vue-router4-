import Msite from '../pages/Msite.vue'
import Blog from '../pages/Blog.vue'
import Profile from '../pages/Profile.vue'
import Focus from '../pages/Focus.vue'
import Square from '../pages/Square.vue'
import MusicDetail from '../pages/MusicDetail.vue'
import Search from '../pages/Search.vue'

const routes = [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/blog',
    component: Blog,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/focus',
    component: Focus,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/square',
    component: Square,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/musicDetail/:id',
    component: MusicDetail
  },
  {
    path: '/',
    redirect: '/msite'
  }
]

export default routes
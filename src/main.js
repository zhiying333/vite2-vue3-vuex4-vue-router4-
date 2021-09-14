import { createApp } from 'vue'
import 'lib-flexible'
import {
  Swipe,
  SwipeItem,
  Lazyload,
  Circle,
  NoticeBar,
  Icon,
  Progress
} from 'vant'


import router from './router'
import store from './store'

import App from './App.vue'

const app = createApp(App)

app
  .use(router)
  .use(store)
  .use(Swipe)
  .use(SwipeItem)
  .use(Circle)
  .use(NoticeBar)
  .use(Icon)
  .use(Progress)
  .use(Lazyload)
  .mount('#app')

import App from './App.vue'
import router from './router'
import store from './store'

import initComponents from '../initComponents'
import CInteractiveDemo from '@/components/CInteractiveDemo'

initComponents(
  App,
  undefined,
  router,
  store
).then(app => {
  app.component('c-interactive-demo', CInteractiveDemo)
  app.mount('#app')
})

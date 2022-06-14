import initComponents from 'ui'

import App from './App.vue'
import router from './router'
import store from './store'

initComponents(
  App,
  undefined,
  router,
  store
).then(app => app.mount('#app'))

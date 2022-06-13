import { createApp } from 'vue'

import dcode from 'dcode/init'
import Translation from 'dcode/classes/Translation'
import { options } from './options'

import './design/tailwind.css'
import './design/main.scss'

export default function init (
  App,
  API = undefined,
  router = undefined,
  store = undefined,
  implementation = undefined
) {
  (async () => {
    if (
      API &&
      'translation' in API
    ) {
      Translation.add(await API.translation())
    }

    const app = createApp(App)

    if (router) {
      app.use(router)
    }

    if (store) {
      app.use(store)
    }

    app.use(dcode, options)
    app.mount('#app')

    if (implementation) {
      implementation(app)
    }
  })()
}

import { createApp } from 'vue'

import dcode from 'dcode/init'
import Translation from 'dcode/classes/Translation'
import { options } from './options'

import icons from './design/icons'
import './design/tailwind.css'
import './design/main.scss'

export default async function init (
  appElement,
  api = undefined,
  router = undefined,
  store = undefined
) {
  if (
    api &&
    'translation' in api
  ) {
    Translation.add(await api.translation())
  }

  icons()

  const app = createApp(appElement)

  if (router) {
    app.use(router)
  }

  if (store) {
    app.use(store)
  }

  app.use(dcode, options)
  return app
}

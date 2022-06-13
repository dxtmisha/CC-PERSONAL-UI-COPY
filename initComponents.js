import init from './init'
import CButton from './components/CButton'

export default function initComponents (
  App,
  API = undefined,
  router = undefined,
  store = undefined,
  implementation = undefined
) {
  init(
    App,
    API,
    router,
    store,
    app => {
      app.component('c-button', CButton)

      if (implementation) {
        implementation(app)
      }
    }
  )
}

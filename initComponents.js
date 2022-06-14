import init from './init'
import CAccordion from './components/CAccordion'
import CAlert from './components/CAlert'
import CAvatar from './components/CAvatar'
import CAxis from './components/CAxis'
import CButton from './components/CButton'
import CButtonIcon from './components/CButtonIcon'
import CButtonSelect from './components/CButtonSelect'
import CCheckbox from './components/CCheckbox'
import CChip from './components/CChip'
import CDrop from './components/CDrop'
import CInput from './components/CInput'
import CLineData from './components/CLineData'
import CSelect from './components/CSelect'
import CSwitch from './components/CSwitch'

export default async function initComponents (
  appElement,
  api = undefined,
  router = undefined,
  store = undefined
) {
  const app = await init(
    appElement,
    api,
    router,
    store
  )

  app.component('c-accordion', CAccordion)
  app.component('c-alert', CAlert)
  app.component('c-avatar', CAvatar)
  app.component('c-axis', CAxis)
  app.component('c-button', CButton)
  app.component('c-button-icon', CButtonIcon)
  app.component('c-button-select', CButtonSelect)
  app.component('c-checkbox', CCheckbox)
  app.component('c-chip', CChip)
  app.component('c-drop', CDrop)
  app.component('c-input', CInput)
  app.component('c-line-data', CLineData)
  app.component('c-select', CSelect)
  app.component('c-switch', CSwitch)

  return app
}

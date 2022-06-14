import { createRouter, createWebHistory } from 'vue-router'
import AccordionView from '@/views/AccordionView'
import AlertView from '@/views/AlertView'
import AxisView from '@/views/AxisView'
import ButtonView from '@/views/ButtonView'
import ButtonSelectView from '@/views/ButtonSelectView'
import CheckboxView from '@/views/CheckboxView'
import ChipView from '@/views/ChipView'
import DropView from '@/views/DropView'
import HomeView from '../views/HomeView.vue'
import InputView from '@/views/InputView'
import LineDataView from '@/views/LineDataView'
import LineDataFormView from '@/views/LineDataFormView'
import LineDataSwitchView from '@/views/LineDataSwitchView'
import PlateView from '@/views/PlateView'
import SelectView from '@/views/SelectView'
import SwitchView from '@/views/SwitchView'
import TextareaView from '@/views/TextareaView'
import LineFormView from '@/views/LineFormView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: AccordionView
  },
  {
    path: '/alert',
    name: 'alert',
    component: AlertView
  },
  {
    path: '/axis',
    name: 'axis',
    component: AxisView
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView
  },
  {
    path: '/button-select',
    name: 'button-select',
    component: ButtonSelectView
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: CheckboxView
  },
  {
    path: '/chip',
    name: 'chip',
    component: ChipView
  },
  {
    path: '/drop',
    name: 'drop',
    component: DropView
  },
  {
    path: '/input',
    name: 'input',
    component: InputView
  },
  {
    path: '/line-data',
    name: 'line-data',
    component: LineDataView
  },
  {
    path: '/line-data-form',
    name: 'line-data-form',
    component: LineDataFormView
  },
  {
    path: '/line-data-switch',
    name: 'line-data-switch',
    component: LineDataSwitchView
  },
  {
    path: '/line-form',
    name: 'line-form',
    component: LineFormView
  },
  {
    path: '/plate',
    name: 'plate',
    component: PlateView
  },
  {
    path: '/select',
    name: 'select',
    component: SelectView
  },
  {
    path: '/switch',
    name: 'switch',
    component: SwitchView
  },
  {
    path: '/textarea',
    name: 'textarea',
    component: TextareaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

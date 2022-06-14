<template>
  <c-interactive-demo
    :options="options"
    name="c-button-select"
  >
    <template v-slot:default="{ values }">
      <c-button-select :list="list.list" v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CButtonSelect from '../../components/CButtonSelect'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { icon, list } from '@/media/values'
import { palette } from '@/media/options'

export default {
  name: 'ButtonSelectView',
  components: {
    CButtonSelect,
    CInteractiveDemo
  },
  setup () {
    return {
      list,
      options: {
        Status: {
          readonly: { type: 'checkbox' },
          disabled: { type: 'checkbox' }
        },
        Values: {
          value: list,
          text: {
            type: 'input',
            default: 'Interactive demo'
          }
        },
        Input: {
          type: {
            type: 'select',
            list: [
              { value: 'select' },
              { value: 'month' },
              { value: 'week' }
            ]
          }
        },
        Button: {
          palette,
          icon
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

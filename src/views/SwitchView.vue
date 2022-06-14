<template>
  <c-interactive-demo
    :options="options"
    name="c-switch"
  >
    <template v-slot:default="{ values }">
      <c-switch v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CSwitch from '../../components/CSwitch'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { palette } from '@/media/options'

export default {
  name: 'SwitchView',
  components: {
    CInteractiveDemo,
    CSwitch
  },
  setup () {
    return {
      options: {
        Status: {
          value: { type: 'checkbox' },
          disabled: { type: 'checkbox' }
        },
        Values: {
          name: {
            type: 'input',
            default: 'demo'
          },
          text: {
            type: 'input',
            default: 'Interactive demo'
          },
          helperMessage: { type: 'input' },
          validationMessage: { type: 'input' }
        },
        Input: {
          required: { type: 'checkbox' }
        },
        Options: {
          palette,
          right: { type: 'checkbox' }
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

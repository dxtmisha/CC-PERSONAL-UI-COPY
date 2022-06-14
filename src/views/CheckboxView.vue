<template>
  <c-interactive-demo
    :options="options"
    name="c-checkbox"
  >
    <template v-slot:default="{ values }">
      <c-checkbox v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CCheckbox from '../../components/CCheckbox'
import { palette } from '@/media/options'

export default {
  name: 'CheckboxView',
  components: {
    CCheckbox,
    CInteractiveDemo
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

<style lang="scss"></style>

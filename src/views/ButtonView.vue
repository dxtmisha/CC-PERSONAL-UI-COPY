<template>
  <c-interactive-demo
    :options="options"
    name="c-button"
  >
    <template v-slot:default="{ values }">
      <c-button v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CButton from '../../components/CButton'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { palette, tag } from '@/media/options'
import { icon } from '@/media/values'

export default {
  name: 'ButtonView',
  components: {
    CButton,
    CInteractiveDemo
  },
  setup () {
    return {
      options: {
        Status: {
          disabled: { type: 'checkbox' },
          progress: { type: 'checkbox' }
        },
        Values: {
          text: {
            type: 'input',
            default: 'Interactive demo'
          },
          to: { type: 'input' }
        },
        Options: {
          palette,
          tag,
          appearance: {
            type: 'select',
            list: [
              { value: 'text' },
              { value: 'outlined' },
              { value: 'filled' }
            ]
          },
          size: {
            type: 'select',
            list: [
              { value: 'small' },
              { value: 'medium' },
              { value: 'large' }
            ]
          },
          icon
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

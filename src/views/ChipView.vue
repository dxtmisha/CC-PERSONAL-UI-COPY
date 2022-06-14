<template>
  <c-interactive-demo
    :options="options"
    name="c-chip"
  >
    <template v-slot:default="{ values }">
      <c-chip v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CChip from '../../components/CChip'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { palette, tag } from '@/media/options'
import { icon } from '@/media/values'

export default {
  name: 'ButtonView',
  components: {
    CChip,
    CInteractiveDemo
  },
  setup () {
    return {
      options: {
        Status: {
          disabled: { type: 'checkbox' }
        },
        Values: {
          text: {
            type: 'input',
            default: 'Interactive demo'
          }
        },
        Options: {
          palette,
          tag,
          icon
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

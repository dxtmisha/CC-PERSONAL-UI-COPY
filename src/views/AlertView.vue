<template>
  <c-interactive-demo
    :options="options"
    name="c-alert"
  >
    <template v-slot:default="{ values }">
      <c-alert class="w-full" v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CAlert from '../../components/CAlert'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { palette } from '@/media/options'
import { icon } from '@/media/values'

export default {
  name: 'AlertView',
  components: {
    CAlert,
    CInteractiveDemo
  },
  setup () {
    return {
      options: {
        Status: {
          hide: { type: 'checkbox' }
        },
        Values: {
          text: {
            type: 'input',
            default: 'Interactive demo'
          },
          description: { type: 'input' }
        },
        Options: {
          cancel: { type: 'checkbox' },
          palette,
          icon
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

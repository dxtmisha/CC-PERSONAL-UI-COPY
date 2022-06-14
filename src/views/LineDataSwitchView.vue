<template>
  <c-interactive-demo
    :options="options"
    name="c-line-data-switch"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-line-data-switch v-bind="values"/>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CLineDataSwitch from '../../components/CLineDataSwitch'
import { ajax } from '@/media/values'

export default {
  name: 'LineDataSwitchView',
  components: {
    CInteractiveDemo,
    CLineDataSwitch
  },
  setup () {
    return {
      options: {
        Values: {
          ajax,
          value: { type: 'checkbox' }
        },
        Options: {
          textTitle: {
            type: 'input',
            default: 'Interactive demo'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

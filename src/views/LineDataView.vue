<template>
  <c-interactive-demo
    :options="options"
    name="c-line-data"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-line-data>
          <template v-slot:title>{{ values.title }}</template>
          <template v-slot:tool>
            <c-switch/>
          </template>
        </c-line-data>
        <c-line-data class="border-t">
          <template v-slot:data>{{ values.data }}</template>
          <template v-slot:tool>
            <c-button-icon icon="edit"/>
          </template>
        </c-line-data>
        <c-line-data class="border-t">
          <template v-slot:title>{{ values.title }}</template>
          <template v-slot:data>{{ values.data }}</template>
        </c-line-data>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CSwitch from '../../components/CSwitch'
import CLineData from '../../components/CLineData'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CButtonIcon from '../../components/CButtonIcon'

export default {
  name: 'DataLineView',
  components: {
    CButtonIcon,
    CInteractiveDemo,
    CLineData,
    CSwitch
  },
  setup () {
    return {
      options: {
        Values: {
          title: {
            type: 'input',
            default: 'Title'
          },
          data: {
            type: 'input',
            default: 'Interactive demo'
          }
        },
        Options: {
          classList: { type: 'input' }
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

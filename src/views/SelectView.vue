<template>
  <c-interactive-demo
    :options="options"
    name="c-select"
  >
    <template v-slot:default="{ values }">
      <c-select :list="list.list" v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CSelect from '../../components/CSelect'
import { list } from '@/media/values'

export default {
  name: 'SelectView',
  components: {
    CInteractiveDemo,
    CSelect
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
          value: { type: 'input' },
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
          type: {
            type: 'select',
            list: [
              { value: 'select' },
              { value: 'month' },
              { value: 'week' }
            ]
          },
          maxlength: { type: 'number' },
          multiple: { type: 'checkbox' },
          required: { type: 'checkbox' }
        },
        Options: {
          adaptive: {
            type: 'select',
            list: [
              { value: 'basic' },
              { value: 'block' }
            ]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

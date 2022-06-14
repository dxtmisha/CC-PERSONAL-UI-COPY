<template>
  <c-interactive-demo
    :options="options"
    name="c-textarea"
  >
    <template v-slot:default="{ values }">
      <c-textarea v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CTextarea from '../../components/CTextarea'

export default {
  name: 'TextareaView',
  components: {
    CInteractiveDemo,
    CTextarea
  },
  setup () {
    return {
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
          maxlength: { type: 'number' },
          placeholder: { type: 'input' },
          required: { type: 'checkbox' }
        },
        Options: {
          counter: { type: 'checkbox' }
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

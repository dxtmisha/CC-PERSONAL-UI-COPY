<template>
  <c-interactive-demo
    :options="options"
    name="c-input"
  >
    <template v-slot:default="{ values }">
      <c-input v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInput from '../../components/CInput'
import CInteractiveDemo from '@/components/CInteractiveDemo'

export default {
  name: 'InputView',
  components: {
    CInput,
    CInteractiveDemo
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
          prefix: { type: 'input' },
          suffix: { type: 'input' },
          helperMessage: { type: 'input' },
          validationMessage: { type: 'input' }
        },
        Input: {
          type: {
            type: 'select',
            list: [
              { value: 'date' },
              { value: 'datetime' },
              { value: 'email' },
              { value: 'month' },
              { value: 'number' },
              { value: 'password' },
              { value: 'search' },
              { value: 'tel' },
              { value: 'text' },
              { value: 'time' }
            ]
          },
          min: { type: 'number' },
          max: { type: 'number' },
          minlength: { type: 'number' },
          maxlength: { type: 'number' },
          placeholder: { type: 'input' },
          required: { type: 'checkbox' }
        },
        Options: {
          adaptive: {
            type: 'select',
            list: [
              { value: 'basic' },
              { value: 'block' }
            ]
          },
          counter: { type: 'checkbox' }
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

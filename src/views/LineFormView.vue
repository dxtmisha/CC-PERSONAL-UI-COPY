<template>
  <c-interactive-demo
    :options="options"
    name="c-line-data"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-line-form
          :fields="fields"
          :values="valuesInput"
          v-bind="values"
          @on-submit="onSubmit"
        />
        <div v-if="event" class="pt-8">
          <div class="font:body2">Event:</div>
          <div>{{ event }}</div>
        </div>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CLineForm from '../../components/CLineForm'
import { ajax } from '@/media/values'
import { ref } from 'vue'

export default {
  name: 'LineFormView',
  components: {
    CInteractiveDemo,
    CLineForm
  },
  setup () {
    const event = ref(undefined)

    return {
      fields: [
        {
          field: 'select',
          text: 'Select 1',
          name: 'select1',
          list: [
            { value: 'value-1' },
            { value: 'value-2' },
            { value: 'value-3' },
            { value: 'value-4' },
            { value: 'value-5' }
          ],
          required: true
        },
        {
          field: 'select',
          text: 'Select 2',
          name: 'select2',
          list: [
            { value: 'value-1' },
            { value: 'value-2' },
            { value: 'value-3' },
            { value: 'value-4' },
            { value: 'value-5' }
          ]
        },
        {
          field: 'input',
          text: 'Input 1',
          name: 'input1'
        },
        {
          field: 'input',
          text: 'Input 2',
          name: 'input2',
          default: 'input-default',
          required: true
        }
      ],
      valuesInput: {
        select2: 'value-3',
        input1: 'Interactive demo'
      },
      event,
      onSubmit (values) {
        event.value = values
      },
      options: {
        Values: {
          ajax,
          textSubmit: {
            type: 'input',
            default: 'Submit'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

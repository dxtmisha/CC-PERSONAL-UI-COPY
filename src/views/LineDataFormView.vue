<template>
  <c-interactive-demo
    :options="options"
    name="c-line-data-form"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-line-data-form :fields="fields" v-bind="values"/>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CLineDataForm from '../../components/CLineDataForm'
import { ajax, list } from '@/media/values'

export default {
  name: 'LineDataFormView',
  components: {
    CInteractiveDemo,
    CLineDataForm
  },
  setup () {
    return {
      fields: [
        {
          field: 'input',
          text: 'Input 1',
          name: 'input1',
          required: true
        },
        {
          field: 'input',
          text: 'Input 2',
          name: 'input2'
        },
        {
          field: 'select',
          text: 'Select 2',
          name: 'select1',
          list: list.list
        }
      ],
      options: {
        Values: {
          ajax,
          index: {
            type: 'select',
            list: [
              { value: 'input1' },
              { value: 'input2' },
              { value: 'select1' }
            ],
            default: 'input1'
          },
          value: {
            type: 'input',
            default: 'demo'
          }
        },
        Options: {
          textTitle: {
            type: 'input',
            default: 'Interactive demo'
          },
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

<style lang="scss"/>

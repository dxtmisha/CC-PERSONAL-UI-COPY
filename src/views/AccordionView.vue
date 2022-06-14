<template>
  <c-interactive-demo
    :options="options"
    name="c-accordion"
  >
    <template v-slot:default="{ values }">
      <div class="w-full max-w-full">
        <c-accordion v-bind="values">
          <template v-slot:title>The patented complex is composed ...</template>
          <template v-slot:body>
            <c-line-data>
              <template v-slot:title>Title ...</template>
              <template v-slot:data>Green coffee bean extract ...</template>
            </c-line-data>
            <c-line-data>
              <template v-slot:title>Title ...</template>
              <template v-slot:data>Green coffee bean extract ...</template>
            </c-line-data>
            <c-line-data>
              <template v-slot:title>Title ...</template>
              <template v-slot:data>Green coffee bean extract ...</template>
            </c-line-data>
          </template>
        </c-accordion>
        <c-accordion v-bind="values" class="border-t">
          <template v-slot:title>The patented complex is composed ...</template>
          <template v-slot:body>
            <div class="px-4 lg:px-6 py-4">
              Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate
              blood glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite,
              reducing hunger.
            </div>
          </template>
        </c-accordion>
        <c-accordion v-bind="values" class="border-t">
          <template v-slot:title>The patented complex is composed ...</template>
          <template v-slot:body>
            <div class="px-4 lg:px-6 py-4">
              Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate
              blood glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite,
              reducing hunger.
            </div>
          </template>
        </c-accordion>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import { icon } from '@/media/values'
import CInteractiveDemo from '@/components/CInteractiveDemo'

export default {
  name: 'AccordionView',
  components: { CInteractiveDemo },
  setup () {
    return {
      options: {
        Values: {
          textTitle: {
            type: 'input',
            default: 'Interactive demo'
          },
          textClose: { type: 'input' }
        },
        Options: {
          icon
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>

<template>
  <c-accordion
    :text-close="translation['SHOP_PRODUCT_FAVORITE_CANCEL']"
    :text-title="translation[textTitle]"
    icon="@edit"
  >
    <template v-slot:title>
      <template v-if="'title' in $slots">
        <slot name="title"/>
      </template>
      <template v-else>
        {{ translation[textTitle] }}
      </template>
    </template>
    <template v-slot:data>{{ dataValue }}</template>
    <template v-slot:body="{ onClose }">
      <c-line-data v-if="info" :title="translation[textTitle]">
        <template v-slot:data>{{ dataValue }}</template>
      </c-line-data>
      <c-line-form
        :ajax="ajax"
        :check-validity="checkValidity"
        :fields="fields"
        :text-submit="translation[textSubmit]"
        :values="values"
        @on-submit="onSubmit($event, onClose)"
      />
    </template>
  </c-accordion>
</template>

<script>
import CAccordion from './CAccordion'
import CLineData from './CLineData'
import CLineForm from './CLineForm'
import Translation from 'dcode/classes/Translation'
import isSelected from 'dcode/functions/isSelected'
import useWatch from 'dcode/uses/useWatch'
import { computed, toRefs } from 'vue'

export default {
  name: 'CLineDataForm',
  components: {
    CAccordion,
    CLineData,
    CLineForm
  },
  props: {
    ajax: String,
    checkValidity: Function,
    fields: [Array, Object],
    index: String,
    info: {
      type: Boolean,
      default: true
    },
    textSubmit: String,
    textTitle: String,
    value: [Array, String],
    values: [Array, Object]
  },
  setup (props) {
    const { value } = toRefs(props)

    const propValue = useWatch(value, data => {
      data.value = value.value
    }, ['go'])

    const translation = Translation.getByList([
      'SHOP_PRODUCT_FAVORITE_CANCEL',
      props.textTitle,
      props.textSubmit
    ])

    return {
      propValue,
      dataValue: computed(() => {
        const list = props.fields.find(item => item.name === props.index)?.list

        if (list) {
          if (Array.isArray(propValue.value)) {
            const text = []

            list.forEach(item => {
              if (isSelected(item.value, propValue.value)) {
                text.push(item.text)
              }
            })

            return text.join(', ')
          } else {
            return list.find(item => propValue.value === item.value)?.text
          }
        } else {
          return Array.isArray(propValue.value) ? propValue.value.join(', ') : propValue.value
        }
      }),
      onSubmit (event, close) {
        console.log('event', event)
        if (!event.error) {
          if (props.index) {
            propValue.value = event.values?.[props.index]
          }

          close()
        }
      },

      translation
    }
  }
}
</script>

<style lang="scss">

</style>

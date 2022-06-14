<template>
  <c-line-data :title="title">
    <template v-slot:tool>
      <c-switch :name="name" :value="propValue" @on-input="onInput"/>
    </template>
  </c-line-data>
</template>

<script>
import CLineData from './CLineData'
import CSwitch from './CSwitch'
import API from '../classes/API'
import Translation from 'dcode/classes/Translation'
import useWatch from 'dcode/uses/useWatch'
import { computed, toRefs } from 'vue'

export default {
  name: 'CLineDataSwitch',
  components: {
    CLineData,
    CSwitch
  },
  props: {
    ajax: String,
    textTitle: String,
    value: {
      type: Boolean,
      default: false
    },
    name: String,
    valueText: Boolean
  },
  setup (props) {
    const { value } = toRefs(props)

    const propValue = useWatch(value, data => {
      data.value = value.value
    }, ['go'])

    const translation = Translation.getByList([
      'included',
      'turned-off'
    ])

    return {
      propValue,
      async onInput (event) {
        propValue.value = event.value

        if (props.ajax) {
          const response = await API.fetch({
            path: props.ajax,
            request: {
              [props.name]: event.value
            }
          })

          if (response.status === 'error') {
            requestAnimationFrame(() => {
              propValue.value = props.value
            })
          }
        }
      },
      translation,
      title: computed(() => {
        return props.valueText
          ? `${props.textTitle}: ${translation[propValue.value ? 'included' : 'turned-off']}`
          : props.textTitle
      })
    }
  }
}
</script>

<style lang="scss"/>

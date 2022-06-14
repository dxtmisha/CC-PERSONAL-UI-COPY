<template>
  <div class="c-line-form">
    <c-line-data
      v-for="{text, type, name, defaultValue, data} in propField"
      :key="name"
    >
      <template v-slot:title>
        <div class="c-line-form__title min-h-full">{{ text }}</div>
      </template>
      <template v-slot:html>
        <div class="flex items-center h-full py-1">
          <c-select
            v-if="type === 'select'"
            :ref="(el) => { if (el) inputs.push({ name, data, el }) }"
            :value="values?.[name] || defaultValue"
            v-bind="data"
          />
          <c-textarea
            v-else-if="type === 'textarea'"
            :ref="(el) => { if (el) inputs.push({ name, data, el }) }"
            :value="values?.[name] || defaultValue"
            v-bind="data"
          />
          <c-input
            v-else
            :ref="(el) => { if (el) inputs.push({ name, data, el }) }"
            :value="values?.[name] || defaultValue"
            v-bind="data"
          />
        </div>
      </template>
    </c-line-data>
    <c-line-data title=" ">
      <template v-slot:html>
        <div class="py-2">
          <c-button
            :progress="progress"
            :text="textSubmit || translation.Submit"
            @click="onSubmit"
          />
          <div v-if="message" class="pt-4">
            <c-alert v-bind="bindAlert"/>
          </div>
        </div>
      </template>
    </c-line-data>
  </div>
</template>

<script>
import CAlert from './CAlert'
import CButton from './CButton'
import CInput from './CInput'
import CLineData from './CLineData'
import CSelect from './CSelect'
import CTextarea from './CTextarea'
import API from '../classes/API'
import Translation from 'dcode/classes/Translation'
import forEach from 'dcode/functions/forEach'
import { computed, onUpdated, ref } from 'vue'

export default {
  name: 'CLineForm',
  components: {
    CAlert,
    CButton,
    CInput,
    CLineData,
    CSelect,
    CTextarea
  },
  emits: ['on-submit'],
  props: {
    // Values
    ajax: String,
    fields: [Array, Object],
    values: Object,
    textSubmit: String,
    checkValidity: Function
  },
  setup (props, context) {
    const inputs = ref([])

    const error = ref(undefined)
    const message = ref(undefined)
    const progress = ref(undefined)

    const translation = Translation.getByList([
      'Submit'
    ])

    onUpdated(() => {
      inputs.value = []
    })

    return {
      inputs,
      propField: computed(() => {
        const fields = []

        forEach(props.fields, (field, key) => {
          const data = {}
          let name = key
          let text, type, defaultValue

          forEach(field, (value, index) => {
            switch (index) {
              case 'text':
                text = value
                break
              case 'field':
                type = value
                break
              case 'name':
                name = value
                break
              case 'default':
                defaultValue = value
                break
              default:
                data[index] = value
            }
          })

          fields.push({
            text,
            type,
            name,
            defaultValue,
            required: field?.required,
            data
          })
        })

        return fields
      }),

      error,
      message,
      progress,
      async onSubmit () {
        const values = {}
        let check = true

        error.value = false
        message.value = undefined

        inputs.value.forEach(({
          el,
          name
        }) => {
          el.input?.setChange()
          check = el.input.checkValidity() && check
          values[name] = el.input.propValue
        })

        if (
          check &&
          props.checkValidity
        ) {
          const validity = props.checkValidity(values)

          if (validity?.status === 'error') {
            check = false
            error.value = true
            message.value = validity?.message
          }
        }

        if (check) {
          if (props.ajax) {
            progress.value = true

            const response = await API.fetch({
              path: props.ajax,
              request: values
            })

            if (response.message) {
              error.value = response.status === 'error'
              message.value = response.message
            }

            progress.value = false
          }

          context.emit('on-submit', {
            error: error.value,
            message: message.value,
            values
          })
        }
      },
      bindAlert: computed(() => {
        return {
          icon: error.value ? 'error' : 'check_circle',
          palette: error.value ? 'error' : 'success',
          description: message.value
        }
      }),

      translation
    }
  }
}
</script>

<style lang="scss">
@import "~dcode/styles/media";

.c-line-form {
  &__required {
    --basic-text: var(--error-type1);
  }

  .c-button {
    width: 100%;
  }

  .d-carcass-field {
    &__label {
      --basic-text-opacity: 0;
    }
  }

  @include mediaMinWidth() {
    .c-button {
      width: auto;
    }
  }

  @include mediaMinWidth(large) {
    &__title {
      min-height: 56px;
      padding: 18px 0;
    }

    .c-line-data .grow.items-center {
      align-items: stretch;
    }
  }

  @include mediaMaxWidth(large) {
    .d-carcass-field {
      --cf-width: 100%;
    }
  }
}
</style>

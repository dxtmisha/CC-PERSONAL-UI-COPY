<template>
  <d-input
    ref="input"
    v-bind="$props"
  />
</template>

<script>
import DInput from 'dcode/components/DInput'
import { ref } from 'vue'

export default {
  name: 'CInput',
  components: {
    DInput
  },
  props: [
    // Values
    'value',
    'name',
    'text',
    'prefix',
    'suffix',
    'helperMessage',
    'validationMessage',

    // Input
    'min',
    'max',
    'minlength',
    'maxlength',
    'pattern',
    'placeholder',
    'required',

    // Status
    'readonly',
    'disabled',

    // Options
    'type',
    'adaptive',
    'counter',

    // Icon
    'icon',
    'iconTrailing'
  ],
  setup () {
    return {
      input: ref(undefined)
    }
  }
}
</script>

<style lang="scss"/>

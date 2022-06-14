<template>
  <d-textarea
    ref="input"
    adaptive="block"
    v-bind="$props"
  />
</template>

<script>
import DTextarea from 'dcode/components/DTextarea'
import { ref } from 'vue'

export default {
  name: 'CTextarea',
  components: {
    DTextarea
  },
  props: [
    // Values
    'value',
    'name',
    'text',
    'helperMessage',
    'validationMessage',

    // Input
    'maxlength',
    'placeholder',
    'required',

    // Status
    'readonly',
    'disabled',

    // Options
    'counter'
  ],
  setup () {
    return {
      input: ref(undefined)
    }
  }
}
</script>

<style lang="scss"/>

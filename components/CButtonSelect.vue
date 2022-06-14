<template>
  <d-button-select
    v-bind="$props"
    class="c-button-select"
    @on-input="onInput"
  />
</template>

<script>
import DButtonSelect from 'dcode/components/DButtonSelect'

export default {
  name: 'CButtonSelect',
  components: {
    DButtonSelect
  },
  props: [
    // Values
    'value',
    'name',
    'text',
    'list',
    'keyText',
    'keyValue',

    // Input
    'type',
    'maxlength',
    'multiple',

    // Status
    'readonly',
    'disabled',

    // Button
    'palette',
    'tag',
    'icon'
  ],
  emits: ['on-input'],
  methods: {
    onInput (event) {
      this.$emit('on-input', event)
    }
  }
}
</script>

<style lang="scss"/>

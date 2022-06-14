<template>
  <d-checkbox
    class="c-checkbox"
    v-bind="$props"
  />
</template>

<script>
import DCheckbox from 'dcode/components/DCheckbox'

export default {
  name: 'CCheckbox',
  components: {
    DCheckbox
  },
  props: [
    // Values
    'value',
    'name',
    'text',
    'helperMessage',
    'validationMessage',

    // Input
    'required',

    // Status
    'disabled',

    // Options
    'palette',
    'right'
  ]
}
</script>

<style lang="scss">
.c-checkbox {
  /* Расстояния между текст и Checkbox */
  --cb-gap: 8px;
}
</style>

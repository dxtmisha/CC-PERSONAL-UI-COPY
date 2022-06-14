<template>
  <d-checkbox
    class="c-switch"
    type="switch"
    v-bind="$props"
  />
</template>

<script>
import DCheckbox from 'dcode/components/DCheckbox'

export default {
  name: 'CSwitch',
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
.c-switch {
  /* Расстояния между текст и Checkbox */
  --cb-gap: 8px;

  /* Размер круг внутри */
  --cb__ic-size: 16px;

  /* Высота switch */
  --cb__sw-height: 20px;

  /* Длина switch */
  --cb__sw-width: 40px;

  .d-checkbox__input:checked ~ .d-checkbox__switch {
    background-color: rgba(var(--_cb-palette-type1), var(--opacity-primary-high));
  }

  .d-checkbox__input:checked ~ .d-checkbox__switch .d-checkbox__circle::after {
    background-color: rgba(var(--text-type2), var(--opacity-primary-high));
  }
}
</style>

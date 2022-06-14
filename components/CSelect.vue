<template>
  <d-select
    ref="input"
    class="c-select"
    v-bind="$props"
  />
</template>

<script>
import DSelect from 'dcode/components/DSelect'
import { ref } from 'vue'

export default {
  name: 'CSelect',
  components: {
    DSelect
  },
  props: [
    // Values
    'value',
    'name',
    'text',
    'helperMessage',
    'validationMessage',
    'list',
    'keyText',
    'keyValue',

    // Input
    'type',
    'maxlength',
    'multiple',
    'required',

    // Status
    'readonly',
    'disabled',

    // Options
    'adaptive',

    // Icon
    'icon'
  ],
  setup () {
    return {
      input: ref(undefined)
    }
  }
}
</script>

<style lang="scss">
.c-select {
  .d-carcass-field__icon.cf-trailing {
    --basic-text-opacity: var(--opacity-surface-high);
  }

  .d-carcass-field__input.option-multiple {
    /* multiple: Растояния между текст и icon */
    --bt-gap: 4px;

    /* multiple: Размер icon */
    --ic-size: 20px;

    /* multiple: Растояния между значения */
    --sv-margin: 4px;

    @apply py-2;

    .bt-trailing {
      --basic-text-opacity: var(--opacity-surface-high);
    }
  }
}
</style>

<template>
  <d-button
    appearance="chip-color"
    class="c-chip"
    readonly
    shape="basic"
    v-bind="$props"
  />
</template>

<script>
import DButton from 'dcode/components/DButton'

export default {
  name: 'CChip',
  components: {
    DButton
  },
  props: [
    // Values
    'text',

    // Status
    'selected',
    'disabled',

    // Options
    'palette',
    'tag',

    // Icon
    'icon'
  ]
}
</script>

<style lang="scss">
.c-chip {
  /* padding с лева и справа */
  --bt--ch-padding: 16px;
}
</style>

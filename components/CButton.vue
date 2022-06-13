<template>
  <d-button
    v-bind="$props"
    :appearance="propAppearance"
    class="c-button"
  >
    <template v-if="'default' in $slots" v-slot:default>
      <slot/>
    </template>
  </d-button>
</template>

<script>
import DButton from 'dcode/components/DButton'
import { computed } from 'vue'

export default {
  name: 'CButton',
  components: {
    DButton
  },
  props: [
    // Values
    'text',
    'to',

    // Status
    'disabled',
    'progress',

    // Options
    'palette',
    'tag',
    'appearance',
    'size',
    'adaptive',
    'ellipsis',

    // Icon
    'icon',
    'iconTrailing'
  ],
  setup (props) {
    return {
      propAppearance: computed(() => {
        switch (props.appearance) {
          case 'outlined':
            return 'outlined-color'
          case 'text':
            return 'text-color'
          default:
            return props.appearance
        }
      })
    }
  }
}
</script>

<style lang="scss">
.c-button {
  &.appearance-text-color {
    @apply font-medium;
  }
}
</style>

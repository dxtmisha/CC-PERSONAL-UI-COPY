<template>
  <div :class="classRounded" class="c-plate border">
    <div
      v-if="title"
      class="c-plate__title flex items-center px-4 lg:px-6 py-2 border-b"
      v-html="title"
    />
    <div :class="classList">
      <slot/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CPlate',
  props: {
    // Values
    title: String,

    // Options
    rounded: {
      type: String,
      default: 'lg'
    },
    background: {
      type: Boolean,
      default: true
    },
    padding: Boolean,
    borderDark: Boolean
  },
  setup (props) {
    return {
      classRounded: computed(() => {
        return {
          'option-background': props.background,
          'option-border-dark': props.borderDark,
          'rounded-md': props.rounded === 'md',
          'rounded-lg': props.rounded === 'lg',
          'rounded-xl': props.rounded === 'xl'
        }
      }),
      classList: computed(() => {
        return {
          'px-4 py-6': props.padding
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "~dcode/styles/font";
@import "~dcode/styles/media";

.c-plate {
  &.option-background {
    background-color: var(--background-type1);
  }

  &.option-border-dark {
    border-color: rgba(var(--background-outline), var(--opacity-scrim));
  }

  &__title {
    @include font('subtitle1');
    min-height: 52px;
  }

  @include mediaMinWidth(large) {
    &__title {
      @include font('headline6');
      min-height: 84px;
    }
  }
}
</style>

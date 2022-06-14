<template>
  <div class="c-plate border rounded-lg">
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
    padding: Boolean
  },
  setup (props) {
    return {
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
  background-color: var(--background-type1);

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

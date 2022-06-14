<template>
  <div class="c-line-data flex items-center px-4 py-2 lg:px-6">
    <div class="grow shrink grid grid-cols-12 gap-1 lg:gap-2 items-center">
      <div v-if="'title' in $slots" :class="classTitle" class="col-span-12 opacity:surface-medium">
        <slot name="title"/>
      </div>
      <div v-else-if="title" :class="classTitle" class="col-span-12 opacity:surface-medium" v-html="title"/>
      <div v-if="isData" class="col-span-12 lg:col-span-8">
        <div v-if="'data' in $slots" class="font-medium opacity:surface-medium">
          <slot name="data"/>
        </div>
        <slot v-else name="html"/>
      </div>
    </div>
    <div
      :class="'tool' in $slots ? 'flex' : 'hidden lg:flex'"
      class="c-line-data__tool flex items-center justify-center pl-4"
    >
      <slot name="tool"/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CLineData',
  props: {
    title: String
  },
  setup (props, context) {
    const isData = computed(() => 'data' in context.slots || 'html' in context.slots)

    return {
      isData,
      classTitle: computed(() => {
        return {
          'hidden md:block': props.title === ' ',
          'lg:col-span-4': isData.value
        }
      })
    }
  }
}
</script>

<style lang="scss">
.c-line-data {
  min-height: 72px;

  &__tool {
    min-width: 56px;
  }
}
</style>

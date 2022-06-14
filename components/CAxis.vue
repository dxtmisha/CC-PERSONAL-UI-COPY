<template>
  <d-motion-axis ref="axis" :selected="selected">
    <template
      v-for="(slot, name) in $slots"
      :key="name"
      v-slot:[name]
    >
      <slot :name="name"/>
    </template>
  </d-motion-axis>
</template>

<script>
import DMotionAxis from 'dcode/components/DMotionAxis'
import { ref } from 'vue'

export default {
  name: 'CAxis',
  components: {
    DMotionAxis
  },
  props: [
    'selected'
  ],
  setup () {
    const axis = ref(undefined)
    return {
      axis,
      toTop: selected => axis.value?.toTop(selected),
      toRight: selected => axis.value?.toRight(selected),
      toBottom: selected => axis.value?.toBottom(selected),
      toLeft: selected => axis.value?.toLeft(selected),
      toDown: selected => axis.value?.toDown(selected),
      toUp: selected => axis.value?.toUp(selected)
    }
  }
}
</script>

<style lang="scss"></style>

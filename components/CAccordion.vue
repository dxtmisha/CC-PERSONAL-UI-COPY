<template>
  <d-motion-transform
    :open="bindOpen"
    class="c-accordion"
    @on-close="onClose"
  >
    <template v-slot:head>
      <c-line-data>
        <template v-if="'title' in $slots" v-slot:title>
          <slot :on-open="onOpen" name="title"/>
        </template>
        <template v-if="'data' in $slots" v-slot:data>
          <slot :on-open="onOpen" name="data"/>
        </template>
        <template v-if="'head' in $slots" v-slot:html>
          <slot
            :class="classList"
            :on-open="onOpen"
            name="head"
          />
        </template>
        <template v-if="icon" v-slot:tool>
          <c-button-icon
            :icon="icon"
            class="c-accordion__button"
            palette="tertiary"
            @click="onOpen"
          />
        </template>
      </c-line-data>
    </template>
    <template v-slot:body>
      <div :class="classList" class="relative">
        <div class="c-accordion__top flex md:hidden items-center px-4 lg:px-6 py-2">
          <c-button-icon
            :icon="iconClose"
            class="c-accordion__button"
            palette="tertiary"
            @click="onClose"
          />
          <div class="pl-2 font:subtitle1" v-html="textTitle"/>
        </div>
        <div class="c-accordion__top hidden md:flex absolute top-0 right-0 items-center pr-6">
          <span class="font:subtitle1 text-primary hover:underline cursor-pointer" @click="onClose">
            {{ textClose || translation.Close }}
          </span>
        </div>
        <div>
          <slot name="body" :on-close="onClose"/>
        </div>
      </div>
    </template>
  </d-motion-transform>
</template>

<script>
import CButtonIcon from './CButtonIcon'
import CLineData from './CLineData'
import DMotionTransform from 'dcode/components/DMotionTransform'
import Translation from 'dcode/classes/Translation'
import { computed, ref } from 'vue'

export default {
  name: 'CAccordion',
  components: {
    CButtonIcon,
    CLineData,
    DMotionTransform
  },
  props: {
    // Values
    textTitle: String,
    textClose: String,

    // Status
    open: Boolean,

    // Options
    classList: [Object, String],

    // Icons
    icon: {
      type: String,
      default: 'expand_more'
    },
    iconClose: {
      type: String,
      default: 'arrow_back'
    }
  },
  setup (props) {
    const translation = Translation.getByList([
      'Close'
    ])

    const propsOpen = ref(false)
    return {
      bindOpen: computed(() => propsOpen.value || props.open),
      onOpen () {
        propsOpen.value = !propsOpen.value
      },
      onClose () {
        propsOpen.value = false
      },

      translation
    }
  }
}
</script>

<style lang="scss">
.c-accordion {
  &__button {
    --basic-text: 51, 63, 72;
  }

  &__top {
    min-height: 72px;
  }
}
</style>

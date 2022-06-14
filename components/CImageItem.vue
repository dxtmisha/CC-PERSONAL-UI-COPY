<template>
  <d-icon
    :class="classList"
    :icon="propImage"
    class="c-image-item"
  />
</template>

<script>
import DIcon from 'dcode/components/DIcon'
import { computed } from 'vue'
import { validator } from 'dcode/uses/useDefault'

export default {
  name: 'CImageItem',
  components: {
    DIcon
  },
  props: {
    image: String,

    // Options
    size: {
      type: String,
      validator: validator([
        'small',
        'medium',
        'large'
      ])
    }
  },
  setup (props) {
    const images = {
      'image-envelope': require('../assets/images/image-envelope.svg')
    }

    const classList = computed(() => {
      return {
        [`size-${props.size}`]: props.size
      }
    })

    return {
      propImage: computed(() => {
        return {
          zoom: 'contain',
          file: images?.[props.image]
        }
      }),
      classList
    }
  }
}
</script>

<style lang="scss">
.c-image-item {
  --ic-radius: 0px;
  --ic-size: 128px;

  &.size- {
    &medium {
      --ic-size: 258px;
    }

    &large {
      --ic-size: 512px;
    }
  }
}
</style>

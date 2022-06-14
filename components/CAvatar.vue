<template>
  <div class="c-avatar w-28 h-28 bg-basic/overlay rounded-full" :style="styleList"/>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CAvatar',
  props: {
    avatar: String
  },
  setup (props) {
    return {
      styleList: computed(() => {
        return {
          'background-image': props.avatar ? `url(${props.avatar})` : null
        }
      })
    }
  }
}
</script>

<style lang="scss"/>

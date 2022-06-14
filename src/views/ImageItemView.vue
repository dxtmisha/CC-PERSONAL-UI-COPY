<template>
  <c-interactive-demo
    :options="options"
    name="c-image-item"
  >
    <template v-slot:default="{ values }">
      <c-image-item v-bind="values"/>
    </template>
  </c-interactive-demo>
</template>

<script>
import CImageItem from '../../components/CImageItem'
import CInteractiveDemo from '@/components/CInteractiveDemo'

export default {
  name: 'ImageItemView',
  components: {
    CImageItem,
    CInteractiveDemo
  },
  setup () {
    return {
      options: {
        Values: {
          image: {
            type: 'select',
            default: 'image-envelope',
            list: [
              { value: 'image-envelope' }
            ]
          }
        },
        Options: {
          size: {
            type: 'select',
            list: [
              { value: 'small' },
              { value: 'medium' },
              { value: 'large' }
            ]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

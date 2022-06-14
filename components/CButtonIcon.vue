<template>
  <c-button
    :icon="icon"
    :palette="palette"
    appearance="text"
    size="small"
  />
</template>

<script>
import CButton from './CButton'

export default {
  name: 'CButtonIcon',
  components: {
    CButton
  },
  props: {
    icon: String,
    palette: {
      type: String,
      default: 'basic'
    }
  }
}
</script>

<style lang="scss"/>

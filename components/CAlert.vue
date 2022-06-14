<template>
  <d-alert
    class="c-alert"
    v-bind="$props"
  />
</template>

<script>
import DAlert from 'dcode/components/DAlert'

export default {
  name: 'CAlert',
  components: {
    DAlert
  },
  props: [
    // Values
    'text',
    'description',

    // Status
    'hide',

    // Options
    'palette',
    'cancel',

    // Icon
    'icon'
  ]
}
</script>

<style lang="scss"/>

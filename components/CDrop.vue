<template>
  <div class="relative">
    <d-icon-item :icon="bindIcon" zoom="cover"/>
    <d-drop
      ref="drop"
      class="c-drop"
      v-bind="$props"
      @on-drop="onDrop"
    />
  </div>
</template>

<script>
import DDrop from 'dcode/components/DDrop'
import DIconItem from 'dcode/components/DIconItem'
import API from '../classes/API'
import { computed, ref } from 'vue'

export default {
  name: 'CDrop',
  components: {
    DDrop,
    DIconItem
  },
  emits: [
    'on-input',
    'on-progress'
  ],
  props: {
    // Values
    ajax: String,
    file: String,

    // Status
    disabled: Boolean,

    // Options
    accept: String
  },
  setup (props, context) {
    const drop = ref(undefined)
    const icon = ref(undefined)

    return {
      drop,
      click: () => drop.value?.input.click(),

      icon,
      bindIcon: computed(() => icon.value || props.file),
      async onDrop ({ files }) {
        let error = false
        let message

        if (props.ajax) {
          context.emit('on-progress', true)

          const body = new FormData()
          body.append('file', files?.[0], files?.[0].name)

          const response = await API.fetch({
            path: props.ajax,
            headers: {},
            request: body
          })

          if (response?.status === 'error') {
            error = true
          } else {
            icon.value = files?.[0]
          }

          message = response?.message
          context.emit('on-progress', false)
        } else {
          icon.value = files?.[0]
        }

        context.emit('on-input', {
          error,
          message,
          file: files?.[0]
        })
      }
    }
  }
}
</script>

<style lang="scss">
.c-drop {
  --dr-width: 0;
}
</style>

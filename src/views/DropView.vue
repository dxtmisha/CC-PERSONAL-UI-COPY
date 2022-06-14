<template>
  <c-interactive-demo
    :options="options"
    name="c-drop"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-drop
          ref="drop"
          class="h-64 bg-gray-500/10"
          v-bind="values"
          @on-input="onInput"
          @on-progress="onProgress"
        />
        <div class="pt-4">
          <c-button
            :progress="progress"
            text="Click"
            @click="() => drop.click()"
          />
        </div>
        <div v-if="event" class="pt-8">
          <div class="font:body2">Event:</div>
          <div>{{ event }}</div>
        </div>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CButton from '../../components/CButton'
import CDrop from '../../components/CDrop'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { ref } from 'vue'
import { ajax } from '@/media/values'

export default {
  name: 'DropView',
  components: {
    CButton,
    CDrop,
    CInteractiveDemo
  },
  setup () {
    const drop = ref(undefined)
    const event = ref(undefined)
    const progress = ref(false)

    return {
      drop,
      options: {
        Status: {
          disabled: { type: 'checkbox' }
        },
        Values: {
          ajax,
          file: { type: 'input' }
        },
        Options: {
          accept: {
            type: 'select',
            list: [
              { value: 'application/pdf' },
              { value: 'image/*' },
              { value: 'image/jpeg' }
            ]
          }
        }
      },

      event,
      progress,
      onInput (values) {
        event.value = values
      },
      onProgress (value) {
        progress.value = value
      }
    }
  }
}
</script>

<style lang="scss"/>

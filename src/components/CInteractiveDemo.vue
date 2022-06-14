<template>
  <div class="grid grid-cols-12 gap-4 items-start">
    <div class="c-interactive-demo__show md:sticky top-0 col-span-12 md:col-span-9 flex justify-center items-center">
      <slot :values="values"/>
    </div>
    <div class="col-span-12 md:col-span-3">
      <div>
        <template v-for="(group, name) in options" :key="name">
          <div class="font:caption pt-6 pb-2">{{ name }}</div>
          <template v-for="({ type, list }, index) in group" :key="index">
            <c-select
              v-if="type === 'select'"
              :list="list"
              :name="index"
              :text="index"
              :value="values[index]"
              adaptive="block"
              appearance="classic"
              class="pt-4"
              @on-input="onInput"
            />
            <c-input
              v-else-if="type === 'input'"
              :name="index"
              :text="index"
              :value="values[index]"
              adaptive="block"
              appearance="classic"
              class="pt-4"
              @on-input="onInput"
            />
            <c-input
              v-else-if="type === 'number'"
              :name="index"
              :text="index"
              :value="values[index]"
              adaptive="block"
              appearance="classic"
              class="pt-4"
              type="number"
              @on-input="event => onInput(event, true)"
            />
            <div v-else class="pt-2">
              <c-checkbox
                :name="index"
                :text="index"
                :value="values[index]"
                @on-input="onInput"
              />
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
  <div class="pt-4">
    <div class="pt-4 border-t">
      <div>&lt;{{ name }}<span v-if="!isValue">/&gt;</span></div>
      <template v-if="isValue">
        <template v-for="(value, index) in values" :key="index">
          <div v-if="value" class="w-full">
            <span>&nbsp;&nbsp;{{ index }}</span>
            <template v-if="value !== true">=&quot;<span v-html="value"/>&quot;</template>
          </div>
        </template>
        <slot name="code" :values="values"/>
        <div>/&gt;</div>
      </template>
    </div>
  </div>
</template>

<script>
import forEach from 'dcode/functions/forEach'
import { computed, ref } from 'vue'

export default {
  name: 'CInteractiveDemo',
  components: {},
  props: {
    name: String,
    options: Object
  },
  setup (props) {
    const values = ref({})

    forEach(props.options, group => {
      forEach(group, (item, index) => {
        values.value[index] = item.default || undefined
      })
    })

    return {
      values,
      isValue: computed(() => {
        let isValue = false

        forEach(values.value, value => {
          if (value && value !== '') {
            isValue = true
          }
        })

        return isValue
      }),
      onInput ({
        name,
        value
      }, number = false) {
        values.value[name] = number ? (parseFloat(value) || undefined) : value
      }
    }
  }
}
</script>

<style lang="scss">
.c-interactive-demo {
  &__show {
    min-height: 256px;
  }
}
</style>

<template>
  <div class="px-4 mx-auto mt-6 md:mt-16 max-w-6xl">
    <div class="block md:flex justify-between items-center">
      <h1 class="pb-4 md:pb-0 font:headline5">coralclub</h1>
      <div class="flex justify-end">
        <c-button-select
          :list="components"
          :value="route.name"
          icon="format_list_bulleted"
          text="Component"
        />
      </div>
    </div>
    <div class="pt-8">
      <router-view/>
    </div>
  </div>
  <div class="h-32"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { components } from './media/components'

export default {
  components: {},
  setup () {
    const route = useRoute()

    return {
      route,
      components
    }
  }
}
</script>

<style lang="scss"/>

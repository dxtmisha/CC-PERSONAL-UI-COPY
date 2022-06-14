<template>
  <c-interactive-demo
    :options="options"
    name="c-plate"
  >
    <template v-slot:default="{ values }">
      <c-plate v-bind="values">
        <p>
          The patented complex is composed of flavonoids from fermented tangerine peel (Citrus reticulata) with a high
          concentration of nobiletin and hesperidin, known to accelerate metabolism and increase daily energy
          expenditure. As a result, excess fat is actively burned and not stored, and food cravings are reduced.
        </p>
        <p class="pt-4">
          Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate blood
          glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite, reducing
          hunger.
        </p>
      </c-plate>
    </template>
  </c-interactive-demo>
</template>

<script>
import CInteractiveDemo from '@/components/CInteractiveDemo'
import CPlate from '../../components/CPlate'

export default {
  name: 'PlateView',
  components: {
    CInteractiveDemo,
    CPlate
  },
  setup () {
    return {
      options: {
        Values: {
          title: {
            type: 'input',
            default: 'Interactive demo'
          }
        },
        Options: {
          background: {
            type: 'checkbox',
            default: true
          },
          borderDark: { type: 'checkbox' },
          padding: { type: 'checkbox' },
          rounded: {
            type: 'select',
            default: 'lg',
            list: [
              { value: 'md' },
              { value: 'lg' },
              { value: 'xl' }
            ]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"/>

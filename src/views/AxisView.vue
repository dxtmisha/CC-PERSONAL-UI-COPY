<template>
  <c-interactive-demo
    :options="options"
    name="c-axis"
  >
    <template v-slot:default="{ values }">
      <div class="w-full">
        <c-axis ref="axis" v-bind="values">
          <template v-slot:slot1>
            <div class="font:headline6">Slot 1 (Top)</div>
            <div>
              The patented complex is composed of flavonoids from fermented tangerine peel (Citrus reticulata) with a
              high
              concentration of nobiletin and hesperidin, known to accelerate metabolism and increase daily energy
              expenditure. As a result, excess fat is actively burned and not stored, and food cravings are reduced.
            </div>
          </template>
          <template v-slot:slot2>
            <div class="font:headline6">Slot 2 (Right)</div>
            <div>
              Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate
              blood glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite,
              reducing hunger.
            </div>
          </template>
          <template v-slot:slot3>
            <div class="font:headline6">Slot 3 (Bottom)</div>
            <div>
              The patented complex is composed of flavonoids from fermented tangerine peel (Citrus reticulata) with a
              high
              concentration of nobiletin and hesperidin, known to accelerate metabolism and increase daily energy
              expenditure. As a result, excess fat is actively burned and not stored, and food cravings are reduced.
            </div>
          </template>
          <template v-slot:slot4>
            <div class="font:headline6">Slot 4 (Left)</div>
            <div>
              Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate
              blood glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite,
              reducing hunger.
            </div>
          </template>
          <template v-slot:slot5>
            <div class="font:headline6">Slot 5 (Down)</div>
            <div>
              The patented complex is composed of flavonoids from fermented tangerine peel (Citrus reticulata) with a
              high
              concentration of nobiletin and hesperidin, known to accelerate metabolism and increase daily energy
              expenditure. As a result, excess fat is actively burned and not stored, and food cravings are reduced.
            </div>
          </template>
          <template v-slot:slot6>
            <div class="font:headline6">Slot 6 (Up)</div>
            <div>
              Green coffee bean extract contains chlorogenic acid to enhance the breakdown of fats and helps regulate
              blood glucose levels. In addition, chromium, found in green coffee beans, helps suppress the appetite,
              reducing hunger.
            </div>
          </template>
        </c-axis>
        <div class="flex gap-2 pt-8">
          <c-button text="toTop" @click="() => axis.toTop('slot1')"/>
          <c-button text="toRight" @click="() => axis.toRight('slot2')"/>
          <c-button text="toBottom" @click="() => axis.toBottom('slot3')"/>
          <c-button text="toLeft" @click="() => axis.toLeft('slot4')"/>
          <c-button text="toDown" @click="() => axis.toDown('slot5')"/>
          <c-button text="toUp" @click="() => axis.toUp('slot6')"/>
        </div>
      </div>
    </template>
  </c-interactive-demo>
</template>

<script>
import CAxis from '../../components/CAxis'
import CButton from '../../components/CButton'
import CInteractiveDemo from '@/components/CInteractiveDemo'
import { ref } from 'vue'

export default {
  name: 'AxisView',
  components: {
    CAxis,
    CButton,
    CInteractiveDemo
  },
  setup () {
    return {
      axis: ref(undefined),
      options: {
        Values: {
          selected: {
            type: 'select',
            list: [
              { value: 'slot1' },
              { value: 'slot2' },
              { value: 'slot3' },
              { value: 'slot4' },
              { value: 'slot5' },
              { value: 'slot6' }
            ],
            default: 'slot1'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>

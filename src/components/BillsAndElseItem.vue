<script setup>
import HintUI from "@/ui/HintUI.vue";
import {ModelSelect} from "vue-search-select";
import {reactive, ref, watch} from "vue";
import {useStore} from "@/stores/store.js";
import MarketplaceItem from "@/components/MarketplaceItem.vue";

const {state, changeState} = useStore()
const bills = reactive(state.bills)
const billModes = [
  { text: "Old Man's War", value: 'asdf' },
  { value: "Old Man's War", text: 'asdf' },
]
watch(bills, () => {
  changeState(bills)
})
</script>

<template>
  <div class="content items">
    <div class="item bills">
      <h2 class="item-title">Налоги</h2>
      <div class="content">
        <div class="form-item">
          <div class="form-label required">
            <p>Налоговый режим</p>
            <HintUI hint="Является необязательным для заполнения блоком. Данные из этого блока участвуют в расчете показателей прибыльности, следовательно, его заполнение сделает расчет прибыльности товара более достоверным." />
          </div>
          <model-select
            :options="billModes"
            v-model="bills.billMode"
            placeholder="Выберите из списка"
          >
          </model-select>
        </div>
        <div class="form-item">
          <div class="form-label">
            <p>Налоговая ставка, %</p>
            <HintUI hint="Стоимость упаковки товара за 1 единицу" />
          </div>
          <input type="text" placeholder="Стоимость упаковки за 1 ед." v-model="bills.taxRate">
        </div>
        <div class="form-item">
          <div class="form-label">
            <p>В рублях</p>
          </div>
          <input
            disabled
            type="text"
            v-model="bills.taxRateRUB">
        </div>
      </div>
    </div>
    <div class="item">
      <h2 class="item-title">Прочее</h2>
      <div class="content">
        <div class="form-item">
          <div class="form-label">
            <p>Прочие расходы, ₽</p>
            <HintUI hint="Стоимость упаковки товара за 1 единицу" />
          </div>
          <input
            placeholder="Реклама, форсмажор и т.д."
            type="text"
            v-model="bills.elses">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items {
  grid-template-columns: 50% 50%;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
}

.item.bills .content {
  grid-template-columns: 2fr 1fr 100px;
}
</style>
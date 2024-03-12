<script setup>
import HintUI from "@/ui/HintUI.vue";
import {ModelSelect} from "vue-search-select";
import {reactive, ref, watch} from "vue";
import {useStore} from "@/stores/store.js";

const {state, changeState} = useStore()
const ff = reactive(state.ff)
watch(ff, () => {
  changeState(ff)
})
</script>

<template>
  <div class="item">
    <h2 class="item-title">Фулфилмент</h2>
    <div class="content">
      <div class="form-item">
        <div class="form-label required">
          <p>Логистика от произ., ₽</p>
          <HintUI hint="Является необязательным для заполнения блоком. Данные из этого блока участвуют в расчете показателей прибыльности, следовательно, его заполнение сделает расчет прибыльности товара более достоверным." />
        </div>
        <input type="text" v-model="ff.logisticsFrom">
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Упаковка, ₽</p>
          <HintUI hint="Стоимость упаковки товара за 1 единицу" />
        </div>
        <input type="text" placeholder="Стоимость упаковки за 1 ед." v-model="ff.packaging">
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Логистика до маркетплейса, ₽</p>
          <HintUI hint="Стоимость логистики за 1 единицу товара" />
        </div>
        <input type="text" v-model="ff.logisticsTo">
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Услуги фулфилмента, ₽</p>
          <HintUI hint="Стоимость упаковки, хранения и прочих услуг фулфилмента" />
        </div>
        <input type="text" v-model="ff.services">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  .content {
    grid-template-columns: 1fr 1fr 240px 1fr;
  }
}
</style>
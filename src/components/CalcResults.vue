<script setup>
import {useStore} from "@/stores/store.js";
import HintUI from "@/ui/HintUI.vue";

const {state} = useStore() // all values you can get from this object


</script>

<template>
  <div class="results">
    <h2 class="item-title">Итоговые значения за 1 ед.</h2>
    <div class="results-content">
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Инвестиции <HintUI hint="Общая сумма затрат на 1 единицу товара" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Доходность <HintUI hint="Доля прибыли от вложений" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Маржинальность <HintUI hint="Доля прибыли в выручке" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Маржинальная прибыль <HintUI hint="Маржа - разница между выручкой и всеми расходами" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Минимальная цена <HintUI hint="Минимальная цена реализации на WB для исключения убытков" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Максимальная скидка <HintUI hint="Максимальное значение скидки для исключения убытков" /></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.results {
  padding: 49px 30px;
  border-radius: 18px;
  background: rgba(var(--secondary-rgb), 10%);

  @media (max-width: 768px) {
    //background: #FBFBFC;
  }
  .item-title {
    margin-bottom: 28px;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
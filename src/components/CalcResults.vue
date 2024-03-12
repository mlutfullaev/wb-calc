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
        <span>Инвестиции <HintUI hint="HELLOOO" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Доходность <HintUI hint="HELLOOO" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Маржинальность <HintUI hint="HELLOOO" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Маржинальная прибыль <HintUI hint="HELLOOO" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Минимальная цена <HintUI hint="HELLOOO" /></span>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <span>Максимальная скидка <HintUI hint="HELLOOO" /></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.results {
  padding: 49px 30px;
  border-radius: 18px;
  background: rgba(var(--secondary-rgb), 10%);

  .item-title {
    margin-bottom: 28px;
  }
  &-content {
    display: flex;
    gap: 40px;

    &-item {
      p {
        font-size: 22px;
        font-weight: 700;
        padding-bottom: 10px;
      }
      > span {
        font-size: 12px;
        color: rgba(var(--primary-rgb), 80%);
        padding-right: 5px;

        .hint-content {
          top: 100%
        }
      }
    }
  }
}
</style>
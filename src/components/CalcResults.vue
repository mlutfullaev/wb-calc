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
        <div>
          <span>Инвестиции</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <div>
          <span>Доходность</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <div>
          <span>Маржинальность</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <div>
          <span>Маржинальная прибыль</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <div>
          <span>Минимальная цена</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
      <div class="results-content-item">
        <p>1 400,22 ₽</p>
        <div>
          <span>Максимальная скидка</span>
          <HintUI hint="HELLOOO" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  padding: 49px 30px;
  border-radius: 18px;
  background: rgba(var(--secondary-rgb), 10%);

  h2 {
    padding-bottom: 40px;
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
      div {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 12px;
        color: rgba(var(--primary-rgb), 80%);
        padding-right: 10px;
      }
    }
  }
}
</style>
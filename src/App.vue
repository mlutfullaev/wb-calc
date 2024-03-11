<script setup>
import ItemTop from "@/components/ItemTop.vue";
</script>

<template>
  <div class="app">
    <div class="item">
      <h1>Калькулятор <span>Wildberries</span> для поставщиков</h1>
      <p class="txt">Калькулятор цены товара и размера скидки на Вайлдберриз для продавцов рассчитывает конечную стоимость товаров с учётом комиссии, всех скидок, хранения товаров на складе и множества других факторов, актуальных в 2024 году.</p>
    </div>
    <div class="item">
      <ItemTop />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  padding: 20px;
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 20px;

    span {
      color: var(--pink)
    }
  }
  .item {
  }
}
</style>

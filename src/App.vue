<script setup>
import ItemTop from "@/components/ItemTop.vue";
import ProductItem from "@/components/ProductItem.vue";
import {reactive, ref} from "vue";
import FFItem from "@/components/FFItem.vue";
import MarketplaceItem from "@/components/MarketplaceItem.vue";
import BillsAndElseItem from "@/components/BillsAndElseItem.vue";
import CalcResults from "@/components/CalcResults.vue";
import TheFooter from "@/components/TheFooter.vue";
import BatchCalc from "@/components/BatchCalc.vue";
import ModalVideo from "@/components/ModalVideo.vue";
const store = reactive({})
const modalActive = ref(false)
</script>

<template>
  <div class="app">
    <div class="item">
      <h1>Калькулятор <span>Wildberries</span> для поставщиков</h1>
      <p class="txt">Калькулятор цены товара и размера скидки на Вайлдберриз для продавцов рассчитывает конечную стоимость товаров с учётом комиссии, всех скидок, хранения товаров на складе и множества других факторов, актуальных в 2024 году.</p>
    </div>
    <div class="item">
      <ItemTop @openModal="modalActive = true" />
      <ProductItem />
    </div>
    <FFItem />
    <MarketplaceItem />
    <BillsAndElseItem />
    <BatchCalc />
    <CalcResults />
    <ModalVideo :active="modalActive" @close="modalActive = false"/>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.app {
  width: 100%;
  padding: 20px;
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    background: #FBFBFC;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 20px;

    span {
      color: var(--pink)
    }
  }
  .item-title {
    font-size: 16px;
    padding-bottom: 12px;

    span {
      font-size: 12px;
      font-weight: 400;
      color: rgba(var(--primary-rgb), 40%);
      padding-left: 5px;
    }
  }
  .content {
    display: grid;
    gap: 12px;
  }
}
</style>

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
import {useStore} from "@/stores/store.js";
const modalActive = ref(false)
const clearCount = ref(0)
const {clear} = useStore()

const onClear = () => {
  // clearCount.value = clearCount.value + 1;
  // console.log(clearCount.value)
  clear()
}
</script>

<template>
  <div class="app">
    <div class="header">
      <div>
        <h1>Калькулятор <span>Wildberries</span> для поставщиков</h1>
        <p class="txt">Калькулятор цены товара и размера скидки на Вайлдберриз для продавцов рассчитывает конечную стоимость товаров с учётом комиссии, всех скидок, хранения товаров на складе и множества других факторов, актуальных в 2024 году.</p>
      </div>
<!--      <div class="tablet">-->
<!--        <h1>-->
<!--          <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M0 13H11V24H2C0.895431 24 0 23.1046 0 22V13Z" fill="#263053"/>-->
<!--            <rect x="3" y="18" width="5" height="1" fill="white"/>-->
<!--            <path d="M13 0H28C29.1046 0 30 0.895431 30 2V22C30 23.1046 29.1046 24 28 24H13V0Z" fill="#263053"/>-->
<!--            <path d="M21.8281 15.3636V14.9034C21.8281 14.554 21.902 14.233 22.0497 13.9403C22.2003 13.6449 22.4176 13.4091 22.7017 13.233C22.9886 13.054 23.3381 12.9645 23.75 12.9645C24.1676 12.9645 24.5185 13.0526 24.8026 13.2287C25.0895 13.4048 25.3054 13.6406 25.4503 13.9361C25.598 14.2287 25.6719 14.5511 25.6719 14.9034V15.3636C25.6719 15.7131 25.598 16.0355 25.4503 16.331C25.3026 16.6236 25.0852 16.858 24.7983 17.0341C24.5114 17.2131 24.1619 17.3026 23.75 17.3026C23.3324 17.3026 22.9815 17.2131 22.6974 17.0341C22.4134 16.858 22.1974 16.6236 22.0497 16.331C21.902 16.0355 21.8281 15.7131 21.8281 15.3636ZM23.0682 14.9034V15.3636C23.0682 15.5653 23.1165 15.7557 23.2131 15.9347C23.3125 16.1136 23.4915 16.2031 23.75 16.2031C24.0085 16.2031 24.1847 16.1151 24.2784 15.9389C24.375 15.7628 24.4233 15.571 24.4233 15.3636V14.9034C24.4233 14.696 24.3778 14.5028 24.2869 14.3239C24.196 14.1449 24.017 14.0554 23.75 14.0554C23.4943 14.0554 23.3168 14.1449 23.2173 14.3239C23.1179 14.5028 23.0682 14.696 23.0682 14.9034ZM17.3494 10.3693V9.90909C17.3494 9.55682 17.4247 9.23437 17.5753 8.94176C17.7259 8.64631 17.9432 8.41051 18.2273 8.23438C18.5142 8.05824 18.8608 7.97017 19.267 7.97017C19.6875 7.97017 20.0398 8.05824 20.3239 8.23438C20.608 8.41051 20.8239 8.64631 20.9716 8.94176C21.1193 9.23437 21.1932 9.55682 21.1932 9.90909V10.3693C21.1932 10.7216 21.1179 11.044 20.9673 11.3366C20.8196 11.6293 20.6023 11.8636 20.3153 12.0398C20.0313 12.2131 19.6818 12.2997 19.267 12.2997C18.8523 12.2997 18.5014 12.2116 18.2145 12.0355C17.9304 11.8565 17.7145 11.6222 17.5668 11.3324C17.4219 11.0398 17.3494 10.7187 17.3494 10.3693ZM18.598 9.90909V10.3693C18.598 10.5767 18.6463 10.7685 18.7429 10.9446C18.8423 11.1207 19.017 11.2088 19.267 11.2088C19.5284 11.2088 19.706 11.1207 19.7997 10.9446C19.8963 10.7685 19.9446 10.5767 19.9446 10.3693V9.90909C19.9446 9.7017 19.8991 9.50852 19.8082 9.32955C19.7173 9.15057 19.5369 9.06108 19.267 9.06108C19.0142 9.06108 18.8395 9.15199 18.7429 9.33381C18.6463 9.51562 18.598 9.70739 18.598 9.90909ZM17.9119 17L23.9119 8.27273H25.0284L19.0284 17H17.9119Z" fill="white"/>-->
<!--            <path d="M0 2C0 0.895431 0.895431 0 2 0H11V11H0V2Z" fill="#263053"/>-->
<!--            <rect x="3" y="5" width="5" height="1" fill="white"/>-->
<!--            <rect x="6" y="3" width="5" height="1" transform="rotate(90 6 3)" fill="white"/>-->
<!--          </svg>-->
<!--          Калькулятор прибыли-->
<!--        </h1>-->
<!--      </div>-->
    </div>
    <div class="item">
      <ItemTop @clear="onClear" @openModal="modalActive = true" />
      <ProductItem :key="clearCount" />
    </div>
    <FFItem :key="clearCount" />
    <MarketplaceItem :key="clearCount" />
    <BillsAndElseItem :key="clearCount" />
    <BatchCalc :key="clearCount" />
    <CalcResults :key="clearCount" />
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
    padding: 0;
    gap: 0;
    max-width: 100%;
  }
  .header {
    padding: 20px;

    @media (max-width: 768px) {
      background: #FBFBFC;
    }
    @media (max-width: 450px) {
      text-align: center;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 20px;

    span {
      color: var(--pink)
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  .item {
    @media (max-width: 768px) {
      margin-bottom: 20px;
      padding: 20px;
      background: #fff;
      box-shadow: 0 7px 6px rgba(0, 0, 0, 0.1);
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

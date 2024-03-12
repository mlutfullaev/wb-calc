<script setup>
import HintUI from "@/ui/HintUI.vue";
import {ref, watch} from "vue";
import {useStore} from "@/stores/store.js";

const {state, changeState} = useStore()
const amount = ref(state.amount)
const hidden = ref(true)
watch(amount, () => {
  changeState({amount: amount.value})
})
</script>

<template>
  <div class="item batch-calc">
    <h2 class="item-title" @click="hidden = !hidden">
      Расчет партии
      <svg :class="{reverse: !hidden}" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.41421 0.317993L6.36396 5.26774L4.94975 6.68195L0 1.73221L1.41421 0.317993Z" fill="#263053"/>
        <path d="M9.8995 1.73221L4.94975 6.68195L3.53553 5.26774L8.48528 0.317993L9.8995 1.73221Z" fill="#263053"/>
      </svg>
    </h2>
    <div :class="`batch-calc-content${hidden ? ' hidden' : ''}`">
      <p class="txt">Рассчитывайте прибыльность партии исходя из планируемой суммы инвестиций в товар.</p>
      <div class="content">
        <div class="form-item">
          <div class="form-label required">
            <p>Мои вложения, ₽</p>
            <HintUI hint="Планируемая сумма инвестиций в товар" />
          </div>
          <input _ngcontent-serverapp-c127 placeholder="Введите сумму инвестиции" v-model="amount" type="text">
        </div>
        <div class="batch-card">
          <span>Кол-во товара</span> <HintUI hint="Количество планируемого к поставке товара (рассчитывается автоматически)"/>
          <p>1 870 шт</p>
        </div>
        <div class="batch-card">
          <span>Выручка</span> <HintUI hint="Доход от реализации всей партии (без вычета издержек) (рассчитывается автоматически)"/>
          <p>1 870 шт</p>
        </div>
        <div class="batch-card">
          <span>Маржинальная прибыль</span> <HintUI hint="Разница между выручкой и всеми расходами (рассчитывается автоматически)"/>
          <p>1 870 шт</p>
        </div>
        <div class="batch-card">
          <span>Точка безубыточности</span> <HintUI hint="Количество товара, которое необходимо реализовать для возврата инвестиций и “выхода в 0” (рассчитывается автоматически)"/>
          <p>1 870 шт</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.batch-calc {
  .item-title {
    cursor: pointer;

    svg {
      margin-left: 10px;
      transition: .3s;

      &.reverse {
        transform: rotate(180deg);
      }
    }
  }
  &-content {
    transition: .3s;
    max-height: 500px;
    opacity: 1;

    &.hidden {
      opacity: 0;
      max-height: 0;
    }
    .content {
      display: flex;
      align-items: end;
      width: calc(100% - 20px);

      @media (max-width: 768px) {
        flex-wrap: wrap;

        .form-item {
          width: 100%;
          grid-column: 1 / 3;
        }
        input {
          max-width: 300px;
        }
      }
      @media (max-width: 450px) {
        display: grid;
        grid-template-columns: 50% 50%;

        input {
          max-width: 100%;
        }
        .batch-card {
          width: 100%;
          padding: 10px;
        }
        .batch-card:nth-child(4),
        .batch-card:nth-child(5) {
          grid-column: 1 / 3;
          width: 100%;
        }
      }
      @media (max-width: 320px) {
        .batch-card {
          grid-column: 1 / 3 !important;
        }
      }
    }
    .txt {
      padding-bottom: 20px;
      font-size: 13px;
    }
    .batch-card {
      padding: 20px;
      border-radius: 3px;
      border: 1px solid rgba(var(--primary-rgb), 20%);
      width: max-content;
      span {
        font-size: 12px;
        color: rgba(var(--primary-rgb), 70%);
        padding-right: 5px;
      }
      p {
        padding-top: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--primary);
      }
    }
  }
}
</style>
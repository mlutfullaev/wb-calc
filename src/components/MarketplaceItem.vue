<script setup>
import HintUI from "@/ui/HintUI.vue";
import {ModelSelect} from "vue-search-select";
import {reactive, ref, watch} from "vue";
import {useStore} from "@/stores/store.js";

const {state, changeState} = useStore()
const marketplace = reactive(state.marketplace)
const storeLocations = [
  { text: "Old Man's War", value: 'asdf' },
  { value: "Old Man's War", text: 'asdf' },
]
watch(marketplace, () => {
  changeState(marketplace)
})
</script>

<template>
  <div class="item">
    <h2 class="item-title">Маркетплейс <span>Используются данные по складам за 19 февраля 2024г.</span></h2>
    <div class="content first">
      <div class="form-item">
        <div class="form-label required">
          <p>Склад отгрузки</p>
          <HintUI hint="Является необязательным для заполнения блоком. Данные из этого блока участвуют в расчете показателей прибыльности, следовательно, его заполнение сделает расчет прибыльности товара более достоверным." />
        </div>
        <model-select
            :options="storeLocations"
            v-model="marketplace.storeLocation"
            placeholder="Выберите из списка"
        >
        </model-select>
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Комиссия Wildberries, %</p>
          <HintUI hint="Стоимость упаковки товара за 1 единицу" />
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.wbComission">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.wbComissionRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Логистика до Wildberries</p>
          <HintUI hint="Стоимость логистики за 1 единицу товара" />
        </div>
        <div class="content form-item-inputs">
          <input
            placeholder="Длина уп, см"
            type="text"
            v-model="marketplace.lengthSM">
          <input
            placeholder="Ширина уп, см"
            type="text"
            v-model="marketplace.widthSM">
          <input
            placeholder="Высота уп, см"
            type="text"
            v-model="marketplace.heightSM">
          <input
            placeholder="Вес кг"
            type="text"
            v-model="marketplace.weightKG">
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.inRUB">
      </div>
    </div>
    <div class="content second">
      <div class="form-item">
        <div class="form-label">
          <p>Брак, %</p>
          <HintUI hint="Является необязательным для заполнения блоком. Данные из этого блока участвуют в расчете показателей прибыльности, следовательно, его заполнение сделает расчет прибыльности товара более достоверным." />
        </div>
        <input
          type="text"
          v-model="marketplace.defective">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.defectiveRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Хранение 1 единицы в день, ₽</p>
          <HintUI hint="Хранение 1 единицы в день, ₽" />
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.storaging">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.storagingRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Выкуп, %</p>
          <HintUI hint="Стоимость логистики за 1 единицу товара" />
        </div>
        <input
          type="text"
          v-model="marketplace.ranson">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Логистика с учетом процента выкупа</p>
        </div>
        <input
          disabled
          type="text"
          v-model="marketplace.logisticsWithRanson">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  > .content {
    @media (max-width: 450px) {
      grid-template-columns: repeat(4, 1fr) !important;
    }
    &.first {
      grid-template-columns: 20% 18% 100px 1fr 100px;
      padding-bottom: 20px;

      @media (max-width: 1100px) {
        grid-template-columns: 2fr 2fr 1fr;

        .form-item:nth-child(4) {
          grid-column: 1 / 3;
        }
      }
      @media (max-width: 450px) {
        .form-item:nth-child(1) {
          grid-column: 1 / 5;
        }
        .form-item:nth-child(2) {
          grid-column: 1 / 4;
        }
        .form-item:nth-child(4) {
          grid-column: 1 / 5;

          .form-item-inputs {
            grid-template-columns: 1fr 1fr;
          }
        }
        .form-item:nth-child(5) {
          display: none;
        }
      }
    }
    &.second {
      grid-template-columns: 10% 100px 18% 100px 1fr 2fr;

      @media (max-width: 1100px) {
        grid-template-columns: 1fr 100px 2fr 100px;

        .form-item:nth-child(6) {
          grid-column: 2 / 4;
        }
      }
      @media (max-width: 450px) {
        .form-item:nth-child(2) {
          grid-column: 2 / 5;
        }
        .form-item:nth-child(3) {
          grid-column: 1 / 4;
        }
        .form-item:nth-child(5),
        .form-item:nth-child(6) {
          grid-column: 1 / 5;
        }
      }
    }
  }
  .form-item-inputs {
    grid-template-columns: 2fr 2fr 2fr 1fr
  }
}
</style>
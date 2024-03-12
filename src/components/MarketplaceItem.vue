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
          <HintUI hint=" Выберите из списка склад, на который планируете делать поставку, или тип отгрузки (FBS, DBS). Выбранный склад отгрузки или тип отгрузки влияет на расчет суммы логистики, процента комиссии WB и хранения на складе WB.  Внимание! Если склада нет в списке, то на данный склад нельзя доставить товар с типом хранения ‘Короб’ " />
        </div>
        <model-select
          _ngcontent-serverapp-c123
            :options="storeLocations"
            v-model="marketplace.storeLocation"
            placeholder="Выберите из списка"
        >
        </model-select>
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Комиссия Wildberries, %</p>
          <HintUI hint="Процент комиссии WB за реализацию 1 ед.товара. Заполняется автоматически в зависимости от выбранного предмета" />
        </div>
        <input
          disabled
          type="text"
          _ngcontent-serverapp-c127
          v-model="marketplace.wbComission">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          type="text"
          _ngcontent-serverapp-c127
          v-model="marketplace.wbComissionRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Логистика до Wildberries</p>
          <HintUI hint="Стоимость доставки товара от склада WB до ПВЗ. Заполняется автоматически в зависимости от введенных габаритов, веса, а также выбранного склада отгрузки" />
        </div>
        <div class="content form-item-inputs">
          <input
            placeholder="Длина уп, см"
            type="text"
            _ngcontent-serverapp-c127
            v-model="marketplace.lengthSM">
          <input
            placeholder="Ширина уп, см"
            type="text"
            _ngcontent-serverapp-c127
            v-model="marketplace.widthSM">
          <input
            placeholder="Высота уп, см"
            type="text"
            _ngcontent-serverapp-c127
            v-model="marketplace.heightSM">
          <input
            placeholder="Вес кг"
            _ngcontent-serverapp-c127
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
          _ngcontent-serverapp-c127
          v-model="marketplace.inRUB">
      </div>
    </div>
    <div class="content second">
      <div class="form-item">
        <div class="form-label">
          <p>Брак, %</p>
          <HintUI hint="Соотношение бракованных товаров к общей партии. Среднее значение остается в пределах 2%. Является необязательным для заполнения блоком. Данные из этого блока участвуют в расчете показателей прибыльности, следовательно, его заполнение сделает расчет прибыльности товара более достоверным." />
        </div>
        <input
          type="text"
          _ngcontent-serverapp-c127
          v-model="marketplace.defective">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          disabled
          _ngcontent-serverapp-c127
          type="text"
          v-model="marketplace.defectiveRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Хранение 1 единицы в день, ₽</p>
          <HintUI hint="Месячная стоимость хранения на складе WB за 1 ед.товара. Заполняется автоматически в зависимости от введенных габаритов, а также выбранного склада отгрузки" />
        </div>
        <input
          disabled
          _ngcontent-serverapp-c127
          type="text"
          v-model="marketplace.storaging">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>В рублях</p>
        </div>
        <input
          _ngcontent-serverapp-c127
          disabled
          type="text"
          v-model="marketplace.storagingRUB">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Выкуп, %</p>
          <HintUI hint="Среднее значение выкупленных товаров от заказанных У разных категорий товаров процент выкупа отличается. Товары с размерностью имеют меньший показатель, чем товары повседневного спроса. Пример категорий и средних значений для них: Продукты — 94-97% Косметика — 90-95% Товары для дома — 85-95% Товары для детей (не одежда) — 85-95% Спорт-товары — 85-95% Электроника — 85-95% Зоотовары — 85-90% Аксессуары — 65-85% Одежда и обувь — 30-40%" />
        </div>
        <input
          type="text"
          _ngcontent-serverapp-c127
          v-model="marketplace.ranson">
      </div>
      <div class="form-item">
        <div class="form-label">
          <p>Логистика с учетом процента выкупа</p>
          <HintUI hint="Заполняется автоматически в зависимости от введенных габаритов, веса, а также выбранного склада отгрузки и указанного процента выкупа" />
        </div>
        <input
          disabled
          _ngcontent-serverapp-c127
          type="text"
          v-model="marketplace.logisticsWithRanson">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  > .content {
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
        grid-template-columns: repeat(4, 1fr);

        .form-item:nth-child(1) {
          grid-column: 1 / 5;
        }
        .form-item:nth-child(2) {
          grid-column: 1 / 4;
        }
        .form-item:nth-child(4) {
          grid-column: 1 / 5;
        }
        .form-item-inputs {
          grid-template-columns: 1fr 1fr;
        }
        .form-item:nth-child(5) {
          grid-column: 1 / 5;
        }
      }
      @media (max-width: 340px) {
        grid-template-columns: 1fr;

        .form-item {
          grid-column: 1 / 2 !important;
        }
        .form-item-inputs {
          grid-template-columns: 1fr;
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
        grid-template-columns: 1fr 70px;

        .form-item:nth-child(1) {
          grid-column: 1 / 2;
        }
        .form-item:nth-child(5),
        .form-item:nth-child(6), {
          grid-column: 1 / 3;
        }
      }
      @media (max-width: 340px) {
        grid-template-columns: 1fr;

        .form-item:nth-child(5),
        .form-item:nth-child(6), {
          grid-column: 1 / 2;
        }
      }
    }
  }
  .form-item-inputs {
    grid-template-columns: 2fr 2fr 2fr 1fr
  }
}
</style>
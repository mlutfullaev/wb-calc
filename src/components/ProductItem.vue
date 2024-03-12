<script setup>
import HintUI from "@/ui/HintUI.vue";
import {ModelSelect} from "vue-search-select";
import {reactive, watch} from "vue";
import {useStore} from "@/stores/store.js";

const {state, changeState} = useStore()
const productOptions = [
  { text: "Old Man's War", value: 'asdf' },
  { value: "Old Man's War", text: 'asdf' },
]
const product = reactive(state.product)
watch(product, () => {
  changeState(product)
})
</script>

<template>
  <div>
    <h2 class="item-title">Товар</h2>
    <div class="content">
      <div class="form-item">
        <div class="form-label required">
          <p>Логистика от произ., ₽</p>
          <HintUI hint="Выберите из списка товар" />
        </div>
        <model-select

          :options="productOptions"
          v-model="product.object"
          placeholder="Выберите из списка"
        >
        </model-select>
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Цена на WB, ₽</p>
        </div>
        <input type="text" v-model="product.priceOnWB">
      </div>
      <div class="form-item">
        <div class="form-label required">
          <p>Себестоимость, ₽</p>
          <HintUI hint="Закупочная цена товара" />
        </div>
        <input type="text" v-model="product.costPrice">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
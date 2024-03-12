import {defineStore} from "pinia";
import {ref} from "vue";

export const useStore = defineStore('store', () => {
  const state = ref(JSON.parse(localStorage.getItem('store')) || {
    product: {},
    ff: {},
    bills: {},
    marketplace: {},
    batchCalc: {}
  })

  const changeState = (val) => {
    state.value = {...state.value, val}
    localStorage.setItem('store', JSON.stringify(state.value))
  }

  return {state, changeState}
})
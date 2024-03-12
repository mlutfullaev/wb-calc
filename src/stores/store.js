import {defineStore} from "pinia";
import {ref} from "vue";

const initial = {
  product: {},
  ff: {},
  bills: {},
  marketplace: {},
  batchCalc: {}
}
export const useStore = defineStore('store', () => {
  const state = ref(JSON.parse(localStorage.getItem('store')) || initial)

  const changeState = (val) => {
    state.value = {...state.value, val}
    localStorage.setItem('store', JSON.stringify(state.value))
  }

  const clear = () => {
    state.value = initial
    localStorage.setItem('store', JSON.stringify(initial))
    location.reload()
  }

  return {state, changeState, clear}
})
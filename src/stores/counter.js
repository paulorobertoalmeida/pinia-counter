import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    getCounter: (value) => {
      if (value.counter % 2 === 0) return "even";
      return "Odd"
    }
  },
  actions: {
    increment() {
      this.counter++
      decrement(){
        this.counter--
      }
    }
  }
})

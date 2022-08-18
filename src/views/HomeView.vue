<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <h3>This number is: {{ storeCounter.oddOrEven }}</h3>
  </div>
  <hr />
  <h3 class="text">Edit counter:</h3>
  <hr />
  <div class="edit-counter">
    <input v-model="storeCounter.count" type="number" />
  </div>
</template>

<script setup>
import Counter from "../components/Counter.vue";
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>

<style>
.count {
  
  font-size: 80px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
}

</style>
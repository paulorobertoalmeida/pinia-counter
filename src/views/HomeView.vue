<script setup>
import { ref } from "vue";
import {useCounterStore} from "../stores/counter"

const counter = ref(0);

const decrement = (() => {
			if (counter.value) {
				counter -= 1;
			}
		});
const increment = (() => {
			counter += 1;
		});
	



</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ storeCounter.counter }}</div>
    <div class="button">
      <button @click="decrement">Decrease --</button>
      <button @click="increment">Increase ++</button>
    </div>
  </div>
</template>

<style>
.counter {
  font-size: 100px;
}
</style>

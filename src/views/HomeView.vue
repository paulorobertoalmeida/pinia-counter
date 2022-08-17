<template>
  <div class="flex items-center justify-center gap-x-4">
    <button
      class="px-4 py-2 text-white bg-blue-600 focus:outline-none"
      @click="increment">
      Increment
    </button>
    {{ counter }}
    <button
      class="px-4 py-2 text-white bg-red-600 focus:outline-none"
      @click="decrement">
      Decrement
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCounterStore} from '../stores/counter'


    const counter = ref(0);

    const increment = (()=> {
      counter.value++; 
    });
    const decrement = (() => {
      counter.value--;
    });

</script>



<!-- <script setup>
import { ref } from "vue";
import useStore from "../features/useStore";


const { counterList } = useStore;

const counter = ref(0);

const decrement = (() => {
			if (counter.value) {
				return counter -= 1;
			}
		});
const increment = (() => {
			return counter += 1;
		});
	



</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ counter }}</div>
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
</style> -->

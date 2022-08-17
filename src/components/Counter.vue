<template>
  <div class="count" @click="storeCounter.increaseCount">
    {{ storeCounter.count }}
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore();  
</script>
<script setup>
import { ref } from "vue";

const counter = ref(0);

</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">{{ counter }}</div>
    <div class="button">
      <button>Decrease --</button>
      <button>Increase ++</button>
    </div>
  </div>
</template>

<style>
.counter {
  font-size: 100px
}
</style>

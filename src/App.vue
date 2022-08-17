<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="app">
  <nav class="topnav">
    
    <RouterLink class="active" to="/">Home</RouterLink> 
    <RouterLink to="/about">About</RouterLink>
  </nav>

<RouterView />
</div>

</template>

<style>
* {
  background-color: #dee6dc
}
.app {
  text-align: center;
  
}
.app nav {
  font-size: 20px;
}

.topnav {
  overflow: hidden;
  background-color: #422040;
  display: flex;
  justify-content: center;
}

.topnav a {
  margin: auto 0 auto;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: #422040;
}

.topnav a:hover {
  background-color: #038253;
  color: white;
}

.topnav a.active {
  background-color: #038253;
  color: white;
}
</style>
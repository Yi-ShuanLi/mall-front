<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 20vh;
}
.content{
  width:100%;
  height:80vh;
  text-align:center;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
}
</style>

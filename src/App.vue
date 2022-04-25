<template>
  <div style="width: 100%; height: auto">
    <router-view />
    <MaskLayer />
  </div>
</template>

<script setup>
import MaskLayer from "@/component/maskLayer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
